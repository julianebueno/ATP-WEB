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
  input2.setAttribute("required", "");
  container2.appendChild(input2);
  contador2++;
}


// ---------------------------------------------------------------

function preencherValores(){

  document.getElementById("tituloReceita").setAttribute("value", "bolo de fubá")
  document.getElementById("autorReceita").setAttribute("value", "popular")
  document.getElementById("tempoPreparo").setAttribute("value", "45")
  document.getElementById("rendimento").setAttribute("value", "10")

  const listaIngredientes = [
    "2 xícaras de chá de fubá",
    "1 xícara de chá de farinha de trigo",
    "1 colher de sopa de fermento em pó",
    "3 ovos",
    "1 xícara de chá de leite",
    "1 xícara de chá de óleo",
    "2 xícaras de chá de açúcar",
  ]
  for (let i = 1; i < listaIngredientes.length; i++) {
    addInputIngredientes()
  }
  for (let i = 0; i < listaIngredientes.length; i++) {
    document.getElementById(`ingrediente${i+1}`).setAttribute("value", listaIngredientes[i])
  }

  const listaPassos = [
    "Com auxílio de uma peneira, coloque 2 xícaras de chá de fubá, 1 xícara de chá de farinha de trigo e 1 colher de sopa de fermento em pó em um recipiente. Misture e reserve.",
    "No liquidificador, coloque 3 ovos, 1 xícara de chá de leite, 1 xícara de chá de óleo e 2 xícaras de chá de açúcar. Bata até ficar homogêneo.",  
    "Junte a mistura do liquidificador com os ingredientes peneirados e misture.",
    "Transfira a massa para uma forma untada com manteiga e polvilhada com fubá.",  
    "Leve para assar em forno preaquecido a 180 graus Celsius por 30 minutos.",
  ]
  for (let i = 1; i < listaPassos.length; i++) {
    addInputModoFazer()
  }
  for (let i = 0; i < listaPassos.length; i++) {
    document.getElementById(`passoModoFazer${i+1}`).setAttribute("value", listaPassos[i])
  }
  
}