---
title: "Buttons"
date: "2019-06-07"
---

<div class="mt1 alert alert-info text-center">
              <div class="row ">
                <div class="col-md-3">
                  <strong>IT driven component</strong>
                </div>
                <div class="col-md-3 ">
                  <span class="icon-checkmark-circle2 alert-success"></span> High Level Page Component
                </div>
                <div class="col-md-3 ">
                  <span class="icon-checkmark-circle2 alert-success"></span> Summary Page Component
                </div>
                <div class="col-md-3  ">
                  <strong>Last Revision Date:</strong><br>
                  <script>document.write(document.lastModified);</script>03/26/2019 13:06:53 CST
                </div>
              </div>
            </div>

#Buttons & Variations
Use any of the available button classes to quickly create a styled button. If there are multiple buttons with equal importance they should all be the standard grey button color. If one action is most important, that button should be the orange button color with the others being button grey color.

###Markup & Color Options
These are the different color variations for buttons, and their associated classes. For buttons that overlay dark backgrounds or images, use the `btn-white-transparent` variation shown below.

<ul class="list-unstyled list-inline">
  <li><button type="button" class="btn">Default</button></li>
  <li><button type="button" class="btn btn-orange">Orange</button></li>
  <li><button type="button" class="btn btn-green">Green</button></li>
  <li><button type="button" class="btn btn-white">White</button></li>
  <li><button type="button" class="btn btn-icon-link"><span class="icon-home"></span>&nbsp;Button icon</button></li>
  <li><a href="#0" class="btn btn-icon-link"><span class="icon-home"></span>&nbsp;Anchor link</a></li>
  <li><a href="#0" class="btn btn-link"><span class="icon-home"></span>&nbsp;BS Button link</a></li>
  <li class="p1 cool-grey-dark">
    <button type="button" class="btn btn-white-transparent">White Transparent</button>
  </li>
</ul>

<p class="segment-subtitle">HTML MARKUP</p>

```html
<button type="button" class="btn">Default</button>
<button type="button" class="btn btn-green">Green</button>
<button type="button" class="btn btn-orange">Orange</button>
<button type="button" class="btn btn-white">White</button>

Include a space or &nbsp; html entity between icon and link
<button type="button" class="btn btn-icon-link"><span class="icon-home"></span>&nbsp;Icon Link</button>

OR use Anchor Tags
<a href="#" class="btn">Default</a>
<a href="#" class="btn btn-green">Green</a>
<a href="#" class="btn btn-orange">Orange</a>
<a href="#" class="btn btn-white">White</a>
<a href="#" class="btn btn-icon-link"><span class="icon-home"></span>Icon Link</a>

OR use inputs [type="button"] or [type="submit"]
<input type="button" class="btn" value="Default">
<input type="button" class="btn btn-green" value="Green">
<input type="button" class="btn btn-orange" value="Orange">
<input type="button" class="btn btn-white" value="White">
```

### Button Sizes
Add `.btn-lg`, `.btn-sm`, or `.btn-xs` for additional sizes.

<ul class="list-unstyled">
  <li><button type="button" class="btn btn-lg">Large Button</button>
  <button type="button" class="btn btn-lg btn-orange">Large Button</button></li>
  <li><button type="button" class="btn">Default Button</button>
  <button type="button" class="btn btn-orange">Default Button</button></li>
  <li><button type="button" class="btn btn-sm">Small Button</button>
  <button type="button" class="btn btn-sm btn-orange">Small Button</button></li>
  <li><button type="button" class="btn btn-xs">Extra Small Button</button>
  <button type="button" class="btn btn-xs btn-orange">Extra Small Button</button></li>
</ul>

<p class="segment-subtitle">HTML MARKUP</p>

```html
Large Buttons
<button type="button" class="btn btn-lg">Large Button</button>
<button type="button" class="btn btn-lg btn-orange">Large Button</button>

Default Buttons
<button type="button" class="btn">Default Button</button>
<button type="button" class="btn btn-orange">Default Button</button>

Small Buttons
<button type="button" class="btn btn-sm">Small Button</button>
<button type="button" class="btn btn-sm btn-orange">Small Button</button>

Extra-Small Buttons
<button type="button" class="btn btn-xs">Extra Small Button</button>
<button type="button" class="btn btn-xs btn-orange">Extra Small Button</button>
```
###Block Level Buttons
Create block level buttons – those that span the full width of a parent, by adding `.btn-block`.

<ul class="list-unstyled">
  <li><button type="button" class="btn btn-lg btn-block">Block Level Button</button></li>
  <li><button type="button" class="btn btn-lg btn-block btn-orange">Block Level Button</button></li>
</ul>

<p class="segment-subtitle">HTML MARKUP</p>           

```html
<button type="button" class="btn btn-lg btn-block">Block Level Button</button>
<button type="button" class="btn btn-lg btn-block btn-orange">Block Level Button</button>
```

###Disabled Buttons
Add the disabled attribute to buttons, to make them unclickable. Disabled button-style anchors can be created by adding the `.disabled` utility class to the anchor. If you add the `disabled` attribute to a `<button>`, IE9 and below will render text grey with a white text-shadow. All `disabled` buttons will also be colored with a grey background regardless of `.btn-green` or `.btn-orange` in IE9 and below.

<ul class="list-unstyled list-inline">
  <li><button type="button" class="btn btn-lg" disabled="disabled">Default</button></li>
  <li><button type="button" class="btn btn-lg btn-green" disabled="disabled">Green</button></li>
  <li><button type="button" class="btn btn-lg btn-orange" disabled="disabled">Orange</button></li>
  <li><button type="button" class="btn btn-lg btn-white" disabled="disabled">White</button></li>
</ul>

<p class="segment-subtitle">HTML MARKUP</p>

```html
<button type="button" class="btn btn-lg" disabled="disabled">Default</button>
<button type="button" class="btn btn-lg btn-green" disabled="disabled">Green</button>
<button type="button" class="btn btn-lg btn-orange" disabled="disabled">Orange</button>
<button type="button" class="btn btn-lg btn-white" disabled="disabled">White</button>

Use the '.disabled' classname for anchor tags
<a href="#" class="btn btn-lg disabled">Default</a>
<a href="#" class="btn btn-lg btn-green disabled">Green</a>
<a href="#" class="btn btn-lg btn-orange disabled">Orange</a>
<a href="#" class="btn btn-lg btn-white disabled">White</a>
```
###Button Band
This button is designed to fill the available space with a background color and a white overlay button. The default color is `petrol-blue`, but you can add any [color class](/css#color) to the `button-band` container to customize this. If a light background is chosen, be sure to update the button [option class](#button_options) to a darker version for the best contrast, ie. `btn btn-orange`. Similar to other buttons, you can add the `btn-lg` class (or other [button size classes](#button_sizes)) to the btn element in order to make it a little larger.

<div class="button-band band">
<a class="btn btn-white-transparent dtmcustomrulelink" href="http://www.nxp.com/parametricSearch#/&amp;c=c731_c380_c732&amp;page=1" data-dtmaction="Filter by Parameter Click"><span class="icon-equalizer"></span> Filter ProductName by Parameter</a>
</div>

<div class="bs-callout bs-callout-info">
<h4>Analytics Attributes</h4>
<p>To use this component properly, consider the following modifications:</p>
<ul>
<li>Include class <code>dtmcustomrulelink</code> to anchor tag</li>
<li>Include attribute <code>data-dtmaction</code> with value <code>Filter by Parameter Click</code> to anchor tag</li>
<li>Added to code below</li>
</ul>
<p>Look at the code example:</p>
    </div>
    
<p class="segment-subtitle">HTML MARKUP</p>

```html
<div class="button-band band">
  <a class="btn btn-white-transparent dtmcustomrulelink" href="#nogo" data-dtmaction="Filter by Parameter Click">
    <span class="icon-equalizer"></span>&nbsp;Filter ProductName by Parameter
  </a>
</div>
```