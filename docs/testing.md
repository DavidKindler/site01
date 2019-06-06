---
id: testing
title: Testing
---

# Unit Testing:

A unit test is a short function to test the behaviour of a small unit of production code, producing a pass/fail result.
Using jest and enzyme we can test React Components.

Tests are executable documents. Any change in code breaks test cases and warns the developer that some changes have
happened which she/he does not want to do. Unit Testing helps to catch bugs at development stage that results in better
code quality. So Testable code is always better quality code.

**Unit Testing of React Component using Jest and Enzyme:**

Jest is a test framework for JavaScript. It is recommended by Facebook for React Component Testing.

## Why Jest

* Jest is very fast. It is a perfect testing framework for large applications

* Jest is very easy to Set-Up and because of almost zero configuration it inspires engineers to write more test cases,
  which in turn results in more stable and healthy code base.

* Another very useful feature of jest is snapshot testing. It is a great tool to find any unexpected change between
  releases.

* Jest allows to mock functions.

* Jest also continues to improve considerably with every update

Enzyme is a JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse your React
Components' output. It's higher level abstraction over React's test utils. Enzyme provides a mechanism to mount and
traverse React.js component trees. This will help us get access to component's own properties and state as well as its
children props in order to run our assertions.

In Software Center React Project we have combined jest and enzyme. For unit testing of react component we have used
shallow rendering of enzyme with Jest snapshot.

## Set Up:

Below are the steps to set up Jest and Enzyme.

* Install jest and enzyme by run following command using node. We can use yarn too.

`npm install --save-dev jest react-test-renderer enzyme enzyme-adapter-react-16 enzyme-to-json`

* Update packge.json. Add scripts to run test. Add set up file for jest. Add snapshotSerializers which allows to pass
  Enzyme wrappers directly to Jest's snapshot matcher, without converting them manually by calling enzyme-to-json's
  toJson function.

**_packge.json_**

```json
"scripts":{
  "test": "jest",
  "test:watch": "jest --watch"
},
"jest": {
  "setupFiles": ["./jestsetup.js"],
  "snapshotSerializers": ["enzyme-to-json/serializer"]
},
```

* Create a test/jestsetup.js file to customize Jest environment

**_jestsetup.js_**

```javascript
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });
// Make Enzyme functions available in all test files without importing
global.shallow = shallow;
global.render = render;
global.mount = mount;
```

### _Snapshot Testing:_

**Testing Simple Component Rendering**

Suppose we want to test below Button Component.

```javascript
import React from 'react';

export default class Button extends React.Component {
  render() {
    return (
      <span className="input-group-btn">
        <input className="btn" name="btnG" value="Button" type="button" />
      </span>
    );
  }
}
```

For snapshot testing of this component create a folder named `__tests__` and inside that folder create Button.test.js
file. There are several methods provided by jest for snapshot testing. Before discussing Button.test.js file we need to
know few methods of jest.

**`describe`** is a method provided by jest which creates a block that groups together several related tests in one
"test suite".

**`it`** is a method of jest to run individual test. This method is all we need in the test file. Instead of `it`
function we can use `test` method. The first argument of `it` method is the test name; the second argument is a function
that contains the expectations from the test. We can also send timeout as third parameter for specifying how long to
wait before aborting.

Inside this method we have used shallow rendering of enzyme. Shallow renders the current node and returns a shallow
wrapper around it. It only renders the component not it's children. So any change in that component does not affect the
test suite. Shallow method of enzyme returns a wrapper instance around the rendered output. Enzyme provides many methods
on this ShallowWapper which can help us to write our test file.

The **`expect`** function of jest is used every time we want to test a value. It always comes with a match function
which contains the expected value.

**_Button.test.js_**

```javascript
import React from 'react';
import Button from '../src/components/Button';

describe('Button Component Test', () = {
  it('Button component rendered correctly', () = {
    const rendered = shallow( Button / );
    expect(rendered).toMatchSnapshot();
  });

  it('All the css classes and html tags rendered correctly', () = {
    const rendered = shallow( Button / );
    expect(rendered.find('span').hasClass('input-group-btn')).toEqual(true);
    expect(rendered.find('input').length).toEqual(1);
  });
});
```

Above is the test file for Button component. It contains two test cases in describe block. In `it` methods we have
stored the shallow wrapper of Button component in a constant named as `rendered`. This constant has been passed as value
in expect method. The first test is to match the expected value with snapshot of that component. In the second test at
first the **`find`** method will find whether it has any span with class name `input-group-btn` or not. If it finds that
element it will return true and this test will pass. Also the Button component holds only one input value. Because of
that this test will be passed.

After writing this file open command prompt and run this test using **yarn test** command.

![Jest will create a snapshot](./media/image1.png "Jest snapshot")

Jest will create a snapshot file inside `snapshots` folder that looks like this:

```javascript
// Jest Snapshot v1, https://goo.gl/fbAQLP
exports[`Button Component Test Button component rendered correctly 1`] = `
<span className="input-group-btn">
  <input className="btn" name="btnG" type="button" value="Button " />
</span>
`;
```

When next time this test will run Jest will take a screenshot and compare it to the above snapshot file. The test will
fail if the two images do not match: either the change is unexpected, or the screenshot needs to be updated to the new
version of the UI component. If the designer wants to keep the change she/he needs to update the snapshot file. To
update snapshot, we need to run `yarn test –u`.

If we change the value of Button component from `Button` to `save` will get the following error:

![Jest error](./media/image2.png "Jest error")

In this way we can write snapshots for every react component.

Purpose of snapshot testing:

* Testing basic component rendering
* Testing props
* Testing events
* Testing event handler.

ShallowWrapper of enzyme provides API for setting props and state. It also provides **`find`** method to find a
selector. We can also test events using simulate function. Expect method of jest on the other hand provides many match
function which helps us to write rich test cases. In Software Center project for components like Keyword Suggest,
Results, Sorts, ResultsDownloadDetails etc. we have implemented shallow rendering.

## Redux Testing:

When we use Redux with React we have to test all Container Components, Reducers, and Action Creators which are nothing
but JavaScript functions.

### Testing Redux Container:

We can`t just render a redux container in shallow function for testing. It will through the following error and our test
will fail.

Suppose we have a Redux container named SuggestionList. This SuggestionList will display a list of suggestions which are
clickable. Following is the code for SuggestionList:

```javascript
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onClickSuggestion } from '../actions/autosuggest_actions';
import { updateQuery } from '../actions/search_actions';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

class SuggestionList extends Component {
  constructor(props) {
    super(props);
    this.state = { suggestionName: '' };
    this.renderList = this.renderList.bind(this);
    this.updateSuggestionName = this.updateSuggestionName.bind(this);
  }
  renderList() {
    const tname = this.props.params.tname;
    const query = this.props.params.query;
    const filter = this.props.params.filter;
    const sortby = this.props.params.sortby;
    const page = this.props.params.page;

    return this.props.suggestions.data.map((suggestion, index) => {
      return (
        <li key={index} ref={suggestion.name} onMouseOver={() => this.updateSuggestionName(suggestion.name)}>
          <Link
            to={{
              pathname: '/home/' + tname + '/' + query + '/' + filter + '/' + sortby + '/' + page
            }}
            onClick={() => this.props.dispatch(onClickSuggestion(''))}
          >
            {suggestion.name}
          </Link>
        </li>
      );
    });
  }

  updateSuggestionName(suggestionName) {
    this.setState({ suggestionName: suggestionName });
    this.props.dispatch(updateQuery(suggestionName));
  }

  render() {
    if (!this.props.suggestions.data.length) return null;
    return (
      <ul>
        {this.renderList()}
        <li onClick={() => this.props.dispatch(onClickSuggestion(this.state.suggestionName))}>close</li>
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    suggestions: state.autosuggest
  };
}

export default connect(mapStateToProps)(SuggestionList);
```

Now we will write the snapshot test file for the above component. If we only shallow render the Redux container, we will
get following error.

![Jest error](./media/image3.png "Jest error")

In this case we need a Redux Wrapper to provide Redux store. Enzyme's shallow render function takes context as a second
parameter where we can put a Redux store for our test.

```javascript
beforeEach = () => {
  const shallowWithStore = (component, store) => {
    const context = { store };
    return shallow(component, { context });
  };

  const testState = { autosuggest: { data: resultsData } };
  const store = createMockStore(testState);
  component = shallowWithStore(<ConnectedSuggestionList {...mockProps} />, store);
  wrapper = component.dive();
};
```

In the above example testState variable is fake state for store. Now we have mocked our Redux store by using
createMockStore(testState) from redux-test-util and sent it as store parameter for shallow with store.

```javascript
import React from 'react';
import { createMockStore } from 'redux-test-utils';
import ConnectedSuggestionList, { SuggestionList } from '../src/components/SuggestionList';

describe('SuggestionList component rendered', () => {
  let component;
  let wrapper;
  const resultsData = [{ name: 'frdm-k64f-agm01', type: 'suggest' }];
  const mockProps = {
    history: [],
    params: 'param'
  };
  beforeEach(() => {
    const shallowWithStore = (component, store) => {
      const context = {
        store
      };
      return shallow(component, { context });
    };
    const testState = {
      autosuggest: { data: resultsData }
    };
    const store = createMockStore(testState);
    component = shallowWithStore(<ConnectedSuggestionList {...mockProps} />, store);
    wrapper = component.dive();
  });
  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });
  it('child components render properly, renderList is working properly', () => {
    expect(wrapper.find('Link').length).toEqual(1);
  });
  it('updateSuggestionName Method is working correctly', () => {
    wrapper.instance().updateSuggestionName('New Suggestion');
    const suggestionName = wrapper.state().suggestionName;
    expect(suggestionName).toEqual('New Suggestion');
  });
});
```

## Testing Reducer:

A reducer should return the new state after applying the action to the previous state, and that's the behaviour tested
below. Also we need to check if the state is undefined or null it should return initial state. Below is a reducer for
SuggestionList Component. In SuggestionList

```javascript
import { SUGGESTION_CLICKED } from '../actions/autosuggest_action_types';

export default function(state = { data: [], selectedData: '', loading: true }, action = {}) {
  switch (action.type) {
    case SUGGESTION_CLICKED:
      return {
        data: action.suggetions,
        selectedData: action.suggestion
      };
    default:
      return state;
  }
}
```

In the above reducer function where `SUGGESTION_CLICKED` is an action which will be invoked if any suggestion got
clicked. Test file for the reducer:

```javascript
import autosuggest_reducer from '../src/reducers/autosuggest_reducer';
import * as types from '../src/actions/autosuggest_action_types';
const mockSuggestionData = [{ name: 'frdm-k64f-agm01', type: 'suggest' }];
describe('autosuggest reducer', () => {
  it('should return the initial state', () => {
    expect(autosuggest_reducer(undefined, {})).toEqual({
      data: [],
      selectedData: '',
      loading: true
    });
  });
  it('should handle SUGGESTION_CLICKED', () => {
    expect(
      autosuggest_reducer([], {
        type: types.SUGGESTION_CLICKED,
        suggetions: mockSuggestionData,
        suggestion: 'frdm-k64f-agm01'
      })
    ).toEqual({
      data: mockSuggestionData,
      selectedData: 'frdm-k64f-agm01'
    });
  });
});
```

## Testing Action Creators:

In Redux, action creators are functions which return plain objects. When testing action creators, we want to test
whether the correct action creator was called and also whether the right action was returned. Below is an example of
simple action creator

```javascript
export function onClickSuggestion(suggestion) {
  return {
    type: SUGGESTION_CLICKED,
    suggestion: suggestion,
    suggestions: []
  };
}
```

Test Class for the above method will be:

```javascript
import { onClickSuggestion } from '../src/actions/autosuggest_actions';
import { SUGGESTION_CLICKED } from '../src/actions/autosuggest_action_types';
describe('Action on click suggestion', () => {
  const expectedAction = {
    type: SUGGESTION_CLICKED,
    suggestion: 'str',
    suggetions: []
  };
  test("suggestion='str'", () => {
    expect(onClickSuggestion('str')).toEqual(expectedAction);
  });
});
```

### Async Functions

In React with Redux applications sometimes we need to write async functions for fetching the data, API calls. Following
is the action creator for SuggetionList component to fetch the suggestions.

```javascript
import axios from 'axios';
import {
  REQUEST_SUGGESTIONS,
  RECEIVE_SUGGESTIONS,
  SUGGESTION_SELECTED,
  SUGGESTION_CLICKED
} from './autosuggest_action_types';

console.log('ROOT_URL_SUGGEST', ROOT_URL_SUGGEST);

export function requestSuggestions(term) {
  return {
    type: REQUEST_SUGGESTIONS,
    loading: true
  };
}
export function receiveSuggestions(newSuggestions) {
  return {
    type: RECEIVE_SUGGESTIONS,
    suggestions: newSuggestions,
    loading: false
  };
}

export function getSuggestions(term) {
  const url = `${ROOT_URL_SUGGEST}&q=${term}`;
  return dispatch => {
    dispatch(requestSuggestions(term));
    return axios
      .get(url)
      .then(response => response.data.results)
      .then(results => dispatch(receiveSuggestions(results)));
  };
}
```

In the above example getSuggestions is the async method for getting suggestions value. Here when the method will be
called it will dispatch `REQUEST_SUGGESTIONS` action for loading. When results will be successfully fetched from API
call another action named `RECEIVE_SUGGETIONS` will be invoked which set the fetched suggestions value in state.

For async action creators using Redux Thunk or other middleware, it's best to completely mock the Redux store for tests.
You can apply the middleware to a mock store using redux-mock-store. You can also use fetch-mock to mock the HTTP
requests. Test file of this Action Creator will be:

```javascript
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { requestSuggestions, receiveSuggestions, getSuggestions } from '../src/actions/autosuggest_actions';
import { REQUEST_SUGGESTIONS, RECEIVE_SUGGESTIONS, SUGGESTION_CLICKED } from '../src/actions/autosuggest_action_types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  it(' getSuggestions for fetching suggestions', () => {
    const resultsData = [
      { name: 'frdm-k64f-agm01', type: 'suggest' },
      { name: 'frdm-k64f-agm04', type: 'suggest' },
      { name: 'frdm-k64f-agm02', type: 'suggest' }
    ];
    const expectedActions = [
      { type: REQUEST_SUGGESTIONS, loading: true },
      { type: RECEIVE_SUGGESTIONS, suggestions: resultsData, loading: false }
    ];
    const store = mockStore({ suggetions: [] });

    return store.dispatch(getSuggestions('frdm-k64f-agm0')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
```

In this way we can test each and every JavaScript function of our project and that will definitely result in better
quality code.

## References

* https://redux.js.org/docs/recipes/WritingTests.html
* https://www.toptal.com/react/tdd-react-unit-testing-enzyme-jest
* https://medium.com/wehkamp-techblog/unit-testing-your-react-application-with-jest-and-enzyme-81c5545cee45
