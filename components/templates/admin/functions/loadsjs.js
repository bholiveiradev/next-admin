function loadJs(src) {
  if (!typeof $ || !typeof jQuery) loadJs(path, async);

  const script = document.createElement("script");
  script.src = src;
  script.type = "text/javascript";
  script.async = false;
  document.body.appendChild(script);
}

export default loadJs;