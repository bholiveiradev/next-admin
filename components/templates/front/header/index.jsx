import Head from "next/head";

const Header = ({ title }) => {
  return (
    <Head>
      <title>{title ? title : "Default Title"}</title>
      <meta
        property="og:title"
        content={title ? title : "Default Title"}
        key="title"
      />
    </Head>
  );
};

export default Header;
