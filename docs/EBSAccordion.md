---
id: EBSAccordion
title: EBS Accordion Component
---

uat.nxp [example.](https://uat.nxp.com/products/processors-and-microcontrollers/power-architecture-processors/qoriq-platforms/p-series/qoriq-p2020-and-p2010-dual-and-single-core-communications-processors:P2020)  

## General

This component was launched to production in June 7th and is showing under PSP, only if the PSP have associated Application boards.

![Carrousel](/img/Apps/EBS-Accordion.png)

## Structure of the component

The EBS Accordion Component is formed by 7 file:

- index.js
- EBSAccordion.js
- EBSCollapse.js
- EBSItemList.js
- EBSItem.js
- SearchList.js
- SeachListOptions.js

## How is diplayed and how consume data?

URL: https://uat.freescale.com/webapp/offeringAPI/rest/v1/productCode/CODEID/typeId/457665322649266814.sp

All the PSPs with application board associates have the following div in the summary page template:

```
<div id="EBS-accordion" productCode="P2020">...</div>
```

we use this div to insert the react code and obtein the spacific codeID to make the query. If we use this div the url will looks like: 
```
https://uat.freescale.com/webapp/offeringAPI/rest/v1/productCode/P2020/typeId/457665322649266814.sp
```

This url is consumed in the EBSAccordion.js: 

```
//const typeId = "/typeId/457665322649266814.sp"
//ROOT_URL_EBS_ACCORDION: https://uat.freescale.com/webapp/offeringAPI/rest/v1/productCode/

    componentDidMount() {
        let productId = this.props.productCode; //recive the codeID as props.

        let url = ROOT_URL_EBS_ACCORDION + productId + typeId; //create the new url with the codeID
        console.log("url >>", url)
        fetch(url)
            .then(res => res.json())
            .then(res => {
                console.log("RES >>", res)
                this.setState({ data: res }) //save all the date in the state.
                this.handleFilterOptions(res); //call a funtion to save all the filter for the component
            });
    }   
```


## HTML Markup

[More detail in branding site](https://branding.nxp.com/pattern-accordion.html#partner-panel)
```
<div class="partner-group-wrapper band cool-grey-xxxlight">
  <div class="partner-group-header">
    <h2 class="partner-group-heading">Heading</h2>
    <div class="partner-group-select form-inline">
      <label for="partnerSelect">Show:&nbsp;</label>
      <select class="form-control" id="partnerSelect" name="partnerSelect">
        <option value="" disabled selected>Choose your application</option>
        <option value="2">...</option>
      </select>
    </div>
  </div>
  <div class="panel-group partner-group" id="partner-accordion" role="tablist" aria-multiselectable="true">

    ### open, active panel
    <div class="panel partner-item">
      <div class="partner-heading" role="tab" id="headingOne">
        <a class="partner-title" role="button" data-toggle="collapse" data-parent="#partner-accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          <span class="partner-product">Panel title</span>&nbsp;<span class="partner-name">by Partner Name</span>
        </a>
      </div>
      <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
        <div class="panel-body partner-body">
          <div class="partner-details">
            <figure class="partner-media">
              <img src="//via.placeholder.com/1600x900" alt="placeholder">
            </figure>
            <div class="partner-description">
              <p>Lorem ipsum dolor sit amet...</p>
              <div class="partner-link">
                <a href="#0" class="cta">Visit Partner</a>
              </div>
            </div>
          </div>
          <div class="partner-resources">
            <div class="partner-resource partner-features">
              <h3 class="partner-resource-title">Resource title</h3>
              <ul class="partner-list">
                <li>...</li>
                <li>...</li>
              </ul>
            </div>
            <div class="partner-resource partner-applications">
              <h3 class="partner-resource-title">Resource title</h3>
              <ul class="partner-list">
                <li>...</li>
                <li>...</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

## Animations/Transition

This component use an animation to scroll the selecte item to the top of the component, to make this posible we are use 3 function:

- handleScroll() - this is the function called when some item was clicked and set the values for the animation
- scrollTo() - this function make the animation.
- Math.easeInOutQuad() - this help ScollTop to make the calcs for the animation

#### handleScroll():
```
    handleScroll(item, ref) {
        let elem = ref
        let divHeigth = this.itemContainer.current;
        let topPos = elem.offsetTop

        this.scrollTo(divHeigth, topPos - divHeigth.offsetTop, 500, item, ref);
    }
```
#### scrollTo():
```
scrollTo(element, to, duration, item, ref) {

        var start = element.scrollTop,
            change = to - start,
            currentTime = 0,
            increment = 20;

        var animateScroll = function () {
            currentTime += increment;
            let textContainerHeigth = parseInt(document.getElementById(item).style.height);
            let isOpen = document.getElementById(item).classList.contains('in');

            element.style.maxHeight = textContainerHeigth > 0 || isOpen ? 43 + textContainerHeigth + "px" : "300px";
            var newTo = ref.offsetTop - element.offsetTop;
            change = newTo - start;
            var val = Math.easeInOutQuad(currentTime, start, change, duration);
            element.scrollTop = val;
            if (currentTime < duration) {
                setTimeout(animateScroll, increment);
            }
        };
        animateScroll();

    }
```

#### Math.easeInOutQuad():
```
//t = current time
//b = start value
//c = change in value
//d = duration
Math.easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
};
```


## Analytics

#### Items

For analytics in the items use the standar DTM classes in the EBSItem.js file

- dtmcustomrulelink in the main div
- ata-dtmaction in the same div
- data-dtmsubaction in the <a>


```
<div className="panel partner-item dtmcustomrulelink" data-dtmaction="Overview Tab - Application Board Click" >
    <div className="partner-heading" role="tab" id={"heading" + collaps}>
        <a className="partner-title collapsed" role="button" data-dtmsubaction={"Overview Tab - Application Board Click " + name} data-toggle="collapse" onClick={e => this.props.scroll("collapse" + collaps, this.itemElements.current)} ref={this.itemElements} data-parent="#partner-accordion" href={"#collapse" + collaps} aria-expanded="false" aria-controls={"collapse" + collaps}>
            <span className="partner-product">{name}</span>&nbsp;<span className="partner-name">by {vendor}</span>
        </a>
    </div>
    <div>
        rest of content...
    </div>
</div>
```

#### Filter

For analytics in the filter dropwDown send and object to trackCustomObject() global variable.

```
    handleAnalytics(name) {
        let analytics = {
            call: 'event', //event
            name: 'event', // event
            pageActionContentFinding: 'browse', //v1
            eventPathing: 'Overview tab: Application Boards Click - ' + name, //c16
            eventAssetid: name, //v16
            eventPageTemplateType: name, //c23
            pageAction: 'Overview tab: Application Boards Click - ' + name, //v57
            search: {},
            form: {}
        };
        trackCustomObject(analytics);
    }
```