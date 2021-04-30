const NavLeft = () => {
  const toggleFullScreen = () => {
    var a = $(window).height() - 10;

    if (
      !document.fullscreenElement &&
      !document.mozFullScreenElement &&
      !document.webkitFullscreenElement
    ) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(
          Element.ALLOW_KEYBOARD_INPUT
        );
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  };

  return (
    <ul className="nav-left">
      <li>
        <div className="sidebar_toggle">
          <a>
            <i className="ti-menu"></i>
          </a>
        </div>
      </li>
      <li className="header-search">
        <div className="main-search morphsearch-search">
          <div className="input-group">
            <span className="input-group-addon search-close">
              <i className="ti-close"></i>
            </span>
            <input type="text" className="form-control" />
            <span className="input-group-addon search-btn">
              <i className="ti-search"></i>
            </span>
          </div>
        </div>
      </li>
      <li>
        <a onClick={toggleFullScreen} className="waves-effect waves-light">
          <i className="ti-fullscreen"></i>
        </a>
      </li>
    </ul>
  );
};

export default NavLeft;
