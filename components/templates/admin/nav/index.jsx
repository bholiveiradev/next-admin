import Image from "next/image";
import Link from "next/link";
import NavLeft from "./left";
import NavRight from "./right";

const Nav = () => {
  return (
    <nav className="navbar header-navbar pcoded-header">
      <div className="navbar-wrapper">
        <div className="navbar-logo">
          <a
            className="mobile-menu waves-effect waves-light"
            id="mobile-collapse"
          >
            <i className="ti-menu"></i>
          </a>
          <div className="mobile-search waves-effect waves-light">
            <div className="header-search">
              <div className="main-search morphsearch-search">
                <div className="input-group">
                  <span className="input-group-addon search-close">
                    <i className="ti-close"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Keyword"
                  />
                  <span className="input-group-addon search-btn">
                    <i className="ti-search"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <Link href="/admin/dashboard">
            <a>
              <Image
                className="img-fluid"
                src="/static/images/logo.png"
                alt="Theme-Logo"
                width={157}
                height={25}
              />
            </a>
          </Link>
          <a className="mobile-options waves-effect waves-light">
            <i className="ti-more"></i>
          </a>
        </div>
        <div className="navbar-container container-fluid">
          <NavLeft />
          <NavRight />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
