/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

//Crear variables del DOM
var textInput = document.querySelector("#input-texto");
var textOutput = document.querySelector("#msg");
var btnEncriptar = document.querySelector("#btn-encriptar");
var btnDesencriptar = document.querySelector("#btn-desencriptar");
var btnCopiar = document.querySelector("#btn-copy");

btnEncriptar.addEventListener("click", function (event) {
  event.preventDefault();
  const entrada = textInput.value;
  const salida = Encriptar(entrada);
  textOutput.value = salida;
});
btnDesencriptar.addEventListener("click", function (event) {
  event.preventDefault();
  const entrada = textInput.value;
  const salida = Desencriptar(entrada);
  textOutput.value = salida;
});
btnCopiar.addEventListener("click", function (event) {
  event.preventDefault();
  textInput.value = textOutput.value;
});

function Encriptar(texto) {
  var index = 0;
  while (index < texto.length) {
    if (texto[index] == "a") {
      texto =
        texto.substring(0, index) +
        "ai" +
        texto.substring(index + 1, texto.length);
      index = index + 1;
    } else if (texto[index] == "e") {
      texto =
        texto.substring(0, index) +
        "enter" +
        texto.substring(index + 1, texto.length);
      index = index + 4;
    } else if (texto[index] == "i") {
      texto =
        texto.substring(0, index) +
        "imes" +
        texto.substring(index + 1, texto.length);
      index = index + 3;
    } else if (texto[index] == "o") {
      texto =
        texto.substring(0, index) +
        "ober" +
        texto.substring(index + 1, texto.length);
      index = index + 3;
    } else if (texto[index] == "u") {
      texto =
        texto.substring(0, index) +
        "ufat" +
        texto.substring(index + 1, texto.length);
      index = index + 3;
    }
    index++;
  }
  return texto;
}

function Desencriptar(texto) {
  function reemplazoSecuencia(secuenciaCripto, secuenciaOriginal, texto) {
    for (var i = 0; i < texto.length; i++) {
      if (texto.substring(i, i + secuenciaCripto.length) == secuenciaCripto) {
        texto =
          texto.substring(0, i) +
          secuenciaOriginal +
          texto.substring(i + secuenciaCripto.length, texto.length);
      }
    }
    return texto;
  }

  var secuenciaCripto = "ai";
  var secuenciaOriginal = "a";
  texto = reemplazoSecuencia(secuenciaCripto, secuenciaOriginal, texto);

  secuenciaCripto = "enter";
  secuenciaOriginal = "e";
  texto = reemplazoSecuencia(secuenciaCripto, secuenciaOriginal, texto);

  secuenciaCripto = "imes";
  secuenciaOriginal = "i";
  texto = reemplazoSecuencia(secuenciaCripto, secuenciaOriginal, texto);

  secuenciaCripto = "ober";
  secuenciaOriginal = "o";
  texto = reemplazoSecuencia(secuenciaCripto, secuenciaOriginal, texto);

  secuenciaCripto = "ufat";
  secuenciaOriginal = "u";
  texto = reemplazoSecuencia(secuenciaCripto, secuenciaOriginal, texto);

  return texto;
}

//Copiar atraves de seleccion de texto en el portapapeles
function copy() {
  var copyText = document.querySelector("#btn-copy");
  copyText.select();
  document.execCommand("copy");
}

document.querySelector("#btn-copy").addEventListener("click", copy);
