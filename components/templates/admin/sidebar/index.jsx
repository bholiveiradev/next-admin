import Image from "next/image";

const Sidebar = () => {
  return (
    <nav className="pcoded-navbar">
      <div className="sidebar_toggle">
        <a href="#">
          <i className="icon-close icons"></i>
        </a>
      </div>
      <div className="pcoded-inner-navbar main-menu">
        <div className="">
          <div className="main-menu-header">
            <Image
              className="img-80 img-radius"
              src="/static/images/avatar-4.jpg"
              alt="User-Profile-Image"
              width={60}
              height={60}
            />
            <div className="user-details">
              <span id="more-details">
                John Doe<i className="fa fa-caret-down"></i>
              </span>
            </div>
          </div>

          <div className="main-menu-content">
            <ul>
              <li className="more-details">
                <a href="">
                  <i className="ti-user"></i>View Profile
                </a>
                <a>
                  <i className="ti-settings"></i>Settings
                </a>
                <a href="auth-normal-sign-in.html">
                  <i className="ti-layout-sidebar-left"></i>Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="p-15 p-b-0">
          <form className="form-material">
            <div className="form-group form-primary">
              <input
                type="text"
                name="footer-email"
                className="form-control"
                required="required"
              />
              <span className="form-bar"></span>
              <label className="float-label">
                <i className="fa fa-search m-r-10"></i>Search Friend
              </label>
            </div>
          </form>
        </div>
        <div
          className="pcoded-navigation-label"
          data-i18n="nav.category.navigation"
        >
          Layout
        </div>
        <ul className="pcoded-item pcoded-left-item">
          <li className="active">
            <a href="index.html" className="waves-effect waves-dark">
              <span className="pcoded-micon">
                <i className="ti-home"></i>
                <b>D</b>
              </span>
              <span className="pcoded-mtext" data-i18n="nav.dash.main">
                Dashboard
              </span>
              <span className="pcoded-mcaret"></span>
            </a>
          </li>
          <li className="pcoded-hasmenu">
            <a className="waves-effect waves-dark">
              <span className="pcoded-micon">
                <i className="ti-layout-grid2-alt"></i>
              </span>
              <span
                className="pcoded-mtext"
                data-i18n="nav.basic-components.main"
              >
                Components
              </span>
              <span className="pcoded-mcaret"></span>
            </a>
            <ul className="pcoded-submenu">
              <li className=" ">
                <a href="accordion.html" className="waves-effect waves-dark">
                  <span className="pcoded-micon">
                    <i className="ti-angle-right"></i>
                  </span>
                  <span
                    className="pcoded-mtext"
                    data-i18n="nav.basic-components.alert"
                  >
                    Accordion
                  </span>
                  <span className="pcoded-mcaret"></span>
                </a>
              </li>
              <li className=" ">
                <a href="breadcrumb.html" className="waves-effect waves-dark">
                  <span className="pcoded-micon">
                    <i className="ti-angle-right"></i>
                  </span>
                  <span
                    className="pcoded-mtext"
                    data-i18n="nav.basic-components.breadcrumbs"
                  >
                    Breadcrumbs
                  </span>
                  <span className="pcoded-mcaret"></span>
                </a>
              </li>
              <li className=" ">
                <a href="button.html" className="waves-effect waves-dark">
                  <span className="pcoded-micon">
                    <i className="ti-angle-right"></i>
                  </span>
                  <span
                    className="pcoded-mtext"
                    data-i18n="nav.basic-components.alert"
                  >
                    Button
                  </span>
                  <span className="pcoded-mcaret"></span>
                </a>
              </li>
              <li className=" ">
                <a href="tabs.html" className="waves-effect waves-dark">
                  <span className="pcoded-micon">
                    <i className="ti-angle-right"></i>
                  </span>
                  <span
                    className="pcoded-mtext"
                    data-i18n="nav.basic-components.breadcrumbs"
                  >
                    Tabs
                  </span>
                  <span className="pcoded-mcaret"></span>
                </a>
              </li>
              <li className=" ">
                <a href="color.html" className="waves-effect waves-dark">
                  <span className="pcoded-micon">
                    <i className="ti-angle-right"></i>
                  </span>
                  <span
                    className="pcoded-mtext"
                    data-i18n="nav.basic-components.alert"
                  >
                    Color
                  </span>
                  <span className="pcoded-mcaret"></span>
                </a>
              </li>
              <li className=" ">
                <a href="label-badge.html" className="waves-effect waves-dark">
                  <span className="pcoded-micon">
                    <i className="ti-angle-right"></i>
                  </span>
                  <span
                    className="pcoded-mtext"
                    data-i18n="nav.basic-components.breadcrumbs"
                  >
                    Label Badge
                  </span>
                  <span className="pcoded-mcaret"></span>
                </a>
              </li>
              <li className=" ">
                <a href="tooltip.html" className="waves-effect waves-dark">
                  <span className="pcoded-micon">
                    <i className="ti-angle-right"></i>
                  </span>
                  <span
                    className="pcoded-mtext"
                    data-i18n="nav.basic-components.alert"
                  >
                    Tooltip
                  </span>
                  <span className="pcoded-mcaret"></span>
                </a>
              </li>
              <li className=" ">
                <a href="typography.html" className="waves-effect waves-dark">
                  <span className="pcoded-micon">
                    <i className="ti-angle-right"></i>
                  </span>
                  <span
                    className="pcoded-mtext"
                    data-i18n="nav.basic-components.breadcrumbs"
                  >
                    Typography
                  </span>
                  <span className="pcoded-mcaret"></span>
                </a>
              </li>
              <li className=" ">
                <a href="notification.html" className="waves-effect waves-dark">
                  <span className="pcoded-micon">
                    <i className="ti-angle-right"></i>
                  </span>
                  <span
                    className="pcoded-mtext"
                    data-i18n="nav.basic-components.alert"
                  >
                    Notification
                  </span>
                  <span className="pcoded-mcaret"></span>
                </a>
              </li>
              <li className=" ">
                <a href="icon-themify.html" className="waves-effect waves-dark">
                  <span className="pcoded-micon">
                    <i className="ti-angle-right"></i>
                  </span>
                  <span
                    className="pcoded-mtext"
                    data-i18n="nav.basic-components.breadcrumbs"
                  >
                    Themify
                  </span>
                  <span className="pcoded-mcaret"></span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <div className="pcoded-navigation-label" data-i18n="nav.category.forms">
          Forms &amp; Tables
        </div>
        <ul className="pcoded-item pcoded-left-item">
          <li>
            <a
              href="form-elements-component.html"
              className="waves-effect waves-dark"
            >
              <span className="pcoded-micon">
                <i className="ti-layers"></i>
                <b>FC</b>
              </span>
              <span
                className="pcoded-mtext"
                data-i18n="nav.form-components.main"
              >
                Form Components
              </span>
              <span className="pcoded-mcaret"></span>
            </a>
          </li>
          <li>
            <a href="bs-basic-table.html" className="waves-effect waves-dark">
              <span className="pcoded-micon">
                <i className="ti-layers"></i>
                <b>FC</b>
              </span>
              <span
                className="pcoded-mtext"
                data-i18n="nav.form-components.main"
              >
                Basic Table
              </span>
              <span className="pcoded-mcaret"></span>
            </a>
          </li>
        </ul>

        <div className="pcoded-navigation-label" data-i18n="nav.category.forms">
          Chart &amp; Maps
        </div>
        <ul className="pcoded-item pcoded-left-item">
          <li>
            <a href="chart.html" className="waves-effect waves-dark">
              <span className="pcoded-micon">
                <i className="ti-layers"></i>
                <b>FC</b>
              </span>
              <span
                className="pcoded-mtext"
                data-i18n="nav.form-components.main"
              >
                Chart
              </span>
              <span className="pcoded-mcaret"></span>
            </a>
          </li>
          <li>
            <a href="map-google.html" className="waves-effect waves-dark">
              <span className="pcoded-micon">
                <i className="ti-layers"></i>
                <b>FC</b>
              </span>
              <span
                className="pcoded-mtext"
                data-i18n="nav.form-components.main"
              >
                Maps
              </span>
              <span className="pcoded-mcaret"></span>
            </a>
          </li>
          <li className="pcoded-hasmenu">
            <a className="waves-effect waves-dark">
              <span className="pcoded-micon">
                <i className="ti-layout-grid2-alt"></i>
              </span>
              <span
                className="pcoded-mtext"
                data-i18n="nav.basic-components.main"
              >
                Pages
              </span>
              <span className="pcoded-mcaret"></span>
            </a>
            <ul className="pcoded-submenu">
              <li className=" ">
                <a
                  href="auth-normal-sign-in.html"
                  className="waves-effect waves-dark"
                >
                  <span className="pcoded-micon">
                    <i className="ti-angle-right"></i>
                  </span>
                  <span
                    className="pcoded-mtext"
                    data-i18n="nav.basic-components.alert"
                  >
                    Login
                  </span>
                  <span className="pcoded-mcaret"></span>
                </a>
              </li>
              <li className=" ">
                <a href="auth-sign-up.html" className="waves-effect waves-dark">
                  <span className="pcoded-micon">
                    <i className="ti-angle-right"></i>
                  </span>
                  <span
                    className="pcoded-mtext"
                    data-i18n="nav.basic-components.breadcrumbs"
                  >
                    Register
                  </span>
                  <span className="pcoded-mcaret"></span>
                </a>
              </li>
              <li className=" ">
                <a href="sample-page.html" className="waves-effect waves-dark">
                  <span className="pcoded-micon">
                    <i className="ti-angle-right"></i>
                  </span>
                  <span
                    className="pcoded-mtext"
                    data-i18n="nav.basic-components.breadcrumbs"
                  >
                    Sample Page
                  </span>
                  <span className="pcoded-mcaret"></span>
                </a>
              </li>
            </ul>
          </li>
        </ul>

        <div className="pcoded-navigation-label" data-i18n="nav.category.other">
          Other
        </div>
        <ul className="pcoded-item pcoded-left-item">
          <li className="pcoded-hasmenu ">
            <a className="waves-effect waves-dark">
              <span className="pcoded-micon">
                <i className="ti-direction-alt"></i>
                <b>M</b>
              </span>
              <span className="pcoded-mtext" data-i18n="nav.menu-levels.main">
                Menu Levels
              </span>
              <span className="pcoded-mcaret"></span>
            </a>
            <ul className="pcoded-submenu">
              <li className="">
                <a className="waves-effect waves-dark">
                  <span className="pcoded-micon">
                    <i className="ti-angle-right"></i>
                  </span>
                  <span
                    className="pcoded-mtext"
                    data-i18n="nav.menu-levels.menu-level-21"
                  >
                    Menu Level 2.1
                  </span>
                  <span className="pcoded-mcaret"></span>
                </a>
              </li>
              <li className="pcoded-hasmenu ">
                <a className="waves-effect waves-dark">
                  <span className="pcoded-micon">
                    <i className="ti-direction-alt"></i>
                  </span>
                  <span
                    className="pcoded-mtext"
                    data-i18n="nav.menu-levels.menu-level-22.main"
                  >
                    Menu Level 2.2
                  </span>
                  <span className="pcoded-mcaret"></span>
                </a>
                <ul className="pcoded-submenu">
                  <li className="">
                    <a className="waves-effect waves-dark">
                      <span className="pcoded-micon">
                        <i className="ti-angle-right"></i>
                      </span>
                      <span
                        className="pcoded-mtext"
                        data-i18n="nav.menu-levels.menu-level-22.menu-level-31"
                      >
                        Menu Level 3.1
                      </span>
                      <span className="pcoded-mcaret"></span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="">
                <a className="waves-effect waves-dark">
                  <span className="pcoded-micon">
                    <i className="ti-angle-right"></i>
                  </span>
                  <span
                    className="pcoded-mtext"
                    data-i18n="nav.menu-levels.menu-level-23"
                  >
                    Menu Level 2.3
                  </span>
                  <span className="pcoded-mcaret"></span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
