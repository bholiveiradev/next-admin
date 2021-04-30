import Head from "next/head";
import Preloader from "../preloader";

const Header = ({ title }) => {
  return (
    <>
      <Head>
        <link
          rel="icon"
          href="/static/images/favicon.ico"
          type="image/x-icon"
        />
        <title>{title ? title : "Default Title"}</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:400,500"
          media="all"
        />
        <link
          rel="stylesheet"
          href="/static/css/jquery.mCustomScrollbar.css"
          media="all"
        />
        <link rel="stylesheet" href="/static/css/style.css" media="all" />
        <link
          rel="stylesheet"
          href="https://www.amcharts.com/lib/3/plugins/export/export.css"
          media="all"
        />
        <script src="https://www.amcharts.com/lib/3/plugins/export/libs/fabric.js/fabric.min.js"></script>
        <script src="https://www.amcharts.com/lib/3/plugins/export/libs/FileSaver.js/FileSaver.min.js"></script>
        <script src="https://www.amcharts.com/lib/3/plugins/export/libs/jszip/jszip.min.js"></script>
        <script src="https://www.amcharts.com/lib/3/plugins/export/libs/pdfmake/pdfmake.min.js"></script>
        <script src="https://www.amcharts.com/lib/3/plugins/export/libs/xlsx/xlsx.min.js"></script>
        <script src="https://www.amcharts.com/lib/3/plugins/export/libs/pdfmake/vfs_fonts.js"></script>
      </Head>
      <Preloader />
    </>
  );
};

export default Header;
