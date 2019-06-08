---
title: "Breadcrumbs"
date: "2019-06-07"
---

<div class="mt1 alert alert-info text-center">
              <div class="row ">
                <div class="col-md-3">
                  <strong>IT driven component</strong>
                </div>
                <div class="col-md-3 ">
                  <span class="icon-cancel-circle22 alert-danger"></span> High Level Page Component
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

#Breadcrumbs
Updated Feb 15, 2017: The breadcrumb component has been modified to be placed in proximity to the Global Nav. This is the first step in adding additional drop-down functionality for each Breadcrumb node. Additionally, the Email & Share Icons have been moved to the [Page Headline](/components/page-headline) Component.

<p class="segment-subtitle">HTML markup example</p>

```html
<div class="bc-container clearfix">
  <ul class="bc">
    <li><a href="#"><span class="icon-home"></span></a></li>
    <li>
      <div class="dropdown">
        <a href="#" id="bc_1" data-toggle="dropdown" class="dropdown-toggle">First Link</a>
        <ul class="dropdown-menu dropdown-menu-left" role="menu" aria-labelledby="bc_1">
          <li role="presentation"><a role="menuitem" href="#">Option 1</a></li>
          <li role="presentation"><a role="menuitem" href="#">Option 2</a></li>
        </ul>
      </div>
    </li>
    <li>
      <div class="dropdown">
        <a href="#" id="bc_2" data-toggle="dropdown" class="dropdown-toggle">Second Link</a>
        <ul class="dropdown-menu dropdown-menu-left" role="menu" aria-labelledby="bc_2">
          <li role="presentation"><a role="menuitem" href="#">Option 1</a></li>
          <li role="presentation"><a role="menuitem" href="#">Option 2</a></li>
        </ul>
      </div>
    </li>
    <li class="active">Final Link</li>
  </ul>
</div>
```