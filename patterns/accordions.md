---
title: "Accordions"
date: "2019-03-27"
description: "Demonstrate Accordion Component"
---

<div class="container-fluid iw_section">
  <div class="row iw_row iw_stretch">
    <div class="iw_columns col-lg-12">
      <!-- Status -->
      <div class="iw_component">
        <div class="mt1 alert alert-info text-center">
          <div class="row ">
            <div class="col-md-3"> <strong>IT driven component</strong> </div>
            <div class="col-md-3 "> <span class="icon-cancel-circle22 alert-danger"></span> High Level Page Component </div>
            <div class="col-md-3 "> <span class="icon-checkmark-circle2 alert-success"></span> Summary Page Component </div>
            <div class="col-md-3  "> <strong>Last Revision Date:</strong></br>
              <script>
                document.write(document.lastModified);
              </script> CST </div>
          </div>
        </div>
      </div>
      <!-- End Status -->
      <!-- Component Info -->
      <div class="iw_component">
        <h1>Accordions</h1>
        <p>Uses the <a href="http://getbootstrap.com/javascript/#collapse" target="_blank">Bootstrap collapse</a> functionality to toggle panel components.</p>
        <p>Accordions should be collapsed by default. This is done by using the <code>aria-expanded="false"</code> attribute in the panel</p>
      </div>
      <!-- End Component Info -->
      <!-- Accordions -->
      <div class="iw_component">
        <div class="row">
          <div class="col-sm-12">
            <div class="panel-group accordion ui-accordion" role="tablist" aria-multiselectable="true">
              <div class="panel panel-default">
                <h3 id="headingOne" class="ui-accordion-header" role="tab">
                  <a href="#panel1" class="collapsed" role="button" data-toggle="collapse"  aria-expanded="false" aria-controls="panel1">Ultra-Low-Power</a>
                </h3>
                <div id="panel1" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne" aria-expanded="false">
                <div class="toggle_container">
                  <ul>
                    <li>11 low-power modes with power and clock gating for optimal peripheral activity and recovery times. Stop currents of &lt;190 nA (VLLS0), run currents of &lt;270 uA/MHz, 4 µs wake-up from Stop mode</li>
                    <li>Full memory and analog operation down to 1.71 volts for extended battery life </li>
                    <li>Low-leakage wake-up unit with up to eight internal modules and 16 pins as wake-up sources in low-leakage stop (LLS)/very low-leakage stop (VLLS) modes</li>
                    <li>Low-power timer for continual system operation in reduced power state</li>
                  </ul>
                </div>
                </div>
              </div>
              <div class="panel panel-default">
                <h3 id="headingTwo" class="ui-accordion-header" role="tab">
                  <a href="#panel2" class="collapsed" role="button" data-toggle="collapse"  aria-expanded="false" aria-controls="panel2">Flash, SRAM and FlexMemory</a>
                </h3>
                <div id="panel2" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo" aria-expanded="false">
                <div class="toggle_container">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum repudiandae earum est. Alias perspiciatis magnam aperiam recusandae! Blanditiis modi sunt impedit inventore placeat quibusdam vero nostrum praesentium, atque, commodi,
                    minus?</p>
                </div>
                </div>
              </div>
              <div class="panel panel-default">
                <h3 id="headingThree" class="ui-accordion-header" role="tab">
                  <a href="#panel3" class="collapsed" role="button" data-toggle="collapse"  aria-expanded="false" aria-controls="panel3">Mixed-Signal Capability</a>
                </h3>
                <div id="panel3" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree" aria-expanded="false">
                <div class="toggle_container">
                  <ul>
                    <li>High-speed 16-bit ADC with configurable resolution. Single or differential output mode operation for improved noise rejection. 500 ns conversion time achievable with programmable delay block triggering</li>
                    <li>Up to two high-speed comparators providing fast and accurate motor over-current protection by driving PWMs to a safe state</li>
                    <li>Optional analog voltage reference provides an accurate reference to analog blocks and replaces external voltage references to reduce system cost</li>
                  </ul>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       <p class="segment-subtitle">HTML markup <span>A</span></p>

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

  </div>
</div>
