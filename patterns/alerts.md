---
title: "Alerts"
date: "2019-05-07"
description: "Provide basic alert messages"
aside: false
---
<div class="mt1 alert alert-info text-center">
  <div class="row ">
    <div class="col-md-3">
      <strong>Web Pub driven component</strong>
    </div>
    <div class="col-md-3 ">
      <span class="icon-cancel-circle22 alert-success"></span> High Level Page Component </div>
    <div class="col-md-3 ">
      <span class="icon-checkmark-circle2 alert-success"></span> Summary Page Component </div>
    <div class="col-md-3  ">
      <strong>Last Revision Date:</strong>
      <br>
      <script> document.write(document.lastModified);
      </script>04/30/2019 13:07:06 CST
    </div>
  </div>
</div>

#Alerts
Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages. Wrap any text and an optional dismiss button in `.alert` and one of the four contextual classes (e.g., `.alert-success`) for basic alert messages.

##No default class
Alerts don't have default classes, only base and modifier classes. A default gray alert doesn't make too much sense, so you're required to specify a type via contextual class. Choose from success, info, warning, or danger.

<div class="alert alert-success" role="alert">
<p><strong>Well done!</strong> You successfully read this important alert message.</p>
</div>
<div class="alert alert-info" role="alert">
<p><strong>Heads up!</strong> This alert needs your attention, but it's not super important.</p>
</div>
<div class="alert alert-warning" role="alert">
<p><strong>Warning!</strong> Better check yourself, you're not looking too good.</p>
</div>
<div class="alert alert-danger" role="alert">
<p><strong>Oh snap!</strong> Change a few things up and try submitting again.</p>
</div>

<p class="segment-subtitle">HTML Markup: Alerts</p>

```html
<div class="alert alert-success" role="alert"><p>...</p></div>
<div class="alert alert-info" role="alert"><p>...</p></div>
<div class="alert alert-warning" role="alert"><p>...</p></div>
<div class="alert alert-danger" role="alert"><p>...</p></div>
```




##Dismissable alerts
Build on any alert by adding an optionl `.alert-dismissible` class and a close button. When using a `.close` button, it must be the first child of the `.alert-dismissible` and no text content may come before it in the markup. Closing an alert removes it from the DOM.

To have your alerts use animation when closing, make sure they have the `.fade` and `.in` classes already applied to them.

<div class="alert alert-info alert-dismissible fade in" role="alert">
<button class="close" type="button" data-dismiss="alert" aria-label="close"><span aria-hidden="true">×</span></button>
<p><strong>Heads up!</strong> This alert needs your attention, but it's not super important.</p>
</div>

Dismissable example with icon using a `media` component:
<div class="alert alert-success fade in" role="alert">
                  <button class="close" type="button" data-dismiss="alert" aria-label="close"><span aria-hidden="true">×</span></button>
                  <div class="media">
                    <div class="media-left">
                      <span class="icon-checkmark-circle2"></span>
                    </div>
                    <div class="media-body">
                      <p><strong>Well done!</strong> You successfully read this <a href="#0" class="alert-link">important alert message</a>.</p>
                    </div>
                  </div>
                </div>

<p class="segment-subtitle">HTML Markup: Dismissible alert</p>

```html
<div class="alert alert-info alert-dismissible fade in" role="alert">
  <button class="close" type="button" data-dismiss="alert" aria-label="close"><span aria-hidden="true">&times;</span></button>
  <p>...</p>
</div>

<div class="alert alert-success fade in" role="alert">
  <button class="close" type="button" data-dismiss="alert" aria-label="close"><span aria-hidden="true">&times;</span></button>
  <div class="media">
    <div class="media-left">
      <span class="icon-checkmark-circle2"></span>
    </div>
    <div class="media-body">
      <p>... <a href="#0" class="alert-link">...</a>.</p>
    </div>
  </div>
</div>
```

## Links in alerts
Use the `.alert-link` utility class to quickly provide matching colored links within any alert.

<div class="alert alert-success" role="alert">
  <p><strong>Well done!</strong> You successfully read this <a class="alert-link" href="#0">important alert message</a>.</p>
</div>
<div class="alert alert-info" role="alert">
  <p><strong>Heads up!</strong> This alert <a href="#0" class="alert-link">needs your attention</a>, but it's not super important.</p>
</div>
<div class="alert alert-warning" role="alert">
  <p><strong>Warning!</strong> Better check yourself, you're <a href="#0" class="alert-link">not looking too good</a>.</p>
</div>
<div class="alert alert-danger" role="alert">
  <p><strong>Oh snap!</strong> <a href="#0" class="alert-link">Change a few things up</a> and try submitting again.</p>
</div>

<p class="segment-subtitle">HTML Markup: Link in alerts</p>

```html
<div class="alert alert-success" role="alert">
  <p><a href="#" class="alert-link">...</a></p>
</div>
<div class="alert alert-info" role="alert">
  <p><a href="#" class="alert-link">...</a></p>
</div>
<div class="alert alert-warning" role="alert">
  <p><a href="#" class="alert-link">...</a></p>
</div>
<div class="alert alert-danger" role="alert">
  <p><a href="#" class="alert-link">...</a></p>
</div>
```

##Icons in alerts
You can add an icon inside the Alert message by using the Bootstrap `media` component. Use a span with an icon class (ie. `icon-info`) within the `media-left` container for best results.

<div class="alert alert-success" role="alert">
    <div class="media">
      <div class="media-left">
        <span class="icon-checkmark-circle2"></span>
      </div>
      <div class="media-body">
        <p><strong>Well done!</strong> You successfully read this <a href="#0" class="alert-link">important alert message</a>.</p>
      </div>
    </div>
  </div>
  <div class="alert alert-info" role="alert">
    <div class="media">
      <div class="media-left">
        <span class="icon-info2"></span>
      </div>
      <div class="media-body">
        <p><strong>Heads up!</strong> This alert <a href="#0" class="alert-link">needs your attention</a>, but it's not super important.</p>
      </div>
    </div>
  </div>
  <div class="alert alert-warning" role="alert">
    <div class="media">
      <div class="media-left">
        <span class="icon-notification2"></span>
      </div>
      <div class="media-body">
        <p><strong>Warning!</strong> Better check yourself, you're <a href="#0" class="alert-link">not looking too good</a>.</p>
      </div>
    </div>
  </div>
  <div class="alert alert-danger" role="alert">
    <div class="media">
      <div class="media-left">
        <span class="icon-warning2"></span>
      </div>
      <div class="media-body">
        <p><strong>Oh snap!</strong> <a href="#0" class="alert-link">Change a few things up</a> and try submitting again.</p>
      </div>
    </div>
  </div>

<p class="segment-subtitle">HTML Markup: Link in alerts</p>

```html
<div class="alert alert-success" role="alert">
  <div class="media">
    <div class="media-left">
      <span class="icon-checkmark-circle2"></span>
    </div>
    <div class="media-body">
      <p>...</p>
    </div>
  </div>
</div>

<div class="alert alert-info" role="alert">
  <div class="media">
    <div class="media-left">
      <span class="icon-info2"></span>
    </div>
    <div class="media-body">
      <p>...</p>
    </div>
  </div>
</div>

<div class="alert alert-warning" role="alert">
  <div class="media">
    <div class="media-left">
      <span class="icon-notification2"></span>
    </div>
    <div class="media-body">
      <p>...</p>
    </div>
  </div>
</div>

<div class="alert alert-danger" role="alert">
  <div class="media">
    <div class="media-left">
      <span class="icon-warning2"></span>
    </div>
    <div class="media-body">
      <p>...</p>
    </div>
  </div>
</div>
```

###Using SVG Icons
You can use SVG icons in the Alert using the same method described above. The SVG should have a width and height set, but no need to set a fill color as it should inherit that from the text. Some additional spacing helpers may be necessary for best display.

<div class="alert alert-info" role="alert">
  <div class="media">
    <div class="media-left">
      <svg width="30" height="30" viewBox="0 0 64 61" xmlns="http://www.w3.org/2000/svg">
        <path d="M58,0 L6,0 C2.7,0 0,2.7 0,6 L0,38 C0,41.3 2.7,44 6,44 L16,44 L16,60 L35.2,44 L58,44 C61.3,44 64,41.3 64,38 L64,6 C64,2.7 61.3,0 58,0 L58,0 Z M12,28 L28,28 L28,32 L12,32 L12,28 Z M12,20 L44,20 L44,24 L12,24 L12,20 Z M12,12 L52,12 L52,16 L12,16 L12,12 Z"></path>
      </svg>
    </div>
    <div class="media-body">
      <p>See updates for your followed products at <a class="alert-link" href="page-my-updates.html#myUpdates">Documentation and Tools updates &gt; My Updates</a></p>
    </div>
  </div>
</div>

<p class="segment-subtitle">HTML Markup: SVG Icons in Alert</p>

```hrml
<div class="alert alert-success" role="alert">
  <div class="media">
    <div class="media-left">
      <svg width="30" height="30" viewBox="0 0 64 61" xmlns="http://www.w3.org/2000/svg">...</svg>
    </div>
    <div class="media-body">
      <p>...<a class="alert-link" href="#">...</a>.</p>
    </div>
  </div>
</div>
```