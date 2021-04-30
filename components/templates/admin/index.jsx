import Header from "./header";
import Footer from "./footer";
import Sidebar from "./sidebar";
import Nav from "./nav";
import PageHeader from "./page-header";

const Template = ({ title, children }) => {
  return (
    <>
      <Header title={title} />
      <div id="pcoded" className="pcoded">
        <div className="pcoded-overlay-box"></div>
        <div className="pcoded-container navbar-wrapper">
          <Nav />
          <div className="pcoded-main-container">
            <div className="pcoded-wrapper">
              <Sidebar />
              <div className="pcoded-content">
                <PageHeader />
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Template;
