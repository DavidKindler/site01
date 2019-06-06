---
id: GeneralSPA
title: General SPA Information
---

## 1. React as Development Framework

> This chapter explains what libraries are being used in the deployment and why they were selected -which part of the
> block diagram handles- Show a graphic with the Architecture of the SPA.

### 1.1. Project Guidelines

> This will be a monorepository for React applications and components used by the CEDS team.

- We will be using [Lerna](https://lernajs.io/ 'Manage JS projects with multiple packages') to administer the
  monorepository
- We will be using [git](https://git-scm.com/) for version control
- We will use [Yarn](https://yarnpkg.com/en/ 'Yarn Package Manager') for package manager, instead of
  [npm](https://www.npmjs.com/)

#### Code Development

- You can use whatever editor you wish but we recommend an IDE that works well with javascript projects such [Microsoft
  Visual Studio Code]("https://code.visualstudio.com/), [Atom](https://atom.io/) or [Sublime
  Text](https://www.sublimetext.com/). Any of these editors will have plugins that help assist you with type checking,
  code enhancements and linting.
- We will use [ESLint](https://eslint.org/) for code style guidelines. We will implement ESLint in our build scripts. It
  is also recommended that you install an ESLint plugin in your IDE.
- We will use [Prettier](https://github.com/prettier/prettier) for code formatting and syntax checking. It is also
  recommended that you install Prettier in your IDE.

#### Static Type Checking

- We will use [Flow](https://flow.org/ 'Static type checker') as our default type checker for this project

#### Code Builds

- We will use [Webpack](https://webpack.js.org/guides/installation/) v3.8.# to bundle our packages and apps
- We will use [Babel](https://babeljs.io/) to transcompile our code into ES5 code, compatible with our browser standards
- We will use our existing branding stylesheets and component layouts as defined in our [branding
  website](https://branding-dev.nxp.com/).
- We can use UI components from [react-bootstrap](https://react-bootstrap.github.io/). Be careful to only include
  components as needed and not the whole library.

#### Package versioning

- We will use React version 16
- We will use react-router for Single Page Apps (SPA)
- We will use React-Redux for application state
- We will use axios for http requests
- For react middleware we will use redux-thunk and redux-saga

#### Unit testing

- For unit testing of components, containers, classes, functions - we will use [Jest](https://facebook.github.io/jest/)
  and [Enzyme](https://github.com/airbnb/enzyme)
- For redux async action creators and middleware we want to use a mock store like
  [redux-mock-store](https://github.com/arnaudbenard/redux-mock-store)

#### Git Branching

- We will be using the following git branching workflow

  ```
  master
  ├── UAT
  └── DEV
      └── app1
      └── app2
      └── app3
  ```

#### Developer Review Process

Checks before pushing to production:

- Check that all unit tests have passed
- Check for multiple API calls (minimize frequency of API calls)
- Check for browser compatibility, particularly IE11
- Check that analytic scripts are being called
- Check for issues with ad blocking plugins (e.g.. uBlock origin)
- Check for conflicts with other js code (header/footer, global-common)
- Check that all debugging code has been removed from production build
- Check that any passwords or authentication codes are not part of the code and not added to the git repo.
- Check for XSS vulnerability

> **For further details in each mentioned tool, take a look to the [README.md](./README.md) file.**

### 1.2. Graphic of the SPA Architecture

![Graphic of the SPA Architecture](./media/graphic_spa_architecture.png 'Graphic of the SPA Architecture')

Every SPA is divided in for 4 parts:

- Header: It’s the top portion of an SPA that contains a representative image, the name of the SPA and the objective of
  the SPA. It has a function to share to Facebook or by Email.

- LeftNav: It’s a navigation bar which provides different filters for example product categories, solution categories,
  services, countries, etc. to navigate into them and to obtain results depending on what you are looking for.

- Search Bar: It’s to allow users to enter a query to be submitted to a Search engine and giving you specific results.

- Home/Results: This area will be displaying important content when it’s not ready a query or should be showing the
  results of it.

### 1.3. React components, their life's cycle and Redux:

> _Concepts you need to know about components:_
>
> **Props**: To define components, add attributes called props. These attributes are available in our component as
> `this.props` and can be used in our render method to render dynamic data.
>
> **State**: It's set using the `setState` method. Calling `setState` triggers UI updates and is the bread and butter of
> React's interactivity. To set an initial state before any interaction occurs, use the `getInitialState` method.
>
> **Children**: `this.props.children` is used to display whatever is inside between the opening and closing tags when
> invoking a component.
>
> **Render**: When using the render method above, our first argument is the component we want to render, and the second
> is the DOM node it should mount to.
>
> **onClick/Handlers**: Handling events with React elements is very similar to handling events on DOM elements.
>
> **PureComponent**: It can replace a component that only has a render function. Instead of making a full-blown
> component just to render some content to the screen.

#### Components

According to the architecture of SPAs, LeftNav, Search Bar and Home/Results contain components (sections) with a
specific goal that makes easy to maintain for next updates where two of them are dynamics that means are connected to
the API so they are receiving data and are updating automatically (Thanks React!). Every SPA follows next structure of
files (JavaScript files):

- LeftNav
  - LeftNav.js
  - CategoryPanel.js
  - FilterPanel.js
  - ClearButton.js
  - SelectedFilterList.js
- Pagination
  - Pagination.js
  - Page.js
- Pages
  - SinglePage.js
  - HomePage.js
- Results
  - Results.js
  - ResultsItem.js
  - Image.js
- Search
  - index.js

Depending which SPA is will be structured in a different way. For example, Software Center has a complex data and it
needed more components to build the LeftNav or the Results.

##### LeftNav

The component `LeftNav` is the side navigation that helps to formulate the query. The objective is to control the data
of the filters and how to show correctly. It is divided into 2 sections:

- `CategoryPanel`: displays all categories of the filters coming from data.
- `FilterPanel`: displays the selected filters and keyword used for the query.

`FilterPanel` has two specific components inside that are `SelectedFilters` and `ClearButton`. `SelectedFilters` is in
charge to maintain updated which filters are selected or which keyword is used and to be ready when one of them is
clicked to delete and `ClearButton` is in charge to clean all that section.

##### Pagination

The component `Pagination` is in charge to manage and calculate how many pages need to show all results in blocks of 25
results.

##### Pages

The component `SinglePage` is in charge to display all structure of the SPA talking on UX starting with the LeftNav and
then the Search Bar and Home Page or Results page depending if a query is ready.

##### Results

The component `Results` is in charge to display correctly all results and to call pagination component when there are
more than 25. It has one specific component to show one by one in a specific structure and maybe it contains another
component to display an image if it is necessary.

##### Search

The component `Search` is in charge to display search bar and to handle and to be ready when it receives suggestion and
to display them.

#### Life Cycle

Understanding the component lifecycle will enable you to perform certain actions when a component is created or
destroyed. Furthermore, it gives you the opportunity to decide if a component should be updated in the first place and
to react to props or state changes accordingly.

Life Cycle of a component has phases that are: the initial creation phase, where the component is created, and state and
props changes triggered updates as well as the component unmounting phase.

Initialization

- Initial
- getInitialState
- componentWillMount
- render
- componentDidMount

The first two methods being called are `getDefaultProps` and `getInitialState`. Both methods are only called once when
initially rendering the component. Another two methods that only get called when initializing a component are
`componentWillMount` and `componentDidMount`.

`componentWillMount` is called before the render method is executed. The render method returns the needed component
markup, which can be a single child component or null or false (in case you don't want any rendering).

The `render` method returns the needed component markup, which can be a single child component or null or false (in case
you don't want any rendering).

As soon as the render method has been executed the `componentDidMount` function is called. The DOM can be accessed in
this method, enabling to define DOM manipulations or data fetching operations. Any DOM interactions should always happen
in this phase not inside the render method.

##### State changes

State changes will trigger a number of methods to hook into.

- Updating state
- shouldComponentUpdate: is always called before the render method and enables to define if a re-rendering is needed or
  can be skipped.
- componentWillUpdate: any state changes are not allowed as this method should be strictly used to prepare for an
  upcoming update not trigger an update itself.
- componentDidUpdate: this method can be used to perform after the data has been updated.

##### Props changes

Any changes on the props object will also trigger the lifecycle and is almost identical to the state change with one
additional method being called.

- Updating props
- componentWillRecieveProps: is only called when the props have changed and when this is not an initial rendering
- shouldComponentUpdate
- componentWillUpdate
- Render
- ComponentDidUpdate The rest of the lifecycle is identical to the state change triggered cycle.

##### Unmounting

- Unmounting
- componentWillUnmount: gets called before the component is removed and it can be beneficial when needing to perform
  cleanup operations

##### Applying to SPAs

The SinglePage, LeftNav, CategoryPanel and Search components require this ability because it is constantly receiving
updated data and these functions let know if it must update or not.

- SinglePage: uses componentDidMount to load the initial parameters before downloading the data and uses
  componentWillReceiveProps to check if it is already set up any filter more or to get back to initial parameters.

```javascript
  componentDidMount() {
    let { filter } = this.props.match.params;
    let filterObj;
    if (!filter) {
      filter = '{collection=partners&depth=1&start=0&max=25&fields=PageTitle&language=' + this.props.language + '}';
    }
    filterObj = this.props.getFilterObj(filter);
    this.props.updateParams({ filterObj });
    this.props.fetchResults(filter);
  }
  componentWillReceiveProps(nextProps) {
    let { filter } = nextProps.match.params;
    let filterObj;
    if (!filter) {
      filter = '{collection=partners&depth=1&start=0&max=25&fields=PageTitle&language=' + nextProps.language + '}';
    }
    filterObj = nextProps.getFilterObj(filter);
    nextProps.updateParams({ filterObj });
    nextProps.fetchResults(filter);
    this.page.scrollIntoView();
  }
```

- LeftNav: must be pending if one of the categories of filters changes and that is true, it reloads the full component.

```javascript
  componentDidMount() {
    this.props.sidenavLoaded();
  }
```

- CategoryPanel: must be pending if a user clicks on "more filters" and that is true, it’s going to show more filters
  because they're limited to show only 10 filters by category.

```javascript
  componentDidMount() {
    if (this.props.filter.children.length <= this.props.showMax) {
      this.setState({
        ...this.state,
        moreLessOption: false
      });
    } else {
      this.setState({
        showMax: this.props.showMax,
        moreLessOption: true
      });
    }
  }
```

- Search: uses componentWillUpdate to catch updated parameters and send to a specific method for Analytics that will be
  explained later.

```javascript
  componentWillUpdate(nextProps) {
    if (this.props.track.tAction == 'search-executed' && typeof nextProps.track.tAction != 'undefined' && !nextProps.loading) {
      ...
    }
    if (this.props.track.tAction == 'filter-click' && typeof nextProps.track.tAction != 'undefined' && !nextProps.loading) {
      ...
    }
    if (this.props.track.tAction == 'home-click' && typeof nextProps.track.tAction != 'undefined' && !nextProps.loading) {
      ...
    }
    if (this.props.track.tAction == 'remove-filter' && typeof nextProps.track.tAction != 'undefined' && !nextProps.loading) {
      ...
    }
  }
```

#### Redux

Redux can be described in three fundamental principles:

##### Single source of truth

The state of your whole application is stored in an object tree within a single store. This makes it easy to create
universal apps, as the state from your server can be serialized and hydrated into the client with no extra coding
effort. A single state tree also makes it easier to debug or inspect an application; it also enables you to persist your
app's state in development, for a faster development cycle.

##### State is read-only

The only way to change the state is to emit an action, an object describing what happened. All changes are centralized
and happen one by one in a strict order, there are no subtle race conditions to watch out for. As actions are just plain
objects, they can be logged, serialized, stored, and later replayed for debugging or testing purposes.

##### Changes are made with pure functions

To specify how the state tree is transformed by actions, you write pure reducers. Reducers are just pure functions that
take the previous state and an action, and return the next state. Remember to return new state objects, instead of
mutating the previous state.

##### Applying to SPAs

Store called Provider involve completely all SPA to let access to data wherever which component requires. This is the
structure of files and its principal goal where is easy to manage your store and each one has one action and one reducer
as mentioned before:

- _actionTypes_: files where are declared all actionTypes that are related to the reducers.

```javascript
export const SET_LANGUAGE = 'SET_LANGUAGE';
export const LOAD_LANDING = 'LOAD_LANDING';
export const CLOSE_SIDENAV = 'CLOSE_SIDENAV';
export const OPEN_SIDENAV = 'OPEN_SIDENAV';
export const GET_LABELS = 'GET_LABELS';
export const LOAD_SIDENAV = 'LOAD_SIDENAV';
export const SIDENAV_LOADED = 'SIDENAV_LOADED';
export const SCREEN_RESIZE = 'SCREEN_RESIZE';
export const LOADING_RESULTS = 'LOADING_RESULTS';
export const RECEIVE_ERROR = 'RECEIVE_ERROR';
export const RECEIVE_RESULTS = 'RECEIVE_RESULTS';
export const UPDATE_PARAMS = 'UPDATE_PARAMS';
export const ADD_FILTER = 'ADD_FILTER';
export const CLEAR_FILTER = 'CLEAR_FILTER';
export const CLEAR_ALL_FILTERS = 'CLEAR_ALL_FILTERS';
export const REQUEST_SUGGESTION = 'REQUEST_SUGGESTION';
export const RECEIVE_SUGGESTIONS = 'RECEIVE_SUGGESTIONS';
export const SUGGESTION_ERROR = 'SUGGESTION_ERROR';
export const CLOSE_SUGGESTION = 'CLOSE_SUGGESTION';
export const UPDATE_SUGGESTION = 'UPDATE_SUGGESTION';
export const CLEANALL_SUGGESTION = 'CLEANALL_SUGGESTION';
export const TRACK_FETCH = 'TRACK_FETCH';
export const SEARCH_ENGINE =
  location.href.indexOf('searchengine=solr') != -1
    ? '&searchengine=solr&qf=code_all^40.0 code^40.0 name_s^40.0 search_summary^10.0 text_wdl^0.1 prodtypecategory_ms^0.1}'
    : '}'; //SOLR TESTING
```

- _index_: files where are declared all actions what will set up the actionType and the data to update (action) and all
  dispatchers what will set up the structure of the store (reducer).

```javascript
const rootReducer = combineReducers({
  labels: labelsReducer,
  sidenav: sidenavReducer,
  screen: screenReducer,
  results: resultsReducer,
  suggestionList: suggestionsReducer,
  landing: landingReducer // make sure this stays last.  Easier to see all states in redux tool
});
```

- _Label_: files where set up the language (English – en or Chinese – cn)

```javascript
const intialResults = {
  language: 'en',
  label: {}
};

const labelsReducer = (state = intialResults, action) => {
  switch (action.type) {
    case actionTypes.SET_LANGUAGE:
      // sessionStorage.setItem('language', action.language);
      return {
        ...state,
        language: action.language
      };
    case actionTypes.GET_LABELS:
      // sessionStorage.setItem('labels', JSON.stringify(action.labels));
      return {
        ...state,
        label: action.labels
      };
    default:
      return {
        ...state
      };
  }
};
```

- _Landing_: a file where downloads the content to show in the landing page coming from TeamSite/ an HTML file.

```javascript
const webpubHTML = window.document.getElementById('landing-data').innerHTML;
const node = window.document.getElementById('landing-data');
node.parentNode.removeChild(node);

const LANDING = webpubHTML;

const landingReducer = (state = LANDING, action) => {
  switch (action.type) {
    case actionTypes.LOAD_LANDING:
      return action.landing;
    default:
      return state;
  }
};
export default landingReducer;
```

- _Results_: files where load the data coming from API.

```javascript
const intialResults = {
  filterObj: {},
  leftNav: {
    typeHirarchy: [],
    deviceTax: [],
    Vendor: [],
    country: [],
    OperatingSystems: [],
    selected: []
  },
  loading: 'true',
  data: {},
  selectedFilters: [],
  track: {}
};

const clearFilter = (state, action) => {
  let newSelected = state.leftNav.selected.filter(e => e.filterType != action.payload);
  return { ...state, leftNav: { ...state.leftNav, ...{ selected: newSelected } } };
};

const resultsReducer = (state = intialResults, action) => {
  let leftNav;
  switch (action.type) {
    case actionTypes.LOADING_RESULTS:
      return { ...state, loading: action.payload };
    case actionTypes.TRACK_FETCH:
      return { ...state, track: action.payload };
    case actionTypes.RECEIVE_RESULTS:
      if (action.payload.filters.length) {
        leftNav = processLeftNav(action.payload, state.filterObj.query);
        if (state.filterObj.keyword) {
          leftNav.selected.unshift({
            filterType: 'keyword',
            attr: { name: state.filterObj.keyword.replace(/amp;/g, '&') }
          });
        }
        return { ...state, data: action.payload, leftNav };
      }
      //leftNav = intialResults.leftNav;
      leftNav = state.leftNav;
      leftNav.selected = state.leftNav.selected.filter(e => e.filterType != 'keyword');
      if (state.filterObj.keyword) {
        leftNav.selected.unshift({
          filterType: 'keyword',
          attr: { name: state.filterObj.keyword.replace(/amp;/g, '&') }
        });
      }
      return { ...state, data: action.payload, leftNav };
    case actionTypes.RECEIVE_ERROR:
      return { ...state, error: action.payload };
    case actionTypes.UPDATE_PARAMS:
      return { ...state, filterObj: action.payload.filterObj };
    case actionTypes.CLEAR_FILTER:
      // let newSelected = state.leftNav.selected.filter(e => e.filterType != action.payload);
      // return { ...state, leftNav: { ...state.leftNav, ...{ selected: newSelected } } };
      return clearFilter(state, action);
    default:
      return state;
  }
};
```

- _Screen_: files where set up the size of the display.

```javascript
const initialState = {
  screenWidth: typeof window === 'object' ? window.innerWidth : null
};

const screenReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SCREEN_RESIZE:
      return {
        ...state,
        screenWidth: action.screenWidth
      };
  }
  return state;
};

export default screenReducer;
```

- _Sidenav_: files where manage if it is loading the LeftNav.

```javascript
const initialState = {
  loading: true,
  open: false
};

const sidenavReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CLOSE_SIDENAV:
      return {
        ...state,
        open: false
      };
    case actionTypes.OPEN_SIDENAV:
      return {
        ...state,
        open: true
      };
    case actionTypes.LOAD_SIDENAV:
      return {
        ...state,
        loading: true
      };
    case actionTypes.SIDENAV_LOADED:
      return {
        ...state,
        loading: false
      };

    default:
      return state;
  }
};
```

- _Suggestion_: files where load the suggestion after typing a keyword on the Search bar.

```javascript
    const intialResults = {
      selectedSuggestion: "",
      suggestions: [],
      isClosed: false
    };

    const suggestionsReducer = (state = intialResults, action) => {
      switch (action.type) {
        case actionTypes.CLOSE_SUGGESTION:
          return { ...state, suggestions: action.payload, isClosed: true };
        case actionTypes.UPDATE_SUGGESTION:
          return { ...state, selectedSuggestion: action.payload };
        case actionTypes.CLEANALL_SUGGESTION:
          return { ...state, selectedSuggestion: "", suggestions: [] };
        case actionTypes.REQUEST_SUGGESTION:
          return { ...state, isClosed: false };
        case actionTypes.RECEIVE_SUGGESTIONS:
          if (!state.isClosed) return { ...state, suggestions: action.payload };
          else return { ...state };
        case actionTypes.SUGGESTION_ERROR:
          return { ...state, error: action.payload };
        default:
          return state;
      }
```

#### Router

React Router is a package that allows you to configure routes that show only the components you specify on the page
depending on the route. React Router includes several components but the three common are `<BrowserRouter>`, `<Route>`,
and `<Link>`. The first one, `<BrowserRouter>`, is usually given an alias of 'Router' and this is the parent component
that is used to store all of your <Route> components. The <Route> components are what tell your app which other
components to display based on the route. And <Link> components are how you create links to those different routes.
Route Its most basic responsibility is to render some UI when a location matches the route’s path and will be passed the
three route props:

- match
- location
- history

##### match

A match object contains information about how a <Route path> matched the URL. match objects contain the following
properties:

- params - (object) Key/value pairs parsed from the URL corresponding to the dynamic segments of the path
- isExact - (boolean) true if the entire URL was matched (no trailing characters)
- path - (string) The path pattern used to match. Useful for building nested `<Route>`
- url - (string) The matched portion of the URL. Useful for building nested `<Link>`

##### location

Locations represent where the app is now, where you want it to go, or even where it was. A location object is never
mutated so you can use it in the lifecycle hooks to determine when navigation happens, this is useful for data fetching
and animation.

##### history

The history object is mutable. Therefore it is recommended to access the location from the render props of `<Route>`,
not from history.location. This ensures your assumptions about React are correct in lifecycle hooks.

##### Applying to SPAs

SPAs have two different Route components to manage the interaction when it has or not filters using the “path” property:

- `/` when the URL doesn’t have filters
- `/:filter` when the URL has filters

```javascript
const PropsRoute = ({ component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={routeProps => {
        return renderMergedProps(component, routeProps, rest);
      }}
    />
  );
};

<Router>
  <ScrollToTop>
    <PropsRoute
      exact
      path="/"
      component={SinglePage}
      fetchResults={props.fetchResults}
      updateParams={props.updateParams}
      getFilterObj={props.getFilterObj}
      language={props.language}
    />
    <PropsRoute
      exact
      path="/:filter"
      component={SinglePage}
      fetchResults={props.fetchResults}
      updateParams={props.updateParams}
      getFilterObj={props.getFilterObj}
      language={props.language}
    />
  </ScrollToTop>
</Router>;
```

It also has the property 'exact' to verify having a correct path, the property 'component' to identify which component
must render and other properties sending data through the SPA (results, parameters and language).

> connect, provider, store, data flow with dispatches, Route: Provider, URL (Alex)

### 1.4. Resources to lear more

There are plenty kind of resources to keep learning about all listed technologies, the team recomends first to take a
look at [this curated list](https://github.com/DavidKindler/react-redux-links) and then study what needed.

## 2. Search API

> Explains how we're using the API calls and links to the [official
> Doc](https://nxp1.sharepoint.com/:w:/r/sites/ITDigitalSolutions/search/_layouts/15/Doc.aspx?sourcedoc=%7B728b6bf6-d029-4e38-bd41-3d486e027abc%7D&action=edit).

![Results Items Page (OT)](./media/fig2-a.png)

The Search API provides an interface to the Search Engine used on our website. Applications can use the parameters
supported by the Search API to fetch and filter results.

#### Parameter's table:

![Results Items Page (OT)](./media/fig2-b.png)

#### URL Structure:

- Get Count: http://uat.freescale.com/webapp-rest/api/search/getAsset/resultCount/{keyword=kinetis}

  > This URL will return the count of the number of the results returned from the Search API.

- Get Filters: http://uat.freescale.com/webapp-rest/api/search/getAsset/filters/{keyword=kinetis}

  > This URL will return only the filter section from the Search API.

- Get Results: http://uat.freescale.com/webapp-rest/api/search/getAsset/results/{keyword=kinetis}

  > This URL will return only the result section from the Search API.

- Get All Results (Filters + Results):
  http://uat.freescale.com/webapp-rest/api/search/getAsset/allResults/{keyword=kinetis}

  > This URL will return results and filter data from the Search API.

- Get Suggestions for a keyword:
  http://uat.freescale.com/webapp-rest/api/search/getAsset/suggestions/{keyword=greenhill}
  > This URL will return suggestions for a keyword.

#### Query URL example:

Filtering results by querying against several meta data ( **::** used for _AND operation_)
http://uat.freescale.com/webapp-rest/api/search/getAsset/results/{keyword=kinetis&query=Keywords>>microcontroller::code>>AN4407}

> **To know more details and examples about the Search API go to the [official
> Doc](https://nxp1.sharepoint.com/:w:/r/sites/ITDigitalSolutions/search/_layouts/15/Doc.aspx?sourcedoc=%7B728b6bf6-d029-4e38-bd41-3d486e027abc%7D&action=edit)**

## 3. SPA's main components

> This Chapter shows the architecture in Components of the SPA and explains the purpuse of each one, doing emphasis in
> the shared components and how they are used.

Every SPA starts `./src/index.js` loading the store of the data `<Provider store={store}>` that provides across the
application and the main component `<App />` that is in charge to get up all components.

```javascript
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('partner-directory-app')
);
```

`partner-directory-app` is the principal div where is going to display the structure of the SPA. For good practices, the
name of the main div tag is the name of the project with the termination `-app`.

The component `<App>` that is located in `./src/components/App.js` and is in charge with `<Route>` to display
`<SinglePage>`.

### 3.1. Pages

The component `<SinglePage>` is located in `./src/components/Pages/SinglePage.js` and is in charge the general logic and
the structure of the SPA.

```javascript
<Aux>
  <div className="app-row" ref={div => (this.page = div)}>
    <div className="app-column-left" id="nav_container_column">
      <LeftNav history={history} match={match} />
    </div>
    <div className="app-column-right">
      <div className="filter-search cool-grey-xxxlight band">
        <Search history={history} />
      </div>
      {!this.props.match.params.filter ? <HomePage /> : <Results history={history} />}
    </div>
  </div>
</Aux>
```

`app-column-left` contains the left navigator `<LefNav>` with two attributes, history where it has the register of where
it is now and where it was, and match is where has the register of comparing the URL and `<Route>`. And the other side
has a Search bar and a logic where is evaluating it has to show `<HomePage>` and `<Results>` with one attribute,
history.

`this.props.match.params.filter` is only a if statement. If it is true, it will be displaying `<Results>` and it is
false, it will be displaying `<HomePage>`.

After mounting `<SinglePage>`, `componentDidMount` method starts setting the initial parameters to download the data
depending which SPA is.
| SPA                     | Collection    | Query                                                       | Comments                                                  |
| ----------------------- | ------------- | ----------------------------------------------------------- | --------------------------------------------------------- |
| Partner Directory       | partners      |                                                             |                                                           |
| Engineering Consultants | partners      | Vendor: `Approved Engineering Consultants`                  | Filtering only Approved Engineering Consultants by Vendor |
| Reference Designs       | softwaretools | type: `Reference Design`                                    | Filtering only Reference Design by type                   |
| Training                | trainings     | training_date: `${new Date().toISOString().slice(0,10)}..*` | training_date is showing dates after the current day      |
| Hardware Dev. Tools     | softwaretools | typeTax: `t633::archived>>0`<br>Sub_Asset_Type: `TSP`       | typeTax avoid archived results and is showing only TSP    |

The component `<HomePage>` that is located in `./src/Pages/HomePage.js` and is in charge to load the landing page.

```javascript
<Aux>
  <div className="button-container">
    <a className="filter-toggle" id="js-filter-toggle" onClick={this.mobileFilter}>
      {filters_label}
    </a>
  </div>
  <div id="landing-page">{landingPage}</div>
</Aux>
```

`filters_label` contains the label of the word "Filters" in English or Chinese depending the language is set up and it
only appears mobile version. Its function is to show the filters.

`landingPage` contains all HTML content that was hiding on a specific div called `landing-data` from TeamSite or
`./index.html` on Dev environment.

### 3.2. Results

This component shows up when at least one filter from the LeftNav is selected or a Keyword has been entered. Its purpuse
is to list any `resultsItem` related to the query built with the current selected parameters.

The following image shows the most complex case of this Results Page component:

![Results Items Page (OT)](./media/fig3-2-a.png)

It shows the type of results with the respective (items) count aside. Then it follows a list of those items ordered from
the API or in some SPA they could be ordered by Popularity/Relevance:

![Results Items Page (SWC)](./media/fig3-2-aa.png)

And in case there are no results for a combination of filter and/or keyword a "Zero results message is displayed:

![Zero results message](./media/fig3-2-aaa.png)

The purpose of this component is containing Results Item components and the Pagination Component. Here is the core code
of it:

```javascript
// Results/index.js
(...)
<div className="retrieved-results-header">
  <p className="retrieved-results-label">
    <span className="count">({totalcount ? totalcount : '0'})</span>
    <span> {totalcount ? _resultsText : _noResultsText + keyword} </span>
  </p>
</div>
{!totalcount && (
  <Aux>
    <p>{suggestions_label}</p>
    <p>
      {rephrasing_label}
      <br />
      {generalWords_label}
    </p>
  </Aux>
)}
<div className="media-flex retrieved-results-items partner-directory-items">
  <ul className="media-flex-list has-borders">
    {this.props.data &&
      this.props.data.results &&
        this.props.data.results.map((result, index) => (
          <ResultsItem
            key={index}
            index={index}
            result={result}
            ecosystem_member_tier={ecosystem_member_tier}
            countries_label={countries_label}
          />
          ))}
  </ul>
  <nav className="text-center visible-xs" aria-label="Page navigation">
    <Pagination
      totalItemsCount={totalcount}
      activePage={+this.props.filterObj.start / this.props.filterObj.max + 1}
      pageRangeDisplayed={3}
      onChange={this.onChange}
      itemsCountPerPage={this.props.filterObj.max}
      prevPageText={previous}
      nextPageText={next}
    />
  </nav>
(...)
```

Results item are being retrieved from the API field `results` and it depends on the SPA where the Array (of Results) is
located below this field. Here is a capture of the state (EC project):

![Zero results message](./media/fig3-2-aaaa.png)

That array is displayed by the known array method `Array.map` which works as a cycle that performs a (arrow) function
per item in the array. In the code this line may be observed: `this.props.data.results.map((result, index)=>(` after
some previous (API) validation.

Talking about Results Items, there could be plenty changes among SPAs:

![Results Item (PD)](./media/fig3-2-b.png) ![Results Item (RD)](./media/fig3-2-c.png)
![Results Item (SWC)](./media/fig3-2-d.png)

Each type of layout -that answers diferent needs- is tried to be _described_ in a **transparent** way by the React
Component Code, with the intention to be read and well reused, here is a couple (core fragments) of them to see the
contrast:

```javascript
//In-Person Training Results Item
<Element
  index={index}
  key={index}
  data={item}
  month={agenda(item.training_display_date, 'month')}
  day={agenda(item.training_display_date, 'day')}
  header={item.PageTitle}
  link={item.url_s}
  event={item.source_event}
  city={item.city}
  country={item.country}
  time={agenda(item.training_date, 'time')}
  type={item.Training_Sub_Type}
  provider={ifNXP(item.Vendor)}
  text={limitText(item.search_summary)}
/>

//Partner Directory Results Item Call
<ResultsItem
  key={index}
  index={index}
  result={result}
  ecosystem_member_tier={ecosystem_member_tier}
  countries_label={countries_label}
/>
```

Taking a look deeper, this is one of the implementation of a Results Item Component's code:

```javascript
// ResultsItem.js (Partner Directory)

const ResultsItem = props => {
  let thumbnailurl = props.result.metaData.thumbnailurl
    ? THUMBNAIL_URL + props.result.metaData.thumbnailurl
    : THUMBNAIL_URL;
  const search_summary = props.result.metaData.search_summary;
  const countries = props.result.metaData.coutriesserveds;

  return (
    <li className="media-flex-item">
      <Image
        index={props.index}
        src={props.result.url}
        source={thumbnailurl}
        altText={props.result.metaData.PageTitle}
      />
      <div className="media-flex-body">
        <h3 className="media-flex-heading">
          <a onClick={e => handleClick(e, props.result.url)} href={props.result.url}>
            {' '}
            {props.result.metaData.PageTitle}{' '}
          </a>
        </h3>
        <div className="media-flex-text">
          <p dangerouslySetInnerHTML={renderHTML(limitText(search_summary, 300))} />
        </div>
        <ul className="metadata partner-meta-list list-unstyled">
          <li>
            <strong> {props.ecosystem_member_tier}: </strong> {props.result.metaData.Vendor}
          </li>
          <li>
            <strong> {props.countries_label}: </strong> {limitText(countries, 300)}
          </li>
        </ul>
      </div>
    </li>
  );
};
```

Partner Directory Results Item: ![Results Item (PD)](./media/fig3-2-b.png)

### 3.3. LeftNav

The Left Navigation data is essentially pulled from filters key of the API data. Depending on the categories that need
to be displayed for that application, the data in the filters key is divided into different categories and stored in the
redux store. This is implemented in the function processLeftNav of `src/store/reducers/results.js` file. Below is the
code sample:

```javascript
const processLeftNav = (payload, query) => {
  let selected = [];
  let qry = query;

  // filters needed for that pallication
  let typeHirarchyFilter = payload.filters.filter(e => e.name == 'typeHirarchy')[0];
  let deviceTaxFilter = payload.filters.filter(e => e.name == 'deviceTax')[0];
  let countryFilter = payload.filters.filter(e => e.name == 'country')[0];
  let VendorFilter = payload.filters.filter(e => e.name == 'Vendor')[0];
  let OperatingSystemsFilter = payload.filters.filter(e => e.name == 'OperatingSystems')[0];

  let typeHirarchy = { children: [] };
  if (qry && qry.typeHirarchy && typeHirarchyFilter) {
    typeHirarchy = processFilter(qry.typeHirarchy, typeHirarchyFilter.children);
  } else if (typeHirarchyFilter) {
    typeHirarchy = { children: typeHirarchyFilter.children };
  }

  let deviceTax = { children: [] };
  if (qry && qry.deviceTax && deviceTaxFilter) {
    deviceTax = processFilter(qry.deviceTax, deviceTaxFilter.children);
  } else if (deviceTaxFilter) {
    deviceTax = { children: deviceTaxFilter.children };
  }
  deviceTax = reorderProducts(deviceTax);

  let country = { children: [] };
  if (qry && qry.country && countryFilter) {
    country = { selected: countryFilter.children.filter(e => e.attr.link == qry.country)[0], children: [] };
  } else if (countryFilter) {
    country = { children: countryFilter.children };
  }

  let Vendor = { children: [] };
  if (qry && qry.Vendor && VendorFilter) {
    Vendor = { selected: VendorFilter.children.filter(e => e.attr.link == qry.Vendor)[0], children: [] };
  } else if (VendorFilter) {
    Vendor = { children: VendorFilter.children };
  }

  let OperatingSystems = { children: [] };
  if (qry && qry.OperatingSystems && OperatingSystemsFilter) {
    OperatingSystems = {
      selected: OperatingSystemsFilter.children.filter(e => e.attr.link == qry.OperatingSystems)[0],
      children: []
    };
  } else if (OperatingSystemsFilter) {
    OperatingSystems = { children: OperatingSystemsFilter.children };
  }

  if (typeHirarchy.selected) {
    selected.push({ ...typeHirarchy.selected, ...{ filterType: 'typeHirarchy' } });
  }
  if (deviceTax.selected) {
    selected.push({ ...deviceTax.selected, ...{ filterType: 'deviceTax' } });
  }
  if (country.selected) {
    selected.push({ ...country.selected, ...{ filterType: 'country' } });
  }
  if (Vendor.selected) {
    selected.push({ ...Vendor.selected, ...{ filterType: 'Vendor' } });
  }
  if (OperatingSystems.selected) {
    selected.push({ ...OperatingSystems.selected, ...{ filterType: 'OperatingSystems' } });
  }

  // returns a javascript object with data divided for each filter
  return {
    typeHirarchy,
    deviceTax,
    country,
    Vendor,
    OperatingSystems,
    selected
  };
};
```

The left navigation is constructed by LeftNav Component. In the Left Nav component, Category Panel component is reused
for each filter. A code snippet from `src/components/LeftNav.js`

```javascript
<Aux>
  <div className={'filter-nav-inner'}>
    <CategoryPanel
      {...this.props}
      param="typeHirarchy"
      filter={leftNavFilters.typeHirarchy}
      header={getLabel('Services')}
      headerEn={'Services'}
    />
    <CategoryPanel
      {...this.props}
      param="deviceTax"
      filter={leftNavFilters.deviceTax}
      header={getLabel('Product Categories')}
      headerEn={'Product Categories'}
    />
    <CategoryPanel
      {...this.props}
      param="country"
      filter={reorderCountries(leftNavFilters.country)}
      header={getLabel('Countries')}
      headerEn={'Countries'}
    />
    <CategoryPanel
      {...this.props}
      param="Vendor"
      filter={leftNavFilters.Vendor}
      header={getLabel('Partner Tiers')}
      headerEn={'Partner Tiers'}
    />
    <CategoryPanel
      {...this.props}
      param="OperatingSystems"
      filter={leftNavFilters.OperatingSystems}
      header={getLabel('Operating Systems')}
      headerEn={'Operating Systems'}
    />
  </div>
</Aux>
```

Clicking on a filter in the left Navigation calls the changeURL function with link value for that filter. The
corresponding code snippet from `src/components/LeftNav/CategoryPanel.js`

```javascript
const addNewFilter = (newLink, name) => {
  return () => {
    let trackAction = { tAction: 'filter-click', tHeader: headerEn, tName: name };
    this.props.trackFetch(trackAction);
    changeURL(history, actionTypes.ADD_FILTER, filterObj, param, newLink);
  };
};
```

The `changeURL` function changes the URL to an appropriate value. The URL change triggers the API call and updates to
the stores and rerendering of the components with the updated data.

The Left Nav also has Filter Panel component. The FilterPanel component displays all the filters selected and it also
manages clearing of the filters individully as well as in a single click. The FilterPanel component uses results ->
leftNav -> selected from the redux store

The FilterPanel component has ClearButton component and selectedFilterList component. Clicking on the clear button
triggers changeURL function which resets the URL to homepage.

Clicking on 'X' or individual filter in the FilterPanel causes that filter to be cleared. The following method in the
SelectedFilterList component is called which in turn calls the changeURL function with link value of the filter to be
cleared.

```javascript
let doClearFilter = (filterType, name) => {
  return () => {
    let trackAction = { tAction: 'remove-filter', tHeader: filterType, tName: name };
    props.trackFetch(trackAction);

    clearFilter(filterType);
    if (filterType == 'keyword') {
      props.cleanAllSuggestion();
    }
    changeURL(history, 'CLEAR_FILTER', filterObj, filterType);
  };
};
```

### 3.4. Search

This React component is able to provide an input box with suggestions based on the entered value. User needs to enter a
value in the input box. Based on that value a list of suggestions will be provided to the user and user can choose any
suggestion from that, accordingly the results will be modified. It provides a search button for custom search too. User
can select any suggestion using Tab button and also there is one close button to close the suggestions list panel.

We have used a reusable auto suggestion component for keyword search. Following are the implementation steps for Keyword
Search component

- Download AutoSuggestion component from Nexus Private Repository `yarn add qc-autosuggestion`

- Import Autosuggestion component in Search Component

```javascript
import AutoSuggestion from 'qc-autosuggestion';
```

- Use AutoSuggestion in Search Component as React Component-

```javascript
  <AutoSuggestion {…props}/>
```

Below we have discussed the props of AutoSuggestion Component

- From `onInputChange` method of Search component a call has been sent to Redux store which will modify ‘suggestions’
  state of the store.

- After that new modified suggestions will appear in suggestion list and user can select a suggestion from it.

- `onFunctionKey` is method which can be used for any keyboard functions. In the current SPAs it is working for Enter
  functionality. On enter key click it will fetch relevant results for that particular page.

- `searchButtonClicked` is method which is getting called on search button click. It helps to modify the store state
  according to the searched value

- `closeSuggestion` is a store method to close the suggestion box.

  There are few more props for labels in Autosuggestion. For more details please refer to the qc-autosuggestion
  component's [README.md](./packages/qc-autosuggestion-new/README.md) file.

### 3.5. Shared components

> This document assumes you are using Lerna 2.7.1 and that your lerna.json file looks like this:
>
> ```json
> {
>   "lerna": "2.7.1",
>   "packages": ["packages/*"],
>   "version": "independent",
>   "private": true
> }
> ```

#### Setup

1. Setup a new package folder.

Setup a new folder under `.\packages` to hold your shareable component code.

2. Setup a basic `package.json` file

The devDependencies object can come from root package.json. The main and module subdirectories are changed so we don’t
have babel transpile all code in the SPA package folders.

```json
{
"name": "@qc/shared-component.v1.0.0",
"version": "1.0.0",
"main": "build/index.js",
"module": "lib/index.js",
"license": "MIT",
"scripts": {
  "build-shared": "babel ./lib --out-dir ./build --ignore spec.js,story.js,test.js"
  }
```

3. Setup your .babelrc file

```json
{
  "plugins": ["syntax-dynamic-import", "transform-runtime"],
  "presets": ["env", "react", "flow"],
  "env": {
    "test": {
      "presets": ["env", "react"],
      "plugins": ["syntax-dynamic-import", "transform-runtime", "transform-class-properties"]
    }
  }
}
```

4. Bootstrap your packages

Run yarn bootrap from root directory. This can take a while.

5. Setup lib folder

Create a lib folder and put all your code here.

6. Build your code

`yarn build-shared` to transpile your code and put into the `build` folder. Make sure to add your test files and that
your tests are run successfully.

#### Adding components to the library

- To add to one package you can type:

`yarn lerna add @qc/shared-component.v1.0.0 --scope=package-that-will-use-it`

- To add to all packages you can type:

`yarn lerna add @qc/shared-component.v1.0.0`

- The new shared component will be in the package.json file and a symlink will be created to the build code.

- You can now import the component as if it was a remote package.

For example: `ìmport 'MySharedComponent' from '@qc/shared-component.v1.0.0'`

#### Shared components in current use:

> By own stablished standard each folder/component has a simple README file with its details, click in the name to view
> it):

- [qc-autosuggestion-new](./packages/qc-autosuggestion-new/README.md): This component is able to provide a input box
  with suggestion base on the entered value.
- [qc-backdrop](./packages/qc-backdrop/README.md): Greys out background of whole page.
- [qc-collapse](./packages/qc-collapse/README.md): It provides a collapsable panel.
- [qc-max-zindex](./packages/qc-max-zindex/README.md): Function to get the max z-index of DOM body.
- [qc-modal](./packages/qc-modal/README.md): Greys out background of page and displays a simple modal.
- [qc-pagination](./packages/qc-pagination/README.md): Displays a pagination clickable bar at the bottom.
- [qc-reactaux](./packages/qc-reactaux/README.md): It returns the props children (when you need one root element).
- [qc-spinner-new](./packages/qc-spinner-new/README.md): It displays a styled spinner (For loading scenarios).
- [qc-with-error-handler](./packages/qc-with-error-handler/README.md): Higher order component (HOC) to show network
  messages for components using axios.

### 3.6. Utilities

This section describes the content inside the _Utilities_ folder in the following list:

- changeURL: Executes the proper function calls to change the URL according to the user's actions.
- filter: Contains the needed operations to perform changes in the SPA depending on the filtering activity.
- getLabel: Delivers a required label, retrieved from the state.
- isEqual: Compares two objects and returns boolean.
- limitText: Limits a string up to 300 characters and adds '...' at the end.
- renderHTML: Returns html in a javasrcipt object which is used by dangerouslySetInnerHTML
- reorderCountries: Reordering functions for countries (alphabetically, mantaining USA as first) and products according
  a parametric value.
- returnLang: Identifies if the chinese site was selected otherwise it must be the english one.

### 3.7. Labels

> Labels requiring translation use a global json file that is updated in the MAT tool.

To use this global labels data we add the json data to our redux store when the app is initialized. A utility function
`getLabel` is imported to any component that has a label that needs translation. We call the function with the string to
be translated and it will return the label based on the current language setting. If a translation is not found it will
return the string passed in.

### 3.8. Dev Environment Setup

- Install NodeJS [https://nodejs.org/en/] Choose the LTS version
- Node comes with a package manager that runs on the command line - npm. Or you can use Yarn (recommended)
  [https://yarnpkg.com/en/docs/install]
- Install Git for Windows [https://git-scm.com/download/win]
- Get an visual editor. We recommend (Visual Studio Code) [https://code.visualstudio.com/download] /projects/EBIZ
- Clone the qc-react git repo [https://bitbucket.sw.nxp.com/projects/EBIZ/repos/qc-react/browse]
- Switch to the `dev` branch
- Run `npm install` to install all package dependencies. If you are using Yarn use `yarn install`.
- Bootstrap lerna and dependencies with `lerna bootstrap`
- Get a beer. This will take a while.

## 4. Unit Testing

> This chapter explains the basics of testing code and the approach taken with JEST to test the current kind of
> components.

Jest is a test framework for JavaScript. It is recommended by Facebook for React Component Testing. Enzyme is a
JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse React Components' output.
In every SPAs we have combined jest and enzyme.

Below are the steps to set up Jest and Enzyme.

- Install jest and enzyme by run following npm command. `npm install --save-dev jest react-test-renderer enzyme enzyme-adapter-react-16 enzyme-to-json`

- Update `packge.json`. Add scripts to run test. Add set up file for jest.

- Create a test/jestsetup.js file to customize Jest environment

- To run jest test cases we need to run yarn test command.

Testing Simple Button Component Rendering:

```javascript
//Button.js
import React from 'react';

export default calss Button extends React.Component{
    render(){
        return(
            <span className="input-group-btn">
            <input
                classname="btn"
                name="btnG"
                value="Button"
                type="button"
            />
            </span>
        );
    }
}
```

We will create Button.test.js file in the corresponding folder and we will write all the test cases:

```javascript
//Button.test.js
import React from 'react';
import Button from '../src/component/Button';

describe('Button Component Test', () => {
  it('Button component rendered correctly', () => {
    const rendered = shallow(<Button />);
    expect(rendered).toMatchSnapshot();
  });
  it('All the CSS classes and HTML tags redered correctly', () => {
    const rendered = shallow(<Button />);
    expect(redered.find('span').hasClass('input-group-btn')).toEqual(true);
    expect(redered.find('input').length).toEqual(1);
  });
});
```

In the above code `describe` block groups together several related tests in one test suit. `it` is the method of jest to
run individual test. Inside this method we have used shallow rendering of enzyme.Shallow method of enzyme returns a
wrapper instance around the rendered output. Enzyme provides many methods on this ShallowWapper which can help us to
write our test file.

The expect function of jest is used every time we want to test a value. It always comes with a match function which
contains the expected value.

We have covered test cases for each and every component as well as all the JavaScript method. We have also implemented
redux async functions test cases too.

> **For more information about our implementation take a look to the [TESTING.md](./TESTING.md) document.**

## 5. Analytics Calls

> This chapter explains the data flow through an SPA that are needed by the Analytics functions and the use of the Data
> Collection file.

### 5.1. Analytics Data Collection

All the rules and especial values that are needed as part of the analytics calls can be found in a special file built by
the Analytics Team, this is called _"Analytics Data Collection Master File"_ and can be downloaded
[here](https://nxp1.sharepoint.com/sites/ITDigitalSolutions/webanalytics/Shared%20Documents/Forms/AllItems.aspx?csf=1&e=gbBa7e&RootFolder=%2Fsites%2FITDigitalSolutions%2Fwebanalytics%2FShared%20Documents%2F01%20-%20Data%20Collections&FolderCTID=0x0120003F56140DF5B0924CBED20955B072141C)
-It's as bigger that you cannot open it in online view.

![Analytics Data Collection Master File](./media/fig-5-1-a.png)

Once a tab (distinguished by project -SPA) is selected, column A contains all the activities that triggers an analytics
call. Each one of them contains several rows with all the rules and values for each Analytics attribute that is being
tracked, but the only rows that need attention by the purpose of this document are the highlighted ones.

Taking as example "Keyword Entered" Activity, only some of the many rows contained are highlighted, those are taken in
count to fill this function:

```javascript
setAnalytics(
  analyticsCallType, //'event'
  eventType, //Determines events and variables to set.
  eventPathing, //Used to Set Prop16
  pageAction, //Used to set eVar57
  pageSubaction, //Used  to set eVar58
  targetURL, //Used to set eVar71

  destinationCF, //Used to set eVar1(Destination Page)
  destinationSubCF, //Used to set eVar63 (Destination Page) Subcontentfinding, default value is blank
  pageActionCF, //Used to set eVar1 Page Action Content Finding, Default value is browse
  pageActionSubCF, //Used to eVar63 Page Action Subcontentfinding, default value is blank
  keyword, //Used to set prop4
  resultcount, // Used to set prop5
  filterlist, // Used to set list1
  pageNumber, //Used to set prop42
  searchResultPosition //Used  to set eVar70
);
```

So, finding each attribute by the column B and matching them with the values or indications in column H of its
respective row, this call would be:

```javascript
setAnalytics(
  'event', //event
  'searchEvent', //searchEvent
  'Training Search: Search Executed', //prop16
  'Training Search: Search Executed', //eVar57
  keyword, //eVar58
  '', //eVar71
  '', //eVar1(Dest)
  '', //eVar63(Dest)
  'browse', //eVar1
  '', //eVar63
  keyword, //prop4
  totalCount, //prop5
  l1, //list1
  '', //prop42
  '' //eVar70
);
```

> Where **keyword**, **totalCount** and **l1** are variables handled by the SPA logic since are dynamic data.

This _setAnalytics_ functions is commonly called as _"the analytics called"_ and each Activity (Column A) should be
handled with a proper use -with the correct data- of this function.

### 5.2. External HTML Analytics attributes insertion

One of the Activities is detecting and handling the clicks inside the home landing page, so for that purpuse the
following function performs a crawler which looks for the appropiate < a > with the desired classes that identifies the
type of link, and then it adds an analytics attribute on the tag in order to track the interaction with all of them.

```javascript
//HomePage.js
(...)
let isValidNode = function() {
   return true;
 };
 let processNodeDefinitions = new HtmlToReact.ProcessNodeDefinitions(React);
 let processingInstructions = [
   {
     // Custom <a> processing
     shouldProcessNode: function(node) {
       return (
         node.name === 'a' &&
         node.attribs.dataname !== undefined &&
         node.attribs.datavalue !== undefined
       );
     },
     processNode: function(node, children) {
       let attribs = node.attribs;
       return <a onClick={handleExternalLink(attribs)}>{children}</a>;
     }
   },
   {
     // Anything else
     shouldProcessNode: function(node) {
       return true;
     },
     processNode: processNodeDefinitions.processDefaultNode
   }
 ];
 (...)
```

> Basically, **shouldProcessNode** looks for the correct < a >, **processNode** inserts the click handler which will
> manage the proper Analytics Call.

This solution addressed the need of having a html snippet in our CMS (teamsite) inside the used folder
`/assets/webpages/html-snippets/data/en/test` while the JS Bundle of the respective SPA lives in another location with
all JS files `/assets/resources/scripts/react/` referenced by the first one just with an `<script>` tag to that url at
the end of the snippet.

```javascript
<script>
var randomnos = Math.ceil(Math.random() * 1000000000);
var mysource = "/resources/scripts/react/hardware-dev-tools-bundle.js?v="+randomnos;

window.onload = function() {
    var script = document.createElement('script');
    script.src = mysource;
    document.head.appendChild(script);
}
</script>
```

> This logic is just to generate changes in the attribute attached to the url, all just to make Teamsite feels a
> difference in the Bundle and then it could refresh it sooner.

### 5.3. Analytics handlers on events

Once all the Analytics Calls are prepared with the directions from the Data Collection, it's time to insert them into
the code but in the appropiate site.

> Reminding that our SPAs are using Redux, so data can be modified with any State change and can be different according
> the current stage of the Component Life Cycle

There are 2 mainly different approaches to solve that (having the correct data in the correct time):

- Click Handler triggers an Analytics Call

For example, the more/less feature in the LeftNav Category Filters. It has assigned an Activity from the Data Collection
and since it only needs to alert that it was pressed (no special or dynamic data) its call can be handled directly from
the onClick event.

```javascript
    //categoryPanel.js
    (...)
    handleClick = () => {
        this.setState({
        showMore: !this.state.showMore
        });
        this.props.loadSidenav();
        this.props.sidenavLoaded();
        let keyword = typeof this.props.metadata.q != 'undefined' ? this.props.metadata.q : '';
        let l1 = typeof this.props.selectedFilters != 'undefined' ? analyticsl1(this.props.selectedFilters) : '';
        let count = typeof this.props.metadata.count != '0' ? this.props.metadata.count : 'zero';
        setAnalytics(
        'event', //event
        'event', //searchEvent
        this.state.showMore ? 'Software Center: See More Link Click' : 'Software Center: See Less Link Click', //prop16
        this.state.showMore ? 'Software Center: See More Link Click' : 'Software Center: See Less Link Click', //eVar57
        'Software Category', //eVar58
        '', //eVar71
        '', //eVar1(Dest)
        '', //eVar63(Dest)
        'browse', //eVar1
        '', //eVar63
        keyword, //prop4
        count, //prop5
        l1, //list1
        '', //prop42
        '' //eVar70
        );
    };

    (...)

    const moreLess = catPanelChildren.length > this.state.showMax && (
        < li className="more-filters-item" onClick={this.handleClick}>
            {this.state.showMore ? (
            < a className="more-filters-link is-closed">{more}< /a >
            ) : (
            < a className="more-filters-link is-open">{less}< /a >
            )}
        < /li >
        );

    (...)
```

- Action-Reducer + Life Cycle to trigger an only Analytics Call

When dinamic data is needed sometimes can be difficult to catch it right in the appropiate moment and the data could be
corrupted or older, that's why using Life Cycle helps to take it in an specific moment. But that could causes several
Analytics Calls since **render** could be performed more than once. So using Action-Reducer logic from Redux helps
addresing that problem.

The team has found a solution using the Search Bar as a central of the Analytics Calls since it is present on all User
Journey across the SPA and to distinguish what kind of call was performed and when is required, we use an object in the
State and a _dispatcher_ to read it.

```javascript
//CategoryPanel.js
    (...)
    let trackAction = {
        tAction: 'filter-click',
        tHeader: `All ${header}s`
    };
    this.props.trackFetch(trackAction);
    (...)
    let trackAction = {
        tAction: 'filter-click',
        tHeader: headerEn,
        tName: name
    };
    this.props.trackFetch(trackAction);
    (...)

//SelectedFiltersList.js
    (...)
    let trackAction = {
        tAction: 'remove-filter',
        tHeader: header,
        tName: named
      };
    (...)
```

> Look at how **trackFetch** invokes all the Redux logic to change the State and so that the SPA rendering.

```javascript
//search/index.js
(...)
componentDidUpdate(nextProps) {
    if (
      this.props.track.tAction == 'search-executed' &&
      //typeof nextProps.track.tAction != 'undefined' &&
      nextProps.loading //true
    ) {
      (...)
      setAnalytics(
        'event', //event
        'searchEvent', //searchEvent
        'Training Search: Search Executed', //prop16
        'Training Search: Search Executed', //eVar57
        keyword, //eVar58
        '', //eVar71
        '', //eVar1(Dest)
        '', //eVar63(Dest)
        'browse', //eVar1
        '', //eVar63
        keyword, //prop4
        this.props.totalcount, //prop5
        l1, //list1
        '', //prop42
        '' //eVar70
      );
      return;
    }
    if (
      this.props.track.tAction == 'filter-click' &&
      //typeof this.props.track.tAction != 'undefined' &&
      nextProps.loading //true
    ) {
      (...)
      setAnalytics(
        'event', //event
        'searchEvent', //searchEvent
        'Training Search: Filters Applied', //prop16
        'Training Search: Filters Applied', //eVar57
        eVar58, //eVar58
        '', //eVar71
        '', //eVar1(Dest)
        '', //eVar63(Dest)
        'browse', //eVar1
        '', //eVar63
        keyword, //prop4
        this.props.totalcount, //prop5
        l1, //list1
        '', //prop42
        '' //eVar70
      );
      return;
    }
    if (
      this.props.track.tAction == 'remove-filter' &&
      //typeof nextProps.track.tAction != 'undefined' &&
      nextProps.loading
    ) {
      (...)
      setAnalytics(
        'event', //event
        event, //searchEvent
        'Training Search: Filters Removed', //prop16
        'Training Search: Filters Removed', //eVar57
        eVar58, //eVar58
        '', //eVar71
        '', //eVar1(Dest)
        '', //eVar63(Dest)
        'browse', //eVar1
        '', //eVar63
        this.props.track.tHeader == 'keyword' ? this.props.track.tName : keyword, //prop4
        count, //prop5
        l1, //list1
        '', //prop42
        '' //eVar70
      );
      return;
    }
  }
(...)
```

> Look at how **tAction** defines the case of Analytics Called which depend on the information assigned by the object
> created in the files formerly shown.

### 5.4. Analytics functions' file

> filter.js

### 5.5. Testing analytics values

> This topic is pending due to all last changes in the way we used to validate/test analytics values in the browser.

## 6. Teamsite integration

> This chapter explains how to make the bundle file and where to place it. It also shows the routes where all SPA's
> related files are. located in teamsite

### 6.1. Create bundle.js

Inside the project's folder run `yarn build` and on it will be crated the _dist_ directory with the **_project-name_-bundle.js** inside. That file needs to be loaded/updated in the proper teamsite folder -which at this moment is on `/resources/scripts/react/`- and publishing it as usual.

If once `yarn build` was run there are some JESTs failing, those have to fixed in order to avoid pushing errors into production. Although if pushing it is urgent and fixes were minor you can use `yarn build:js` to skip the usual testing process.

### 6.2. Teamsite files' location

As part of the User Stories for these SPAs, it's required to have in our CMS -teamsite- the homepages of them to be updated as usual by the Web Publishing known process. To achive that, a .page, DCT and Snippet assets must be created with the respective association.

The following are the current directories where those type of files live:

|         | UAT Directory                                  | Prod Directory                                 |
| ------- | ---------------------------------------------- | ---------------------------------------------- |
| .page   | ./high-level-pages/test/                       | ./high-level-pages/web-tools/                  |
| DCT     | ./webpages/high-level-pages/data/en/web-tools/ | ./webpages/high-level-pages/data/en/web-tools/ |
| snippet | ./webpages/html-snippets/data/en/test/         | ./webpages/html-snippets/data/en/archive/      |
| images  | ./assets/images/en/[typeOfImageFolder]/        | ./assets/images/en/[typeOfImageFolder]/        |

### 6.3. Special cautions

In the Snnipet, a short `<script>` is added to randomly generate a parameter at the end of the URL that attaches the JS bundle (to force CMS to reload and use the newer version of the JS Bundle avoiding chache's).

```html
<script>
  var randomnos = Math.ceil(Math.random() * 1000000000);
  var mysource = "/resources/scripts/react/partner-directory-bundle.js?v="+randomnos;

  window.onload = function() {
      var script = document.createElement('script');
      script.src = mysource;
      document.head.appendChild(script);
  }
</script>
```

But in the case of the Production's file, this shouldn't be included (to take advantage of cache's and load Bundle content faster in user's browser)

```html
<script type="text/javascript" src="/resources/scripts/react/partner-directory-bundle.js?v=3"></script>
```

## 7. Support

> This chapters contains a FAQ section to understand better common issues and contact list to contact an expert of the
> topic you may have questions.

### 7.1. Support Model

React Apps in development - Jira issue tracking - Part of Sprint schedule release

React apps in production - Enhancements - - Any enhancements that require IT work need to go through ACCB - Funnel through SNOW if IT work is required -> add to Generic Jira Enhancement List - If no IT work then report in Jira Enhancement List
○ Tweaks (visual or small minor changes)
§ Perform full build with eslint, jest unit tests
§ Upload build to UAT first
§ Verify no issues in UAT.
§ Send email to group on new production update (can we automate this somehow? Be notified when uploads to folder are made)
○ Improvements
§ Small (<1 day dev)
□ Group decides if regression tests are needed. If impact is related to Analytics, for example.
□ Kick off Jenkins build which will perform eslint, jest unit tests and upload to UAT test server. (in process)
□ Verify no issues in UAT.
□ Send email to group on new production update.
□ Coordinate regression testing if necessary.
§ Large (>1 day dev)
□ Regression testing is most likely needed
□ Kick off Jenkins build which will perform eslint, jest unit tests and upload to UAT test server. (in process)
□ Test thoroughly in UAT.
□ Schedule production release.
□ Coordinate regression testing. - Bugs - Snow incidents -> Jira Issues , Workfront -> Jira issue (generic Jira Bug List)
○ Visual - Global Stylesheet or React code
§ Group decides if regression tests are needed. If impact is related to Analytics, for example.
§ Kick off Jenkins build which will perform eslint, jest unit tests and upload to UAT test server. (in process)
§ Verify no issues in UAT.
§ Send email to group on new production update.
§ Coordinate regression testing if necessary.
○ Functional - React code bug
§ Regression testing is most likely needed
§ Kick off Jenkins build which will perform eslint, jest unit tests and upload to UAT test server. (in process)
§ Test thoroughly in UAT.
§ Schedule production release.
§ Coordinate regression testing. - HotFix - Snow incidents -> Jira Issues
○ Assigned to team member to fix.
○ Once fixed need to determine if regression test is required.
○ Kick off Jenkins build which will perform eslint, jest unit tests and upload to UAT test server. (in process)
○ Verify no issues in UAT.
○ Send email to group on new production update.
○ Coordinate regression testing if necessary.

### 7.2. Useful links

Every SPA is connected to different URLs (API and JSON file) to obtain data that could be from UAT or Production depending to which environment it's loaded. The URLs are (relative form):

| Data                       | Where is it came from? | URL                                               | Used                   |
| -------------------------- | ---------------------- | ------------------------------------------------- | ---------------------- |
| Results                    | API                    | /webapp-rest/api/search/getAsset/allResults/      | Queries                |
| Suggestions                | API                    | /webapp-rest/api/search/getAsset/suggestions/     | Search bar             |
| Labels (English & Chinese) | JSON file              | /resources/scripts/common/label-translations.json | Placeholders / Buttons |

These are the Single Page Applications (SPA) available:

| Page Name               | Page URL                                                                    |
| ----------------------- | --------------------------------------------------------------------------- |
| Partner Directory       | [Click here!](https://www.nxp.com/support/:PARTNER-DIRECTORY)               |
| Engineering Consultants | [Click here!](https://www.nxp.com/support/:APPROVED-ENGINEERING-CONSULTANT) |
| Software Center         | [Click here!](https://www.nxp.com/support/:SOFTWARE-CENTER)                 |
| Reference Designs       | [Click here!](https://www.nxp.com/support/:REFDSGNHOME)                     |
| Training                | [Click here!](https://www.nxp.com/support/training-events:TRAINING-EVENTS)  |

### 7.3. FAQ and Known Issues

> List of expected questions or common known problems.

- Why does my new content cannot be found?
  - In Homepage: Review the if something was wrong with the HTML-snippet through the publish process.
  - An item: Check if all its proper fields were correctly filled in the teamsite asset.
- Why am I seeing strange characters in some texts?
  - Sometimes some symbols don't load well in the page. Refresh (ctrl+F5).
  - Otherwise, content could be contaminated or wrongly introduced.
- Why do some images are not being displayed?
  - Check if all its proper fields were correctly filled in the teamsite asset.
  - If it's new, wait 45min and then Refresh (ctrl+F5).
- Why am I getting a 404 or wrong link after clicking an item?
  - Refresh (ctrl+F5).
  - API could have wrong information. Report to React Team.
  - Page/Item had troubles in the publish process and it's not available yet. Review the Teamsite's asset.
- Why does an element shows wrong information?
  - Content could be contaminated or wrongly introduced. Review the Teamsite's asset.
- Why am I getting wrong counting in a results page?
  - Sometimes API could have problems and affect to this value. Refresh (ctrl+F5) and in if still happening Report to
    React Team.
- Why is taking longer to get results when filtering?
  - Sometimes Search API could take longer to get results or may be down. Refresh (ctrl+F5) and in if still happening
    Report to React Team.
-

### 7.4. Contact List

Feel free to contact us for any question:

| Topics               | Name              | Email                            | Location         |
| -------------------- | ----------------- | -------------------------------- | ---------------- |
| Framework & Setup    | David Kindler     | david.kindler@nxp.com            | Austin, TX.      |  | APIs | Luis Duran | luis.rubio@nxp.com | Guadalajara, MX. |
| Pages Components     | Alejandro Avalos  | alejandro.avalos@nxp.com         | Guadalajara, MX. |
| Results Components   | Juan Avalos       | juanantonio.avalosorozco@nxp.com | Guadalajara, MX. |
| LeftNav Components   | Bhagya Kasturi    | bhagya.kasturi@nxp.com           | Austin, TX.      |
| Search Component     | Luis Duran        | luis.rubio@nxp.com               | Guadalajara, MX. |
| Shared Components    | David Kindler     | david.kindler@nxp.com            | Austin, TX.      |
| Utilities Folder     | Bhagya Kasturi    | bhagya.kasturi@nxp.com           | Austin, TX.      |
| Labels               | David Kindler     | david.kindler@nxp.com            | Austin, TX.      |
| Unit Testing         | Alejandro Avalos  | alejandro.avalos@nxp.com         | Guadalajara, MX. |
| Analytics Calls      | Juan Avalos       | juanantonio.avalosorozco@nxp.com | Guadalajara, MX. |
| Analytics Values     | Claudia Gazcon    | Claudia.Gazcon@nxp.com           | Guadalajara, MX. |
| Teamsite Integration | Luis Duran        | luis.rubio@nxp.com               | Guadalajara, MX. |
| Web Publishing Team  | Eduardo Velazquez | eduardo.velazquez@nxp.com        | Guadalajara, MX. |
| Project Record       | Anne Dove         | anne.dove@nxp.com                | Phoenix, AZ.     |
| SPAs Owner           | Jose Romero       | j.romero@nxp.com                 | Austin, TX.      |

