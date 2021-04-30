import Header from "./header";
import Footer from "./footer";

const Template = ({ title, children }) => {
  return (
    <>
      <Header title={title} />
      {children}
      <Footer />
    </>
  );
};

export default Template;
