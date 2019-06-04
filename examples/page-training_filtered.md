---
title: "Training Results"
date: "2019-06-04"
description: "Training SPA Results Page"
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
                      <a class="filter-return" href="page-training.html">Training home</a>
                      <a class="filter-toggle" id="js-filter-toggle" href="#0">Filters</a>
                    </div>
                    <div class="card1 has-two is-tertiary classroom-results-short">
                      <div class="retrieved-results-header">
                        <h3 class="retrieved-results-label">Upcoming classroom training <span class="count">(34)</span></h3>
                        <!-- <div class="sort-results">
                          <span>Sorted by</span>
                          <ul class="nav-piped">
                            <li class="is-active">Popularity</li>
                            <li><a href="#0">Relevance</a></li>
                          </ul>
                        </div> -->
                      </div>
                      <div class="card1-list">
                        <div class="card1-column">
                          <div class="card1-item">
                            <div class="media-flex-item is-single">
                              <figure class="media-flex-media is-align-start is-left">
                                <div class="date-display">
                                  <span class="month">Oct</span>
                                  <span class="day">17</span>
                                </div>
                              </figure>
                              <div class="media-flex-body">
                                <h5 class="media-flex-heading"><a href="#0">i.MX 8/8X Overview</a></h5>
                                <ul class="metadata item-metadata training-meta-list nav-piped">
                                  <li class="meta-event">
                                    <span class="meta-value">Partner Event</span>
                                  </li>
                                  <li class="meta-location">
                                    <span class="meta-value">Minneapolis, MN</span>
                                  </li>
                                </ul>
                                <ul class="metadata item-metadata training-meta-list">
                                  <li class="meta-time">
                                    <span class="meta-key">Time: </span>
                                    <span class="meta-value">5:00pm</span>
                                  </li>
                                  <li class="meta-type"><span class="meta-key">Type: </span><span class="meta-value">Panel</span></li>
                                  <!-- if Provider == NXP, do not display -->
                                  <li class="meta-provider">
                                    <span class="meta-key">Provider: </span>
                                    <span class="meta-value">Arrow</span>
                                  </li>
                                </ul>
                                <div class="media-flex-text">
                                  <p class="mb0">Built with a high-level integration to support graphics, video, image processing, vision, audio and voice functions, the i.MX 8 series is ideal for Automotive applications. Join this session to learn about the i.MX 8/8X families that are comprised of common…</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!-- Repeat .card1-column for two column layout -->
                        <div class="card1-column">
                          <div class="card1-item">
                            <div class="media-flex-item is-single">
                              <figure class="media-flex-media is-align-start is-left">
                                <div class="date-display">
                                  <span class="month">Oct</span>
                                  <span class="day">17</span>
                                </div>
                              </figure>
                              <div class="media-flex-body">
                                <h5 class="media-flex-heading"><a href="#0">MCUXpresso Software and Tools</a></h5>
                                <ul class="metadata item-metadata training-meta-list nav-piped">
                                  <li class="meta-event"><span class="meta-value">Tech Days Minnesota</span></li>
                                  <li class="meta-location"><span class="meta-value">Minneapolis, MN</span></li>
                                </ul>
                                <ul class="metadata item-metadata training-meta-list">
                                  <li class="meta-time"><span class="meta-key">Time: </span><span class="meta-value">9:00am</span></li>
                                  <li class="meta-type"><span class="meta-key">Type: </span><span class="meta-value">Workshop</span></li>
                                  <!-- if Provider == NXP, do not display -->
                                  <!-- <li class="meta-provider"><span class="meta-key">Provider: </span><span class="meta-value">Arrow</span></li> -->
                                </ul>
                                <div class="media-flex-text">
                                  <p class="mb0">This hands-on session introduces the MCUXpresso suite of tools (IDE, SDK, Config Tools) and shows users how to rapidly start development with thousands of Kinetis and LPC MCUs based on the Arm® Cortex-M core. Using either Kinetis, LPC or...</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="mt1">
                        <a href="/page-training_filtered_classroom.html" class="cta">See more classroom training</a>
                      </div>
                    </div>
                    <div class="retrieved-results-header">
                      <h3 class="retrieved-results-label">Online training <span class="count">(34)</span></h3>
                    </div>
                    <ul class="retrieved-items training-items online-training-items">
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
                            <li class="meta-time"><span class="meta-key">Time: </span><span class="meta-value">10:00am</span></li>
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
                            <li class="meta-time"><span class="meta-key">Time: </span><span class="meta-value">10:00am</span></li>
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
                            <li class="meta-time"><span class="meta-key">Time: </span><span class="meta-value">10:00am</span></li>
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
                            <li class="meta-time"><span class="meta-key">Time: </span><span class="meta-value">10:00am</span></li>
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
                      <!-- Classroom -->
                      <!-- <li class="retrieved-item">
                        <figure class="item-media">
                          <div class="training-type is-classroom">
                            <div class="date-display">
                              <span class="month">Oct</span>
                              <span class="day">17</span>
                            </div>
                          </div>
                        </figure>
                        <div class="item-body">
                          <h5 class="item-title">
                            <a href="#0">Linux® SDK for QorIQ™ Processors</a>
                          </h5>
                          <div class="item-description">
                            <p>This Linux software development kit (SDK) includes board support packages supporting QorIQ™ and select PowerQUICC™ Power Architecture Technology devices. Linux board support packages (BSPs) for NXP™ Silicon are tested, certified and frozen, ensuring a fully operational tool chain, kernel and board specific modules that are ready to use together within a fixed configuration for specific hardware reference platforms.</p>
                          </div>
                          <ul class="item-metadata metadata nav-piped">
                            <li class="meta-event">Tech Days Minnesota</li>
                            <li class="meta-location">Minneapolis, MN</li>
                          </ul>
                          <ul class="item-metadata metadata">
                            <li class="meta-time"><span class="meta-key">Time: </span><span class="meta-value">9:00am</span></li>
                            <li class="meta-type"><span class="meta-key">Type: </span><span class="meta-value">Panel</span></li>
                            <li class="meta-provider"><span class="meta-key">Provider: </span><span class="meta-value">Arrow</span></li>
                          </ul>
                        </div>
                      </li> -->
                      <!-- Kitchen Sink -->
                      <!-- <li class="retrieved-item">
                        <figure class="item-image">
                          <img src="" alt="">
                        </figure>
                        <div class="item-body">
                          <h5 class="item-title">
                            <a href="#0">Kitchen sink result item: one of everything</a>
                          </h5>
                          <div class="item-price">
                            <p>$395 - $4,995 USD</p>
                          </div>
                          <div class="item-description">
                            <p>CodeWarrior™ Development Studio for ColdFire Architectures v7.2 is a single, integrated tool suite designed to get you on the design fast track with ColdFire V2, V3, V4 and V4e members of the NXP Controller Continuum. By combining state-of-the-art debugging technology with the simplicity of a robust development environment, CodeWarrior Development Studio takes source-level debugging and embedded application development to a new level.</p>
                          </div>
                          <ul class="item-metadata metadata">
                            <li class="meta-date">Feb 12, 2018</li>
                            <li class="meta-file"><abbr title="Zipped file">zip</abbr></li>
                            <li class="meta-size">753 kb</li>
                          </ul>
                          <div class="item-resources">
                            <span class="resource-label">Available:</span>
                            <ul class="resource-list nav-piped">
                              <li><a href="#0">Professional Services</a></li>
                              <li><a href="#0">Premium Support</a></li>
                            </ul>
                          </div>
                        </div>
                        -options? better name for column
                        <div class="item-options">
                          <button class="btn btn-sm btn-primary btn-buy"><span class="icon-cart"></span>&nbsp;Buy Options</button>
                          <button class="btn btn-sm btn-download is-multiple" data-toggle="collapse" data-target="#kitchenSublist" aria-expanded="false" aria-controls="#kitchenSublist">Downloads <span>(8)</span></button>
                          <button class="btn btn-sm btn-download">Download</button>
                          <button class="btn btn-sm download-details" data-toggle="collapse" data-target="#item-details" aria-expanded="false" aria-controls="#item-details"><span class="icon-info"></span>&nbsp;Download Details</button>
                        </div>
                        Bottom section: sublist
                        <div class="item-secondary">
                          <ul class="item-sublist collapse" id="kitchenSublist">
                            <li class="item-subheader">Downloads</li>
                            <li class="item-subitem">
                              <div class="item-body">
                                <h6 class="item-subtitle">OSEKturbo for MPC5xx&nbsp;(REV&nbsp;2.2.1.57)</h6>
                                <ul class="item-metadata metadata">
                                  <li class="meta-date">Nov 14, 2006</li>
                                  <li class="meta-file"><abbr title="Executable file">exe</abbr></li>
                                  <li class="meta-size">6.3 MB</li>
                                </ul>
                              </div>
                              <div class="item-options">
                                <button class="btn btn-sm btn-download">Download</button>
                              </div>
                            </li>
                            <li class="item-subitem">
                              <div class="item-body">
                                <h6 class="item-subtitle">OSEKturbo for HCS12(X) Microcontrollers&nbsp;(REV&nbsp;2.2.1.84)</h6>
                                <ul class="item-metadata metadata">
                                  <li class="meta-date">Sep 4, 2006</li>
                                  <li class="meta-file"><abbr title="Executable file">exe</abbr></li>
                                  <li class="meta-size">10.3 MB</li>
                                </ul>
                              </div>
                              <div class="item-options">
                                <button class="btn btn-sm btn-download">Download</button>
                                <button class="btn btn-sm download-details" data-toggle="collapse" data-target="#kitchenSubDetails" aria-expanded="false" aria-controls="#kitchenSubDetails"><span class="icon-info"></span>&nbsp;Download Details</button>
                              </div>
                              <div class="item-details collapse" id="kitchenSubDetails">
                                <div class="well">
                                  <p>Use the respective goto links associated with these models to download the required RF High Power Model ADS Kit simulation code.</p>
                                </div>
                              </div>
                            </li>
                            <li class="item-subitem">
                              <div class="item-body">
                                <h6 class="item-subtitle">OSEKturbo for DSP (DSC)&nbsp;(REV&nbsp;2.2.1.87)</h6>
                                <ul class="item-metadata metadata">
                                  <li class="meta-date">Jul 3, 2007</li>
                                  <li class="meta-file"><abbr title="Executable file">exe</abbr></li>
                                  <li class="meta-size">11.3 MB</li>
                                </ul>
                              </div>
                              <div class="item-options">
                                <button class="btn btn-sm btn-download">Download</button>
                              </div>
                            </li>
                            <li class="item-subitem">
                              <div class="item-body">
                                <h6 class="item-subtitle">OSEKturbo for HC12&nbsp;(REV&nbsp;2.2.1.81)</h6>
                                <ul class="item-metadata metadata">
                                  <li class="meta-date">Mar 15, 2006</li>
                                  <li class="meta-file"><abbr title="Executable file">exe</abbr></li>
                                  <li class="meta-size">13.9 MB</li>
                                </ul>
                              </div>
                              <div class="item-options">
                                <button class="btn btn-sm btn-download">Download</button>
                              </div>
                            </li>
                            <li class="item-subitem">
                              <div class="item-body">
                                <h6 class="item-subtitle">OSEKturbo for MGT5XXX&nbsp;(REV&nbsp;2.2.1.70)</h6>
                                <ul class="item-metadata metadata">
                                  <li class="meta-date">Mar 7, 2007</li>
                                  <li class="meta-file"><abbr title="Executable file">exe</abbr></li>
                                  <li class="meta-size">13.9 MB</li>
                                </ul>
                              </div>
                              <div class="item-options">
                                <button class="btn btn-sm btn-download">Download</button>
                              </div>
                            </li>
                            <li class="item-subitem">
                              <div class="item-body">
                                <h6 class="item-subtitle">OSEKturbo for MGT5XXX&nbsp;(REV&nbsp;2.2.1.82)</h6>
                                <ul class="item-metadata metadata">
                                  <li class="meta-date">Feb 21, 2006</li>
                                  <li class="meta-file"><abbr title="Executable file">exe</abbr></li>
                                  <li class="meta-size">13.2 MB</li>
                                </ul>
                              </div>
                              <div class="item-options">
                                <button class="btn btn-sm btn-download">Download</button>
                              </div>
                            </li>
                            <li class="item-subitem">
                              <div class="item-body">
                                <h6 class="item-subtitle">OSEKturbo for HC08&nbsp;(REV&nbsp;2.2.1.86)</h6>
                                <ul class="item-metadata metadata">
                                  <li class="meta-date">Jul 3, 2007</li>
                                  <li class="meta-file"><abbr title="Executable file">exe</abbr></li>
                                  <li class="meta-size">11.5 MB</li>
                                </ul>
                              </div>
                              <div class="item-options">
                                <button class="btn btn-sm btn-download">Download</button>
                              </div>
                            </li>
                            <li class="item-subitem">
                              <div class="item-body">
                                <h6 class="item-subtitle">
                                  <a href="//google.com">Special Edition: CodeWarrior for ColdFire Architectures (Classic, Windows hosted)</a>&nbsp;(REV&nbsp;7.2)
                                </h6>
                                <ul class="item-metadata metadata">
                                  <li class="meta-date">Jan 9, 2018</li>
                                  <li class="meta-file"><abbr title="Zipped file">zip</abbr></li>
                                  <li class="meta-size">753 kb</li>
                                </ul>
                              </div>
                              <div class="item-options">
                                <a href="//google.com" class="btn btn-sm btn-download">Download</a>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div class="item-details collapse" id="item-details">
                          <div class="well">
                            <p>Use the respective goto links associated with these models to download the required RF High Power Model ADS Kit simulation code.</p>
                          </div>
                        </div>
                      </li> -->
                    </ul>
                    <!-- Mobile Pagination: Presentation purposes only -->
                    <nav class="text-center visible-xs" aria-label="Page navigation">
                      <ul class="pagination">
                        <li class="disabled">
                          <a href="#" aria-label="Previous">
                            <span aria-hidden="true">Previous</span>
                          </a>
                        </li>
                        <li class="active">
                          <a href="#">1 <span class="sr-only">(current)</span></a>
                        </li>
                        <li><a href="/page-training_filtered_online.html">2</a></li>
                        <li><a href="#">3</a></li>
                        <li>
                          <a href="/page-training_filtered_online.html" aria-label="Next">
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
                        <li class="active">
                          <a href="#">1 <span class="sr-only">(current)</span></a>
                        </li>
                        <li><a href="/page-training_filtered_online.html">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">4</a></li>
                        <li><a href="#">5</a></li>
                        <li>
                          <a href="/page-training_filtered_online.html" aria-label="Next">
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
                        <li class="active">
                          <a href="#">1 <span class="sr-only">(current)</span></a>
                        </li>
                        <li><a href="/page-training_filtered_online.html">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">4</a></li>
                        <li><a href="#">5</a></li>
                        <li><a href="#">6</a></li>
                        <li><a href="#">7</a></li>
                        <li>
                          <a href="/page-training_filtered_online.html" aria-label="Next">
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
                        <li class="active">
                          <a href="#">1 <span class="sr-only">(current)</span></a>
                        </li>
                        <li><a href="/page-training_filtered_online.html">2</a></li>
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
                          <a href="/page-training_filtered_online.html" aria-label="Next">
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
