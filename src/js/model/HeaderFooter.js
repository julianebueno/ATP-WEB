export function construirHeaderIndex() {
  var header = document.getElementById("headerIndex");
  header.innerHTML = `
    <div class="containerHeader">
      <a href="./index.html"><img src="./src/img/logo.svg" alt="logo"></a>
      <nav class="main-nav">
        <ul class="menu">
          <li class="close">&times;</li>
          <li><a href="./index.html">Inicial</a></li>
          <li><a href="./src/html/form.html">Cadastro</a></li>
          <li><a href="./src/html/formAction.html">Receitas</a></li>
          <li><a href="./src/html/about.html">Sobre</a></li>
        </ul>
        <span class="mobile-btn">Menu</span>
        <div class="overlay"></div>
      </nav>
    </div>
  `;
}

export function construirHeaderGeral() {
  var header = document.getElementById("header");
  header.innerHTML = `
    <div class="containerHeader">
      <a href="../../index.html"><img src="../img/logo.svg" alt="logo"></a>
      <nav class="main-nav">
        <ul class="menu">
          <li class="close">&times;</li>
          <li><a href="../../index.html">Inicial</a></li>
          <li><a href="../html/form.html">Cadastro</a></li>
          <li><a href="../html/formAction.html">Receitas</a></li>
          <li><a href="../html/about.html">Sobre</a></li>
        </ul>
        <span class="mobile-btn">Menu</span>
        <div class="overlay"></div>
      </nav>
    </div>
  `;
}

export function construirFooter() {
  var footer = document.getElementById("footer");
  footer.innerHTML = `
    <small>ATP-WEB</small>
    <small>&copy; Feito por Juliane Bueno</small>
  `;
}
