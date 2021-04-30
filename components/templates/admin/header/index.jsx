import { useEffect } from "react";
import Head from "next/head";
import Preloader from "../preloader";
import { loadJs, loadCss } from '../functions'

const Header = ({ title }) => {
  useEffect(() => {
    loadCss("https://fonts.googleapis.com/css?family=Roboto:400,500");
    loadCss("/static/css/bootstrap/css/bootstrap.min.css");
    loadCss("/static/pages/waves/css/waves.min.css");
    loadCss("/static/icon/themify-icons/themify-icons.css");
    loadCss("/static/icon/font-awesome/css/font-awesome.min.css");
    loadCss("/static/css/jquery.mCustomScrollbar.css");
    loadCss("https://www.amcharts.com/lib/3/plugins/export/export.css");
    loadCss("/static/css/style.css");
    loadJs("https://www.amcharts.com/lib/3/plugins/export/libs/fabric.js/fabric.min.js");
    loadJs("https://www.amcharts.com/lib/3/plugins/export/libs/FileSaver.js/FileSaver.min.js");
    loadJs("https://www.amcharts.com/lib/3/plugins/export/libs/jszip/jszip.min.js");
    loadJs("https://www.amcharts.com/lib/3/plugins/export/libs/pdfmake/pdfmake.min.js");
    loadJs("https://www.amcharts.com/lib/3/plugins/export/libs/xlsx/xlsx.min.js");
    loadJs("https://www.amcharts.com/lib/3/plugins/export/libs/pdfmake/vfs_fonts.js");
  }, []);
  return (
    <>
      <Head>
        <link
          rel="icon"
          href="/static/images/favicon.ico"
          type="image/x-icon"
        />
        <title>{title ? title : "Default Title"}</title>
      </Head>
      <Preloader />
    </>
  );
};

export default Header;
