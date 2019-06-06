---
id: Carousel
title: Carousel - NXP Designs
---

nxp.com [example.](https://www.nxp.com/support/developer-resources/nxp-designs:REFDSGNHOME#/)  

## General

This component is showing information from specific Search query and display it in slider.
![Carrousel](/img/Apps/carrousel-NXP-Designs.png)

#### Dependencies: 
```
"react-slick": "^0.23.2",
"slick-carousel": "^1.8.1",
```
See more details on [React Slick](https://react-slick.neostack.com/ )

## Structure of the component

- Carousel.js
- ItemCarouse.js
- StaticItem.js
- Carouse.css
  
## How is diplayed and how consume data?
#### how display?
this component is displayed in the homepage of the NXP designs by Process node library:
```js
      {
        // Custom <div> processing - Carousel landing page
        shouldProcessNode: function (node) {
          return node.name === 'div' && node.attribs.class === 'wps-slider'
        },
        processNode: function (node, children) {
          return wirelessPowerSolutionSlider ? <Carousel wirelessPowerSolutionSlider={wirelessPowerSolutionSlider} /> : null
        }
      },
```
the code search a in div in homepage with class "wirelessPowerSolutionSlider", if this exist add the component.
```
    <div class="wps-slider">{wirelessPowerSolutionSlider}</div>
```

#### Total Count
```
<span className='count'>({this.props.wirelessPowerSolutionSlider.totalcount})</span>
```


## how consume data?
we create a search query and call a fetch function:
```
    const urlSlider = `{collection=softwaretools&start=0&max=25&query=typeTax>>t602::deviceTax>>c757_c312&language=${this.props.labels.language}&fields=OG:Image.blockDiagramIdxUrl.PageTitle.type.search_summary.documentationURL.buyParaURL.toolsTabURL.ModifiedDate&siblings=false}`;
    fetchSlider(urlSlider);
```

#### fetchSlider
```
export const fetchSlider = (filter) => {
  return function (dispatch) {
    let url2 = ROOT_URL + filter;//SOLR TESTING
    url2 = url2.substr(0, url2.length - 1) + actionTypes.SEARCH_ENGINE;//SOLR TESTING
    return axios({
      url: url2,//SOLR TESTING
      timeout: 10000
    })
      .then(function (response) {
        dispatch(receiveSlider(response.data));
      })
      .catch(function (response) {
        dispatch(receiveError(response.data));
        dispatch(loadingResults(false));
      });
  };
};
```


## how display information
- If the carrousel have 4 or less item will display the statiItem component
- If the carrousel have between 4 and 8 items will display the itemCarousel component

```
let display = total <= 4 ? <StaticItems data={this.props.wirelessPowerSolutionSlider} /> : <ItemCarousel data={this.props.wirelessPowerSolutionSlider} />
```

#### StaticItem
```
class StaticItems extends Component {
  render() {
    let data = this.props.data.results;

    let staticItems = [];
    let default_image = 'https://www.nxp.com/assets/images/en/logos-internal/image-not-available.png';
    if (this.props.data) {
        staticItems = this.props.data.results.map((currentValue, index, array) => {
            return (
                <div className="StaticItemCntr" key={index}>
                    <img className="StaticItemImg" src={currentValue.metaData['OG:Image'] ? currentValue.metaData['OG:Image'] : default_image} />
                    <h3 className="StaticItemTitle"><a href={currentValue.url} onClick={e => handleClick(e, currentValue.url, currentValue.metaData.PageTitle)}>{currentValue.metaData.PageTitle}</a></h3>
                </div>
            );
        })
    }

    return (
        <div className="StaticCntr">
            {staticItems}
        </div>
    );
  }
}
```

#### ItemCarousel

- if have more than 8 items will displate "view all" text next to title.
  
```
class ItemCarousel extends Component {
    render() {
       let carouselItems = [];
        let default_image = 'https://www.nxp.com/assets/images/en/logos-internal/image-not-available.png';
        if (this.props.data) {
            carouselItems = this.props.data.results.map((currentValue, index, array) => {
                return (
                    <div className="itemCntr" key={index}>
                        <img className="CarosuleImg" src={currentValue.metaData['OG:Image'] ? currentValue.metaData['OG:Image'] : default_image} />
                        <span className="CarouselTitle"><a href={currentValue.url} onClick={e => handleClickItem(e, currentValue.url, currentValue.metaData.PageTitle)}>{currentValue.metaData.PageTitle}</a></span>
                    </div>
                );
            })
        }

        return (
            <Slider id="Carousel-cntr" className="carouselCntr" {...settings} >
                {carouselItems.slice(0, 7)}
            </Slider>
        );
    }
}
```

## Style
The componet have a own css file:

```
.carouselCntr {
    margin: 3em 0;
}
.CarosuleImg{
    margin: 0 auto;
    width: auto;
    min-width: 1px;
    max-width:70%;
    height: auto;
    max-height: 100%;
    margin-bottom: 10px;
}
.CarouselTitle{
    float: left;
    margin-bottom: 20px;
}
.CarouselTitle a{
    font-size: 14px;
    padding: 0 15px;
}
...
```

for full code check the Carouse.css file in nxp design code.
## Analytics
To add analytics to the component you should create a analytics object for any action on the carousel:

#### For the items:
   ```js
    <div className="itemCntr" key={index}>
        <img className="CarosuleImg" src={currentValue.metaData['OG:Image']} />
        <span className="CarouselTitle">
            <a href={currentValue.url} onClick={e => handleClickItem(e, currentValue.url, currentValue.metaData.PageTitle)}>{currentValue.metaData.PageTitle}</a>
        </span>
    </div>
```

Here you could call the analytics function when someone clicks on the title in the carousel item.

#### For Dots:

in the settings of the carousel you should add the analytics call in the click event
```js 
        const settings = {
            dots: true,
            appendDots: dots => (
                <div onClick={function (event) { handleClickDots() }} >
                    <ul> {dots} </ul>
                </div>
            ),
        };
```


#### For Arrows:
in the settings of the carousel you should add the analytics call in the click event

Here we assig a function for next an prev arrow
```js
        const settings = {
            prevArrow: <PrevButton />,
            nextArrow: <NextButton />
        };
```

and the function will run with the click event on the respective arrows
```js

    const PrevButton = ({ className, style, onClick }) => (
        <button
            className={['my-class-prev', className].join(' ')}
            style={{ ...style, borderRadius: '50%' }}
            onClick={function (event) { onClick(); handleClickArrows(); }}
        />
    );
```
```js
    const NextButton = ({ className, style, onClick }) => (
        <button
            className={['my-class-next', className].join(' ')}
            style={{ ...style, borderRadius: '50%' }}
            onClick={function (event) { onClick(); handleClickArrows(); }}
        />
    );
```


## Analytics objects

#### Arrows:
```js
const handleClickArrows = () => {
            const metaId = digitalData ? digitalData.pageInfo.assetID : "";
            let analytics = {
                call: "event", //event
                name: "event", // event
                pageActionContentFinding: "browse", //v1
                eventPathing: "Landing Page - Wireless Power Solution Scroll", //c16
                eventAssetid: metaId, //v16
                eventPageTemplateType: metaId, //c23
                pageAction: "Landing Page - Wireless Power Solution Scroll", //v57
                pageSubaction: "Arrow Scroll", //v58
                search: {
                },
                form: {}
            };
            //console.log(analytics)
            trackCustomObject(analytics);
        };
```

#### Dots:
```js
const handleClickDots = () => {
            const metaId = digitalData ? digitalData.pageInfo.assetID : "";
            let analytics = {
                call: "event", //event
                name: "event", // event
                pageActionContentFinding: "browse", //v1
                eventPathing: "Landing Page - Wireless Power Solution Scroll", //c16
                eventAssetid: metaId, //v16
                eventPageTemplateType: metaId, //c23
                pageAction: "Landing Page - Wireless Power Solution Scroll", //v57
                pageSubaction: "Dot Navigation Scroll", //v58
                search: {
                },
                form: {}
            };
            //console.log(analytics)
            trackCustomObject(analytics);
        };
```

#### items: 
```js
const handleClickItem = (e, url, title) => {
            e.preventDefault();
            var analytics = {
                call: 'event',
                name: 'event',
                search: {},
                form: {},
                eventPathing: "Landing Page - Wireless Power Solution Click",//'Landing Page - ' + this.props.sectionName + ' Scroll'
                pageAction: "Landing Page - Wireless Power Solution Click",//'Landing Page - ' + this.props.sectionName + ' Scroll'
                pageSubaction: title,
                targetURL: url,
                destinationContentFinding: 'Reference Design Search',
                destinationSubContentFinding: title,
                pageActionContentFinding: 'browse',
            };
            trackCustomObject(analytics);
            setTimeout(function () {
                //console.log(url, "redirect action")
                window.location.href = url;
            }, 300);
        };
```

