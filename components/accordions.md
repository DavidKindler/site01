---
title: "Accordions"
date: "2019-03-6"
description: "Uses theBootstrap collapse functionality to toggle panels."
---

Accordions should be collapsed by default. This is done by using the aria-expanded="false" attribute in the panel.

<div
  class="panel-group accordion ui-accordion"
  role="tablist"
  aria-multiselectable="true"
>
  <div class="panel panel-default">
    <h3 id="headingOne" class="ui-accordion-header" role="tab">
      <a
        href="#panel1"
        class="collapsed"
        role="button"
        data-toggle="collapse"
        aria-expanded="false"
        aria-controls="panel1"
      >
        Ultra-Low-Power
      </a>
    </h3>
    <div
      id="panel1"
      class="panel-collapse collapse"
      role="tabpanel"
      aria-labelledby="headingOne"
      aria-expanded="false"
    >
      <div class="toggle_container">
        <ul>
          <li>...</li>
          <li>...</li>
          <li>...</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="panel panel-default">
    <h3 id="headingTwo" class="ui-accordion-header" role="tab">
      <a
        href="#panel2"
        class="collapsed"
        role="button"
        data-toggle="collapse"
        aria-expanded="false"
        aria-controls="panel2"
      >
        Flash, SRAM and FlexMemory
      </a>
    </h3>
    <div
      id="panel2"
      class="panel-collapse collapse"
      role="tabpanel"
      aria-labelledby="headingTwo"
      aria-expanded="false"
    >
      <div class="toggle_container">
        <p>...</p>
      </div>
    </div>
  </div>
  <div class="panel panel-default">
    <h3 id="headingThree" class="ui-accordion-header" role="tab">
      <a
        href="#panel3"
        class="collapsed"
        role="button"
        data-toggle="collapse"
        aria-expanded="false"
        aria-controls="panel3"
      >
        Mixed-Signal Capability
      </a>
    </h3>
    <div
      id="panel3"
      class="panel-collapse collapse"
      role="tabpanel"
      aria-labelledby="headingThree"
      aria-expanded="false"
    >
      <div class="toggle_container">
        <ul>
          <li>...</li>
          <li>...</li>
          <li>...</li>
        </ul>
      </div>
    </div>
  </div>
</div>

```javascript
<div
  class="panel-group accordion ui-accordion"
  role="tablist"
  aria-multiselectable="true"
>
  <div class="panel panel-default">
    <h3 id="headingOne" class="ui-accordion-header" role="tab">
      <a
        href="#panel1"
        class="collapsed"
        role="button"
        data-toggle="collapse"
        aria-expanded="false"
        aria-controls="panel1"
      >
        Ultra-Low-Power
      </a>
    </h3>
    <div
      id="panel1"
      class="panel-collapse collapse"
      role="tabpanel"
      aria-labelledby="headingOne"
      aria-expanded="false"
    >
      <div class="toggle_container">
        <ul>
          <li>...</li>
          <li>...</li>
          <li>...</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="panel panel-default">
    <h3 id="headingTwo" class="ui-accordion-header" role="tab">
      <a
        href="#panel2"
        class="collapsed"
        role="button"
        data-toggle="collapse"
        aria-expanded="false"
        aria-controls="panel2"
      >
        Flash, SRAM and FlexMemory
      </a>
    </h3>
    <div
      id="panel2"
      class="panel-collapse collapse"
      role="tabpanel"
      aria-labelledby="headingTwo"
      aria-expanded="false"
    >
      <div class="toggle_container">
        <p>...</p>
      </div>
    </div>
  </div>
  <div class="panel panel-default">
    <h3 id="headingThree" class="ui-accordion-header" role="tab">
      <a
        href="#panel3"
        class="collapsed"
        role="button"
        data-toggle="collapse"
        aria-expanded="false"
        aria-controls="panel3"
      >
        Mixed-Signal Capability
      </a>
    </h3>
    <div
      id="panel3"
      class="panel-collapse collapse"
      role="tabpanel"
      aria-labelledby="headingThree"
      aria-expanded="false"
    >
      <div class="toggle_container">
        <ul>
          <li>...</li>
          <li>...</li>
          <li>...</li>
        </ul>
      </div>
    </div>
  </div>
</div>
```
