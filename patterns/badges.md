---
title: "Badges"
date: "2019-05-07"
---
<div class="mt1 alert alert-info text-center">
  <div class="row ">
    <div class="col-md-3"> <strong>IT driven component</strong> </div>
    <div class="col-md-3 "> <span class="icon-cancel-circle22 alert-danger"></span> High Level Page Component </div>
    <div class="col-md-3 "> <span class="icon-checkmark-circle2 alert-success"></span> Summary Page Component </div>
    <div class="col-md-3  "> <strong>Last Revision Date:</strong><br>
      <script>document.write(document.lastModified);</script>03/26/2019 13:06:53 CST </div>
  </div>
</div>

#Badges

Easily highlight new or unread items by adding a `span class="badge"` to links, Bootstrap navs, and more.

<ul class="nav-piped is-large">
<li><a href="#basic">Basic example</a></li>
<li><a href="#active">Active nav states</a></li>
<li><a href="#notifications">Notifications</a></li>
<li><a href="#headerUsage">Header usage</a></li>
</ul>

<a href="#">Inbox <span class="badge">42</span></a>

<button class="btn btn-primary" type="button">Messages <span class="badge">4</span></button>

<p class="segment-subtitle">HTML Markup: Badges</p>

```html
<a href="#">Inbox <span class="badge">42</span></a>

<button class="btn btn-primary" type="button">
  Messages <span class="badge">4</span>
</button>
```

##Adapts to active nav states
Built-in styles are included for placing badges in active states in pill navigations.

<ul class="nav nav-pills" role="tablist">
  <li role="presentation" class="active">
    <a href="#">Home <span class="badge">42</span></a></li>
  <li role="presentation">
    <a href="#">Profile</a>
  </li>
  <li role="presentation">
    <a href="#">Messages <span class="badge">3</span></a>
  </li>
</ul>

<p class="segment-subtitle">HTML Markup: Badges</p>

```html
<ul class="nav nav-pills" role="tablist">
  <li role="presentation" class="active"><a href="#">Home <span class="badge">42</span></a></li>
  <li role="presentation"><a href="#">Profile</a></li>
  <li role="presentation"><a href="#">Messages <span class="badge">3</span></a></li>
</ul>
```

##Notification badges
Used for Technical Subscriptions, the notification badge is presented to let users know there are updates that available for viewing. The placement of the badge should help direct the user to the appropriate place to view these notifications.

<a href="#0">This is a standard notification&nbsp;<span class="badge badge-notification"></span></a>

<p class="segment-subtitle">HTML Markup: Badges</p>

```html
<a href="#0">...&nbsp;<span class="badge badge-notification"></span></a>
<a href="#0">...&nbsp;<span class="badge badge-notification">52</span></a>
```

##Header usage
Example of notifications presented in the header dropdown menu. Add the `.has-notification` class to the `span.user-icon` as shown in the code below.

<div class="pb2" id="header">
<ul class="list-inline pull-right" id="top-nav">
  <li>
    <div class="dropdown" id="languages">
      <a aria-expanded="false" data-toggle="dropdown" href="#" id="languageDropdownMenu"><span class="icon-globe2"></span><span class="currentSiteLang"><span>EN</span><span>ENGLISH</span></span><span class="icon-angle-down"></span></a>
      <ul aria-labelledby="languageDropdownMenu" class="dropdown-menu dropdown-menu-right" id="language-actions" role="menu">
        <li class="select-lang" role="presentation">Select language</li>
        <li role="presentation">
          <a class="lang-en selected" href="//www.nxp.com/?lang=en&amp;lang_cd=en&amp;" role="menuitem"><span class="icon-earth2 pull-left"></span><span class="icon-checkmark3 fsl-orange-text pull-right"></span>ENGLISH</a>
        </li>
        <li role="presentation">
          <a class="lang-zh" href="//www.nxp.com/cn/?lang=cn&amp;lang_cd=zh-Hans&amp;" role="menuitem"><span class="flag flag-zh pull-left"></span>中文</a>
        </li>
        <li role="presentation">
          <a class="lang-ja" href="//www.nxp.com/jp/?lang=jp&amp;lang_cd=jp&amp;" role="menuitem"><span class="flag flag-ja pull-left"></span>日本語</a>
        </li>
        <li role="presentation">
          <a class="lang-ko" href="//www.nxp.com/ko/?lang=ko&amp;lang_cd=ko&amp;" role="menuitem"><span class="flag flag-ko pull-left"></span>한국어</a>
        </li>
      </ul>
    </div>
  </li>
  <li>
    <div class="shoppingCartNav" id="shopping-cart">
      <a href="//www.nxp.com/webapp/ecommerce.show_cart.framework"><span class="icon-cart4"></span><span class="shoppingCartNav-label">Cart</span></a>
    </div>
  </li>
</ul>
</div>

<p class="segment-subtitle">HTML Markup: Header usage</p>

```html
<div id="header">
  ...

  <ul class="list-inline pull-right" id="top-nav">
    <li>
      <div class="dropdown open" id="login-block">
        <a aria-expanded="true" data-toggle="dropdown" href="#" id="userDropDownMenu">
          <span class="icon-user has-notification"></span>&nbsp;<span class="ctHidden" id="userName">Daniel</span>&nbsp;<span class="icon-arrow-down2"></span></a>

        <ul aria-labelledby="userDropdownMenu" class="dropdown-menu dropdown-menu-right dtmHeaderLogin" id="user-actions" role="menu">
          <li role="presentation">
            <a href="" role="menuitem">My Account&nbsp;<span class="badge badge-notification"></span></a>
          </li>
          <li role="presentation">...</li>
          <li role="presentation">...</li>
        </ul>
      </div>
    </li>
    <li>
      <div class="dropdown" id="languages">...</div>
    </li>
    <li>
      <div class="shoppingCartNav" id="shopping-cart">...</div>
    </li>
  </ul>
</div>
```