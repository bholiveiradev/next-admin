import { useEffect } from "react";
import Head from "next/head";
import Preloader from "./../../components/templates/admin/preloader";

const Login = () => {
  useEffect(() => {
    window.onload = () => {
      document.body.setAttribute("themebg-pattern", "theme1");
    };
  }, []);

  const handleSignIn = () => {
    window.location.replace("/admin/dashboard");
  };

  return (
    <>
      <Head>
        <title>Mega Able bootstrap admin template by codedthemes </title>
        <link
          rel="icon"
          href="/static/images/favicon.ico"
          type="image/x-icon"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,500"
          media="all"
        />
        <link
          rel="stylesheet"
          href="/static/icon/icofont/css/icofont.css"
          media="all"
        />
        <link rel="stylesheet" href="/static/css/style.css" media="all" />
      </Head>
      <Preloader />
      <section className="login-block">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <form className="md-float-material form-material">
                <div className="text-center">
                  <img src="/static/images/logo.png" alt="logo.png" />
                </div>
                <div className="auth-box card">
                  <div className="card-block">
                    <div className="row m-b-20">
                      <div className="col-md-12">
                        <h3 className="text-center">Sign In</h3>
                      </div>
                    </div>
                    <div className="form-group form-primary">
                      <input
                        type="text"
                        name="email"
                        className="form-control"
                        required="required"
                      />
                      <span className="form-bar"></span>
                      <label className="float-label">Your Email Address</label>
                    </div>
                    <div className="form-group form-primary">
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        required="required"
                      />
                      <span className="form-bar"></span>
                      <label className="float-label">Password</label>
                    </div>
                    <div className="row m-t-25 text-left">
                      <div className="col-12">
                        <div className="checkbox-fade fade-in-primary d-">
                          <label>
                            <input type="checkbox" />
                            <span className="cr">
                              <i className="cr-icon icofont icofont-ui-check txt-primary"></i>
                            </span>
                            <span className="text-inverse">Remember me</span>
                          </label>
                        </div>
                        <div className="forgot-phone text-right f-right">
                          <a href="#" className="text-right f-w-600">
                            {" "}
                            Forgot Password?
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="row m-t-30">
                      <div className="col-md-12">
                        <button
                          type="button"
                          onClick={handleSignIn}
                          className="btn btn-primary btn-md btn-block waves-effect waves-light text-center m-b-20"
                        >
                          Sign in
                        </button>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-md-10">
                        <p className="text-inverse text-left m-b-0">
                          Thank you.
                        </p>
                        <p className="text-inverse text-left">
                          <a href="index.html">
                            <b>Back to website</b>
                          </a>
                        </p>
                      </div>
                      <div className="col-md-2">
                        <img
                          src="/static/images/auth/Logo-small-bottom.png"
                          alt="small-logo.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              {/* end of form */}
            </div>
          </div>
        </div>
      </section>
      <script
        type="text/javascript"
        src="/static/js/jquery/jquery.min.js"
      ></script>
      <script
        type="text/javascript"
        src="/static/js/jquery-ui/jquery-ui.min.js "
      ></script>
      <script
        type="text/javascript"
        src="/static/js/popper.js/popper.min.js"
      ></script>
      <script
        type="text/javascript"
        src="/static/js/bootstrap/js/bootstrap.min.js "
      ></script>
      <script
        type="text/javascript"
        src="/static/pages/waves/js/waves.min.js"
      ></script>
      <script
        type="text/javascript"
        src="/static/js/jquery-slimscroll/jquery.slimscroll.js "
      ></script>
      <script type="text/javascript" src="/static/js/SmoothScroll.js"></script>
      <script
        type="text/javascript"
        src="/static/js/jquery.mCustomScrollbar.concat.min.js"
      ></script>
      <script type="text/javascript" src="/static/js/common-pages.js"></script>
    </>
  );
};

export default Login;
