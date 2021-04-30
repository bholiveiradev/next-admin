function loadCss(src) {
  const link = document.createElement("link");
  link.href = src;
  link.rel = "stylesheet";
  document.head.appendChild(link);
}

export default loadCss;