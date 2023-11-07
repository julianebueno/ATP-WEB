// ---------------------------------------------------------------
const container = document.getElementById("labelIngredientes");
var contador = 2;

function addInputIngredientes() {
  let input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("name", `ingrediente${contador}`);
  input.setAttribute("id", `ingrediente${contador}`);
  input.setAttribute("placeholder", `Ingrediente ${contador}...`);
  input.setAttribute("pattern", "[a-zA-ZÀ-ÿ0-9 ]+");
  input.setAttribute("title", "Sem caracteres especias, insira apenas letras, números, espaços e acentos");
  input.setAttribute("required", "");
  container.appendChild(input);
  contador++;
}

// ---------------------------------------------------------------
const container2 = document.getElementById("labelModoFazer");
var contador2 = 2;

function addInputModoFazer() {
  let input2 = document.createElement("input");
  input2.setAttribute("type", "text");
  input2.setAttribute("name", `passoModoFazer${contador2}`);
  input2.setAttribute("id", `passoModoFazer${contador2}`);
  input2.setAttribute("placeholder", `Passo ${contador2}...`);
  input2.setAttribute("pattern", "[a-zA-ZÀ-ÿ0-9 ]+");
  input2.setAttribute("title", "Sem caracteres especias, insira apenas letras, números, espaços e acentos");
  input2.setAttribute("required", "");
  container2.appendChild(input2);
  contador2++;
}
