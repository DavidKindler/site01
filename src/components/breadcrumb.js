import React from "react"

export default () => {
  return (
    <React.Fragment>
      <div className="container-fluid iw_section">
        <div className="row iw_row iw_stretch">
          <div className="iw_columns col-lg-12">
            <div className="iw_component">
              <div className="bc-container clearfix">
                <ul className="bc">
                  <li>
                    <a href="#">
                      <span className="icon-home" />
                    </a>
                  </li>
                  <li>
                    <div className="dropdown">
                      {" "}
                      <a
                        href="#"
                        id="bc_1"
                        data-toggle="dropdown"
                        className="dropdown-toggle"
                        aria-expanded="false"
                      >
                        First Link
                      </a>
                      <ul
                        className="dropdown-menu dropdown-menu-left"
                        role="menu"
                        aria-labelledby="bc_1"
                      >
                        <li role="presentation">
                          <a role="menuitem" href="#">
                            Option 1
                          </a>
                        </li>
                        <li role="presentation">
                          <a role="menuitem" href="#">
                            Option 2
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="dropdown">
                      {" "}
                      <a
                        href="#"
                        id="bc_2"
                        data-toggle="dropdown"
                        className="dropdown-toggle"
                      >
                        Second Link
                      </a>
                      <ul
                        className="dropdown-menu dropdown-menu-left"
                        role="menu"
                        aria-labelledby="bc_2"
                      >
                        <li role="presentation">
                          <a role="menuitem" href="#">
                            Option 1
                          </a>
                        </li>
                        <li role="presentation">
                          <a role="menuitem" href="#">
                            Option 2
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="active">Final Link</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
