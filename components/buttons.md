---
title: "Buttons"
date: "2019-06-07"
description: "Buttons component"
---

The buttons component has many available button classes to quickly create a styled button. If there are multiple buttons with equal importance they should all be the standard grey button color. If one action is most important, that button should be the orange button color with the others being button grey color.

`<button>`, `<a>`, `<input type="button">` or `<input type="submit">` elements can all be styled as buttons with the `.btn classname`. Additional classes: `.btn-green`, `.btn-orange`, `.btn-white`, `.btn-icon-link`, `.btn-lg`, `.btn-sm`, `.btn-xs`, `.btn-block` and `.disabled` can all be used to style various types of buttons.

<div class="bc-example">
                  <div class="row">
                     <div class="col-xs-12 bottom15">
                        <button type="button" class="btn">Default</button>
                        <button type="button" class="btn btn-green">Green</button>
                        <button type="button" class="btn btn-orange">Orange</button>
                        <button type="button" class="btn btn-white">White</button>
                        <button type="button" class="btn btn-icon-link">
                        <span class="icon-home"> Icon Link
                        </span></button>
                     </div>
                     <!-- end col -->
                     <div class="col-xs-12 bottom15">
                        <button type="button" class="btn btn-lg">Large Button</button>
                        <button type="button" class="btn btn-orange btn-lg">Large Button</button>
                     </div>
                     <!-- end col -->
                     <div class="col-xs-12 bottom15">
                        <button type="button" class="btn btn-sm">Small Button</button>
                        <button type="button" class="btn btn-orange btn-sm">Small Button</button>
                     </div>
                     <!-- end col -->
                     <div class="col-xs-12 bottom15">
                        <button type="button" class="btn btn-xs">Extra-Small Button</button>
                        <button type="button" class="btn btn-orange btn-xs">Extra-Small Button</button>
                     </div>
                     <!-- end col -->
                     <div class="col-xs-12 bottom15">
                        <button type="button" class="btn btn-block">Block Level Button</button>
                        <button type="button" class="btn btn-orange btn-block">Block Level Button</button>
                     </div>
                     <!-- end col -->
                     <div class="col-xs-12">
                        <button type="button" class="btn" disabled="disabled">Default</button>
                        <button type="button" class="btn btn-green" disabled="disabled">Green</button>
                        <button type="button" class="btn btn-orange" disabled="disabled">Orange</button>
                        <button type="button" class="btn btn-white" disabled="disabled">White</button>
                     </div>
                     <!-- end col -->
                  </div>
                  <!-- end row -->
               </div>