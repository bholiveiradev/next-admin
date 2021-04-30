import { useEffect } from "react";
import { loadJs } from '../functions';

const Footer = ({ children }) => {
  useEffect(() => {
    window.onload = () => {
      loadJs("/static/js/jquery/jquery.min.js");
      loadJs("/static/js/jquery-ui/jquery-ui.min.js");
      loadJs("/static/js/popper.js/popper.min.js");
      loadJs("/static/js/bootstrap/js/bootstrap.min.js");
      loadJs("/static/pages/widget/excanvas.js");
      loadJs("/static/pages/waves/js/waves.min.js");
      loadJs("/static/js/jquery-slimscroll/jquery.slimscroll.js");
      loadJs("/static/js/modernizr/modernizr.js");
      loadJs("/static/js/SmoothScroll.js");
      loadJs("/static/js/jquery.mCustomScrollbar.concat.min.js");
      loadJs("https://www.amcharts.com/lib/3/amcharts.js");
      loadJs("/static/pages/widget/amchart/gauge.js");
      loadJs("/static/pages/widget/amchart/serial.js");
      loadJs("/static/pages/widget/amchart/light.js");
      loadJs("/static/pages/widget/amchart/pie.min.js");
      loadJs("https://www.amcharts.com/lib/3/plugins/export/export.min.js");
      loadJs("/static/js/pcoded.min.js");
      loadJs("/static/js/vertical-layout.min.js");
      loadJs("/static/pages/dashboard/custom-dashboard.js");
      loadJs("/static/js/script.js");
    };
  }, []);

  return <footer>{children}</footer>;
};

export default Footer;
