function getParameters() {
  var params = [];
  var paramsRetorno = [];
  var url = window.location.href;
  var paramsStart = url.indexOf("?");

  if (paramsStart != -1) {
    var paramString = url.substring(paramsStart + 1);
    paramString = decodeURIComponent(paramString);
    paramString = paramString.replace(/\+/g, " ");
    var params = paramString.split("&");
    for (var i = 0; i < params.length; i++) {
      var pairArray = params[i].split("=");
      if (pairArray.length == 2) {
        paramsRetorno[pairArray[0]] = pairArray[1];
      }
    }
    return paramsRetorno;
  }
  return null;
}

// -----------------------------------------------

const container = document.getElementById("containerReceitas");
var params = [];
params = getParameters();

if (params === null) {
  let div = document.createElement("div");
  div.innerHTML = `
    <p>Aguardando envio do formuario...</p>
    <a href="../html/form.html">Ir para cadastro</a>
  `;
  div.setAttribute("class", "caixaVazia");
  container.appendChild(div);
} else {
  console.log(params);

  let divInfo = document.createElement("div");
  divInfo.innerHTML = `
    <h2>${params.tituloReceita.toUpperCase()}</h2>
    <p><b>${
      params.autorReceita.charAt(0).toUpperCase() +
      params.autorReceita.slice(1).toLowerCase()
    }</b></p>
    <p>${params.tempoPreparo} minutos</p>
    <p>${params.rendimento} porções</p>
  `;
  divInfo.setAttribute("class", "containerInfo");
  container.appendChild(divInfo);

  let divIngrediente = document.createElement("div");
  divIngrediente.innerHTML = `<h4>Ingredientes</h4>`;
  divIngrediente.setAttribute("id", "caixaIngrediente");
  divIngrediente.setAttribute("class", "caixaIngrediente");
  container.appendChild(divIngrediente);

  let divPasso = document.createElement("ol");
  divPasso.innerHTML = `<h4>Modo de Fazer</h4>`;
  divPasso.setAttribute("id", "caixaPasso");
  divPasso.setAttribute("class", "caixaPasso");
  container.appendChild(divPasso);

  const caixaIngrediente = document.getElementById("caixaIngrediente");
  const caixaPasso = document.getElementById("caixaPasso");

  var ingrediente = "";
  var passo = "";

  for (let [key, value] of Object.entries(params)) {
    ingrediente = key.indexOf("ingrediente");
    passo = key.indexOf("passo");

    if (ingrediente != -1) {
      let itemIngrediente = document.createElement("div");
      itemIngrediente.innerHTML = `
        <img src="../img/ingredientes.svg" alt="ingredientes">
        <p>${value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()}</p>
      `;
      itemIngrediente.setAttribute("class", "itemIngrediente");
      caixaIngrediente.appendChild(itemIngrediente);
    }

    if (passo != -1) {
      let itemPasso = document.createElement("li");
      itemPasso.innerHTML = `
        <p>${value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()}</p>
      `;
      itemPasso.setAttribute("class", "itemPasso");
      caixaPasso.appendChild(itemPasso);
    }
  }
}
