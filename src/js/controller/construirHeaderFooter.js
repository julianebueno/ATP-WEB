import * as script from "../model/HeaderFooter.js";

const headerElementIndex = document.getElementById("headerIndex");
if (headerElementIndex) script.construirHeaderIndex();

const headerElementGeral = document.getElementById("header");
if (headerElementGeral) script.construirHeaderGeral();

script.construirFooter();
