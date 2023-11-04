export function construirHeader(ehIndex) {
  var auxHeader = "../..";
  var auxHeader2 = "..";

  if (ehIndex) {
    auxHeader = ".";
    auxHeader2 = "./src";
  }

  var header = document.getElementById("header");
  header.innerHTML = `
    <a href="${auxHeader}/index.html"><img src="${auxHeader2}/img/logo.svg" alt="logo"></a>
    <nav class="navHeader">
      <a href="${auxHeader}/index.html">Inicial</a>
      <a href="${auxHeader2}/html/form.html">Form</a>
      <a href="${auxHeader2}/html/formAction.html">FormAction</a>
      <a href="${auxHeader2}/html/about.html">About</a>
    </nav>
  `;
}

export function construirFooter() {
  var footer = document.getElementById("footer");
  footer.innerHTML = `
    <small>ATP-WEB</small>
    <small>&copy; Feito por Juliane Bueno</small>
  `;
}
