import Image from "next/image";

const NavRight = () => {
  return (
    <ul className="nav-right">
      <li className="header-notification">
        <a className="waves-effect waves-light">
          <i className="ti-bell"></i>
          <span className="badge bg-c-red"></span>
        </a>
        <ul className="show-notification">
          <li>
            <h6>Notifications</h6>
            <label className="label label-danger">New</label>
          </li>
          <li className="waves-effect waves-light">
            <div className="media">
              <Image
                className="d-flex align-self-center img-radius"
                src="/static/images/avatar-2.jpg"
                alt="Generic placeholder image"
                width={40}
                height={40}
              />
              <div className="media-body ml-3">
                <h5 className="notification-user">John Doe</h5>
                <p className="notification-msg">
                  Lorem ipsum dolor sit amet, consectetuer elit.
                </p>
                <span className="notification-time">30 minutes ago</span>
              </div>
            </div>
          </li>
          <li className="waves-effect waves-light">
            <div className="media">
              <Image
                className="d-flex align-self-center img-radius"
                src="/static/images/avatar-4.jpg"
                alt="Generic placeholder image"
                width={40}
                height={40}
              />
              <div className="media-body ml-3">
                <h5 className="notification-user">Joseph William</h5>
                <p className="notification-msg">
                  Lorem ipsum dolor sit amet, consectetuer elit.
                </p>
                <span className="notification-time">30 minutes ago</span>
              </div>
            </div>
          </li>
          <li className="waves-effect waves-light">
            <div className="media">
              <Image
                className="d-flex align-self-center img-radius"
                src="/static/images/avatar-3.jpg"
                alt="Generic placeholder image"
                width={40}
                height={40}
              />
              <div className="media-body ml-3">
                <h5 className="notification-user">Sara Soudein</h5>
                <p className="notification-msg">
                  Lorem ipsum dolor sit amet, consectetuer elit.
                </p>
                <span className="notification-time">30 minutes ago</span>
              </div>
            </div>
          </li>
        </ul>
      </li>
      <li className="user-profile header-notification">
        <a className="waves-effect waves-light d-flex align-items-center">
          <Image
            src="/static/images/avatar-4.jpg"
            className="img-radius"
            alt="User-Profile-Image"
            width={40}
            height={40}
          />
          <span className="ml-3">John Doe</span>
          <i className="ti-angle-down"></i>
        </a>
        <ul className="show-notification profile-notification">
          <li className="waves-effect waves-light">
            <a>
              <i className="ti-settings"></i> Settings
            </a>
          </li>
          <li className="waves-effect waves-light">
            <a href="">
              <i className="ti-user"></i> Profile
            </a>
          </li>
          <li className="waves-effect waves-light">
            <a href="">
              <i className="ti-email"></i> My Messages
            </a>
          </li>
          <li className="waves-effect waves-light">
            <a href="">
              <i className="ti-lock"></i> Lock Screen
            </a>
          </li>
          <li className="waves-effect waves-light">
            <a href="">
              <i className="ti-layout-sidebar-left"></i> Logout
            </a>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default NavRight;
