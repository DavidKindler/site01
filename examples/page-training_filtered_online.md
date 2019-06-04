---
title: "Training Results Online"
date: "2019-06-04"
description: "Training SPA Results Online Page"
template: example-template-no-left-nav
leftnav: false
---

<div class="container-fluid iw_section">
      <div class="row iw_row iw_stretch">
        <div class="iw_columns col-lg-12">
          <div class="iw_component">
            <!-- Hero -->
            <div class="hero-container">
              <section class="hero hero-level3" style="background-image: linear-gradient(to right, rgba(0,0,0,.75), rgba(0,0,0,0)), url(//via.placeholder.com/1920x320);">
                <div class="hero-content">
                  <div class="hero-title-container">
                    <h1 class="hero-title display-3">Training</h1>
                  </div>
                  <p class="hero-text lead">Take your technical expertise further with online and in-person instruction</p>
                </div>
              </section>
            </div>
            <!-- App Contents -->
            <div class="app-container">
              <div class="app-row">
                <div class="app-column-left" id="nav_container_column">
                  <div class="nav-container">
                    <div class="nav-clearing">
                      <button class="nav-close" id="js-filter-close">Done</button>
                    </div>
                    <div class="nav-header">
                      <h3 class="nav-heading">Filters</h3>
                      <a class="nav-clear-filters" href="page-training.html">Clear all</a>
                      <ul class="selected-filters" id="filter-path">
                        <li><a class="is-keyword" href="#0">"Embedded Board Solution Manufacturers"</a></li>
                        <li><a href="#0">Single Chip Module</a></li>
                        <li><a href="#0">Linux-NXP</a></li>
                      </ul>
                    </div>
                    <div class="filter-nav-inner">
                      <h5 class="filter-nav-heading">Simple Example</h5>
                      <ul class="filter-nav">
                        <li class="filter-nav-item">
                          <a href="#0">Option 1 is a long option that is wrappin to a second line</a>
                        </li>
                        <li class="filter-nav-item">
                          <a href="#0">Option 2</a>
                        </li>
                        <li class="filter-nav-item">
                          <a href="#0">Option 3</a>
                        </li>
                        <li class="more-filters-item">
                          <a class="more-filters-link" href="#0">More</a>
                        </li>
                      </ul>
                      <h5 class="filter-nav-heading">First Selection</h5>
                      <ul class="filter-nav">
                        <li class="filter-nav-item is-parent">
                          <a href="#0">Main Parent</a>
                        </li>
                        <li class="filter-nav-item is-selected">
                          <span class="selected-label">Selected Section</span>
                          <ul class="filter-nav-sub">
                            <li class="filter-nav-item">
                              <a href="#0">Option 1</a>
                            </li>
                            <li class="filter-nav-item">
                              <a href="#0">Option 2</a>
                            </li>
                            <li class="filter-nav-item">
                              <a href="#0">Option 3</a>
                            </li>
                            <li class="more-filters-item">
                              <a class="more-filters-link" href="#0">More</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                      <h5 class="filter-nav-heading">Second Selection</h5>
                      <ul class="filter-nav">
                        <li class="filter-nav-item is-parent">
                          <a href="#0">Main Parent</a>
                        </li>
                        <li class="filter-nav-item is-parent">
                          <a href="#0">Second Level Parent</a>
                        </li>
                        <li class="filter-nav-item is-selected">
                          <span class="selected-label">Selected Section</span>
                          <ul class="filter-nav-sub">
                            <li class="filter-nav-item">
                              <a href="#0">Option 1</a>
                            </li>
                            <li class="filter-nav-item">
                              <a href="#0">Option 2</a>
                            </li>
                            <li class="filter-nav-item">
                              <a href="#0">Option 3</a>
                            </li>
                            <li class="more-filters-item">
                              <a class="more-filters-link" href="#0">More</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                      <h5 class="filter-nav-heading">Countries</h5>
                      <ul class="filter-nav is-checkbox">
                        <li class="checkbox">
                          <label><input type="checkbox"> United Sates</label>
                        </li>
                        <li class="checkbox">
                          <label><input type="checkbox"> Canada</label>
                        </li>
                        <li class="checkbox">
                          <label><input type="checkbox"> Mexico</label>
                        </li>
                        <li class="checkbox">
                          <label><input type="checkbox"> Belize</label>
                        </li>
                        <li class="checkbox">
                          <label><input type="checkbox"> Guatemala</label>
                        </li>
                        <li class="more-filters-item">
                          <a class="more-filters-link" href="#0">More</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="app-column-right">
                  <!-- empty div that holds landing page, content removed and results loaded in retrieved-results -->
                  <!-- ***provides entry point for each React component, change id/class as needed (except partner-directory-landing) -->
                  <div id="landing-data" class="landing-data training-landing-data"></div>
                  <!-- Results container -->
                  <div id="retrieved-results" class="retrieved-results training-results">
                    <div class="filter-search cool-grey-xxxlight band">
                      <div class="input-group input-group-lg input-group-search">
                        <span class="input-group-btn search-icon">
                          <span class="icon-search"></span>
                        </span>
                        <input type="text" class="form-control search-input" id="input_bordered" placeholder="Narrow results by keyword">
                        <span class="input-group-btn search-btn">
                          <input class="btn btn-search" type="submit" value="Search">
                        </span>
                      </div>
                    </div>
                    <div class="button-container">
                      <a class="filter-return" href="page-training.html">Back Text</a>
                      <a class="filter-toggle" id="js-filter-toggle" href="#0">Filters</a>
                    </div>
                    <div class="retrieved-results-header">
                      <p class="retrieved-results-label"><span class="count">(34)</span>&nbsp;results</p>
                    </div>
                    <ul class="retrieved-items training-items">
                      <!-- On demand -->
                      <li class="retrieved-item">
                        <figure class="item-media">
                          <div class="training-type is-on-demand">
                            <span class="icon-movie2"></span>
                          </div>
                        </figure>
                        <div class="item-body">
                          <h5 class="item-title">
                            <a href="#0">Complement use cases with mobiles and wearables</a>
                          </h5>
                          <ul class="item-metadata metadata">
                            <li class="meta-type"><span class="meta-key">Type: </span><span class="meta-value">On-demand</span></li>
                            <li class="meta-provider"><span class="meta-key">Provider: </span><span class="meta-value">Arrow</span></li>
                            <li class="meta-provider"><span class="meta-key">Duration: </span><span class="meta-value">0:29:32</span></li>
                          </ul>
                          <div class="item-description">
                            <p>Mobile phones and wearables have become a central part of our daily life. The integration of them into contactless schemes are a key enabler to increase users’ convenience.</p>
                          </div>
                        </div>
                      </li>
                      <!-- Webinar -->
                      <li class="retrieved-item">
                        <figure class="item-media">
                          <div class="training-type is-webinar">
                            <div class="date-display">
                              <span class="month">Oct</span>
                              <span class="day">12</span>
                            </div>
                          </div>
                        </figure>
                        <div class="item-body">
                          <h5 class="item-title">
                            <a href="#0">Part I: Exploring the mixed-signal feature on the LPC84x MCU family</a>
                          </h5>
                          <ul class="item-metadata metadata">
                            <li class="meta-time"><span class="meta-key">Time: </span><span class="meta-value">10:00 am</span></li>
                            <li class="meta-type"><span class="meta-key">Type: </span><span class="meta-value">Webinar</span></li>
                            <li class="meta-provider"><span class="meta-key">Provider: </span><span class="meta-value">Arrow</span></li>
                          </ul>
                          <div class="item-description">
                            <p>The LPC84x MCU Family – A versatile, entry-level MCU family with a ‘Swiss Army® knife’ offering of features for your next IoT design.</p>
                          </div>
                        </div>
                      </li>
                      <!-- Course -->
                      <li class="retrieved-item">
                        <figure class="item-media">
                          <div class="training-type is-course">
                            <span class="icon-graduation"></span>
                          </div>
                        </figure>
                        <div class="item-body">
                          <h5 class="item-title">
                            <a href="#0">Build Better Drones with Kinetis V Series MCUs</a>
                          </h5>
                          <ul class="item-metadata metadata">
                            <li class="meta-type"><span class="meta-key">Type: </span><span class="meta-value">Course</span></li>
                            <li class="meta-provider"><span class="meta-key">Provider: </span><span class="meta-value">Arrow</span></li>
                          </ul>
                          <div class="item-description">
                            <p>Learn how Kinetis V Series MCUs and tools can be used to differentiate your drone applications. PMSM and multi motor control can help suppliers provide longer run times with better control. Combine this performance improvement with easy-to-use tools now available in the Kinetis V portfolio to provide a single point solution to your drone’s speed or gimbal control solution.</p>
                          </div>
                        </div>
                      </li>
                      <!-- On demand -->
                      <li class="retrieved-item">
                        <figure class="item-media">
                          <div class="training-type is-on-demand">
                            <span class="icon-movie2"></span>
                          </div>
                        </figure>
                        <div class="item-body">
                          <h5 class="item-title">
                            <a href="#0">Complement use cases with mobiles and wearables</a>
                          </h5>
                          <ul class="item-metadata metadata">
                            <li class="meta-type"><span class="meta-key">Type: </span><span class="meta-value">On-demand</span></li>
                            <li class="meta-provider"><span class="meta-key">Provider: </span><span class="meta-value">Arrow</span></li>
                            <li class="meta-provider"><span class="meta-key">Duration: </span><span class="meta-value">0:29:32</span></li>
                          </ul>
                          <div class="item-description">
                            <p>Mobile phones and wearables have become a central part of our daily life. The integration of them into contactless schemes are a key enabler to increase users’ convenience.</p>
                          </div>
                        </div>
                      </li>
                      <!-- Webinar -->
                      <li class="retrieved-item">
                        <figure class="item-media">
                          <div class="training-type is-webinar">
                            <div class="date-display">
                              <span class="month">Oct</span>
                              <span class="day">12</span>
                            </div>
                          </div>
                        </figure>
                        <div class="item-body">
                          <h5 class="item-title">
                            <a href="#0">Part I: Exploring the mixed-signal feature on the LPC84x MCU family</a>
                          </h5>
                          <ul class="item-metadata metadata">
                            <li class="meta-time"><span class="meta-key">Time: </span><span class="meta-value">10:00 am</span></li>
                            <li class="meta-type"><span class="meta-key">Type: </span><span class="meta-value">Webinar</span></li>
                            <li class="meta-provider"><span class="meta-key">Provider: </span><span class="meta-value">Arrow</span></li>
                          </ul>
                          <div class="item-description">
                            <p>The LPC84x MCU Family – A versatile, entry-level MCU family with a ‘Swiss Army® knife’ offering of features for your next IoT design.</p>
                          </div>
                        </div>
                      </li>
                      <!-- Course -->
                      <li class="retrieved-item">
                        <figure class="item-media">
                          <div class="training-type is-course">
                            <span class="icon-graduation"></span>
                          </div>
                        </figure>
                        <div class="item-body">
                          <h5 class="item-title">
                            <a href="#0">Build Better Drones with Kinetis V Series MCUs</a>
                          </h5>
                          <ul class="item-metadata metadata">
                            <li class="meta-type"><span class="meta-key">Type: </span><span class="meta-value">Course</span></li>
                            <li class="meta-provider"><span class="meta-key">Provider: </span><span class="meta-value">Arrow</span></li>
                          </ul>
                          <div class="item-description">
                            <p>Learn how Kinetis V Series MCUs and tools can be used to differentiate your drone applications. PMSM and multi motor control can help suppliers provide longer run times with better control. Combine this performance improvement with easy-to-use tools now available in the Kinetis V portfolio to provide a single point solution to your drone’s speed or gimbal control solution.</p>
                          </div>
                        </div>
                      </li>
                      <!-- On demand -->
                      <li class="retrieved-item">
                        <figure class="item-media">
                          <div class="training-type is-on-demand">
                            <span class="icon-movie2"></span>
                          </div>
                        </figure>
                        <div class="item-body">
                          <h5 class="item-title">
                            <a href="#0">Complement use cases with mobiles and wearables</a>
                          </h5>
                          <ul class="item-metadata metadata">
                            <li class="meta-type"><span class="meta-key">Type: </span><span class="meta-value">On-demand</span></li>
                            <li class="meta-provider"><span class="meta-key">Provider: </span><span class="meta-value">Arrow</span></li>
                            <li class="meta-provider"><span class="meta-key">Duration: </span><span class="meta-value">0:29:32</span></li>
                          </ul>
                          <div class="item-description">
                            <p>Mobile phones and wearables have become a central part of our daily life. The integration of them into contactless schemes are a key enabler to increase users’ convenience.</p>
                          </div>
                        </div>
                      </li>
                      <!-- Webinar -->
                      <li class="retrieved-item">
                        <figure class="item-media">
                          <div class="training-type is-webinar">
                            <div class="date-display">
                              <span class="month">Oct</span>
                              <span class="day">12</span>
                            </div>
                          </div>
                        </figure>
                        <div class="item-body">
                          <h5 class="item-title">
                            <a href="#0">Part I: Exploring the mixed-signal feature on the LPC84x MCU family</a>
                          </h5>
                          <ul class="item-metadata metadata">
                            <li class="meta-time"><span class="meta-key">Time: </span><span class="meta-value">10:00 am</span></li>
                            <li class="meta-type"><span class="meta-key">Type: </span><span class="meta-value">Webinar</span></li>
                            <li class="meta-provider"><span class="meta-key">Provider: </span><span class="meta-value">Arrow</span></li>
                          </ul>
                          <div class="item-description">
                            <p>The LPC84x MCU Family – A versatile, entry-level MCU family with a ‘Swiss Army® knife’ offering of features for your next IoT design.</p>
                          </div>
                        </div>
                      </li>
                      <!-- Course -->
                      <li class="retrieved-item">
                        <figure class="item-media">
                          <div class="training-type is-course">
                            <span class="icon-graduation"></span>
                          </div>
                        </figure>
                        <div class="item-body">
                          <h5 class="item-title">
                            <a href="#0">Build Better Drones with Kinetis V Series MCUs</a>
                          </h5>
                          <ul class="item-metadata metadata">
                            <li class="meta-type"><span class="meta-key">Type: </span><span class="meta-value">Course</span></li>
                            <li class="meta-provider"><span class="meta-key">Provider: </span><span class="meta-value">Arrow</span></li>
                          </ul>
                          <div class="item-description">
                            <p>Learn how Kinetis V Series MCUs and tools can be used to differentiate your drone applications. PMSM and multi motor control can help suppliers provide longer run times with better control. Combine this performance improvement with easy-to-use tools now available in the Kinetis V portfolio to provide a single point solution to your drone’s speed or gimbal control solution.</p>
                          </div>
                        </div>
                      </li>
                      <!-- On demand -->
                      <li class="retrieved-item">
                        <figure class="item-media">
                          <div class="training-type is-on-demand">
                            <span class="icon-movie2"></span>
                          </div>
                        </figure>
                        <div class="item-body">
                          <h5 class="item-title">
                            <a href="#0">Complement use cases with mobiles and wearables</a>
                          </h5>
                          <ul class="item-metadata metadata">
                            <li class="meta-type"><span class="meta-key">Type: </span><span class="meta-value">On-demand</span></li>
                            <li class="meta-provider"><span class="meta-key">Provider: </span><span class="meta-value">Arrow</span></li>
                            <li class="meta-provider"><span class="meta-key">Duration: </span><span class="meta-value">0:29:32</span></li>
                          </ul>
                          <div class="item-description">
                            <p>Mobile phones and wearables have become a central part of our daily life. The integration of them into contactless schemes are a key enabler to increase users’ convenience.</p>
                          </div>
                        </div>
                      </li>
                      <!-- Webinar -->
                      <li class="retrieved-item">
                        <figure class="item-media">
                          <div class="training-type is-webinar">
                            <div class="date-display">
                              <span class="month">Oct</span>
                              <span class="day">12</span>
                            </div>
                          </div>
                        </figure>
                        <div class="item-body">
                          <h5 class="item-title">
                            <a href="#0">Part I: Exploring the mixed-signal feature on the LPC84x MCU family</a>
                          </h5>
                          <ul class="item-metadata metadata">
                            <li class="meta-time"><span class="meta-key">Time: </span><span class="meta-value">10:00 am</span></li>
                            <li class="meta-type"><span class="meta-key">Type: </span><span class="meta-value">Webinar</span></li>
                            <li class="meta-provider"><span class="meta-key">Provider: </span><span class="meta-value">Arrow</span></li>
                          </ul>
                          <div class="item-description">
                            <p>The LPC84x MCU Family – A versatile, entry-level MCU family with a ‘Swiss Army® knife’ offering of features for your next IoT design.</p>
                          </div>
                        </div>
                      </li>
                      <!-- Course -->
                      <li class="retrieved-item">
                        <figure class="item-media">
                          <div class="training-type is-course">
                            <span class="icon-graduation"></span>
                          </div>
                        </figure>
                        <div class="item-body">
                          <h5 class="item-title">
                            <a href="#0">Build Better Drones with Kinetis V Series MCUs</a>
                          </h5>
                          <ul class="item-metadata metadata">
                            <li class="meta-type"><span class="meta-key">Type: </span><span class="meta-value">Course</span></li>
                            <li class="meta-provider"><span class="meta-key">Provider: </span><span class="meta-value">Arrow</span></li>
                          </ul>
                          <div class="item-description">
                            <p>Learn how Kinetis V Series MCUs and tools can be used to differentiate your drone applications. PMSM and multi motor control can help suppliers provide longer run times with better control. Combine this performance improvement with easy-to-use tools now available in the Kinetis V portfolio to provide a single point solution to your drone’s speed or gimbal control solution.</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <!-- Mobile Pagination: Presentation purposes only -->
                    <nav class="text-center visible-xs" aria-label="Page navigation">
                      <ul class="pagination">
                        <li class="disabled">
                          <a href="#" aria-label="Previous">
                            <span aria-hidden="true">Previous</span>
                          </a>
                        </li>
                        <li><a href="#">1</a></li>
                        <li class="active"><a href="#">2 <span class="sr-only">(current)</span></a></li>
                        <li><a href="#">3</a></li>
                        <li>
                          <a href="#" aria-label="Next">
                            <span aria-hidden="true">Next</span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                    <!-- Tablet Pagination -->
                    <nav class="text-center visible-sm" aria-label="Page navigation">
                      <ul class="pagination">
                        <li class="disabled">
                          <a href="#" aria-label="Previous">
                            <span aria-hidden="true">Previous</span>
                          </a>
                        </li>
                        <li><a href="#">1</a></li>
                        <li class="active"><a href="#">2 <span class="sr-only">(current)</span></a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">4</a></li>
                        <li><a href="#">5</a></li>
                        <li>
                          <a href="#" aria-label="Next">
                            <span aria-hidden="true">Next</span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                    <!-- Small Desktop -->
                    <nav class="text-center visible-md" aria-label="Page navigation">
                      <ul class="pagination">
                        <li class="disabled">
                          <a href="#" aria-label="Previous">
                            <span aria-hidden="true">Previous</span>
                          </a>
                        </li>
                        <li><a href="#">1</a></li>
                        <li class="active"><a href="#">2 <span class="sr-only">(current)</span></a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">4</a></li>
                        <li><a href="#">5</a></li>
                        <li><a href="#">6</a></li>
                        <li><a href="#">7</a></li>
                        <li>
                          <a href="#" aria-label="Next">
                            <span aria-hidden="true">Next</span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                    <!-- Desktop Pagination -->
                    <nav class="text-center visible-lg" aria-label="Page navigation">
                      <ul class="pagination">
                        <li class="disabled">
                          <a href="#" aria-label="Previous">
                            <span aria-hidden="true">Previous</span>
                          </a>
                        </li>
                        <li><a href="#">1</a></li>
                        <li class="active"><a href="#">2 <span class="sr-only">(current)</span></a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">4</a></li>
                        <li><a href="#">5</a></li>
                        <li><a href="#">6</a></li>
                        <li><a href="#">7</a></li>
                        <li><a href="#">8</a></li>
                        <li><a href="#">9</a></li>
                        <li><a href="#">10</a></li>
                        <li><a href="#">11</a></li>
                        <li>
                          <a href="#" aria-label="Next">
                            <span aria-hidden="true">Next</span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>