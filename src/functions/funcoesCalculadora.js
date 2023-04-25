let tela = 0;
/* 
Se (tela = 0) -> a calculadora foi iniciada
Se (tela = 1) -> está fazendo a conta
Se (tela = 2) -> resultado mostrado, tem que apagar a tela
*/

let firtsValue = 0;

function digitarNum(valor) {
  let b = document.querySelector("p.texto-conta");
  if (tela === 1) {
    b.innerText += valor;
    firtsValue = b.innerText;
  } else {
    b.innerText = valor;
    firtsValue = b.innerText;
    tela = 1;
  }
}

function digitarOp(valor) {
  let b = document.querySelector("p.texto-conta");
  if (b.innerText[0] != null) {
    //Testa se a tela está sem nada escrito
    if (
      b.innerText.endsWith("*") ||
      b.innerText.endsWith("/") ||
      b.innerText.endsWith("+") ||
      b.innerText.endsWith("-") ||
      b.innerText.endsWith("%")
    ) {
      b.innerText = b.innerText.substring(0, b.innerText.length - 1); //Esclui o último caractere com o operador a ser trocado
      b.innerText += valor; //Adiciona o novo operador
      tela = 1;
    } else {
      b.innerText += valor;
      tela = 1;
    }
  }
}

function mostraResultado() {
  let b = document.querySelector("p.texto-conta");
  let s = document.querySelector("sup.value-sup");
  if (b.innerText[0] != null) {
    //Testa se a tela está sem nada escrito
    b.innerText = eval(b.innerText);
    s.innerText = firtsValue;
    tela = 2;
  }
}

function delConta2() {
  let b = document.querySelector("p.texto-conta");
  b.innerText = null;
}

function delConta() {
  let b = document.querySelector("p.texto-conta");
  if (tela == 2) {
    b.innerText = null;
  } else {
    b.innerText = b.innerText.substring(0, b.innerText.length - 1); //Apara o ultimo caractere por click
  }
}

function getSqrt() {
  let b = document.querySelector("p.texto-conta");
  b.innerText = Math.sqrt(firtsValue);
}

function getByTwo() {
  let b = document.querySelector("p.texto-conta");
  var twoPower = Math.pow(firtsValue, 2);
  b.innerText = twoPower;
}

function getPi(pi) {
  let b = document.querySelector("p.texto-conta");
  b.innerText = Math.PI * firtsValue ;
  tela = 1;
}

function getSin() {
  let b = document.querySelector("p.texto-conta");
  b.innerText = Math.sin(firtsValue) * firtsValue;
  tela = 1;
}

function getCos() {
  let b = document.querySelector("p.texto-conta");
  b.innerText = Math.cos(firtsValue) * firtsValue;
  tela = 1;
}

function getTan() {
  let b = document.querySelector("p.texto-conta");
  b.innerText = Math.tan(firtsValue) * firtsValue;
  tela = 1;
}

function getLog() {
  let b = document.querySelector("p.texto-conta");
  b.innerText = Math.log(firtsValue)
  tela = 1;
}

function getAbs() {
  let b = document.querySelector("p.texto-conta");
  b.innerText = Math.abs(firtsValue)
  tela = 1;
}

function getRandom() {
  let b = document.querySelector("p.texto-conta");
  b.innerText = Math.random()
  tela = 1;
}

function getPercent(perc) {
  let b = document.querySelector("p.texto-conta");
  b.innerText = perc;
  tela = 1;
}

function getEuler() {
  let b = document.querySelector("p.texto-conta");
  b.innerText = Math.E ** firtsValue;
  tela = 1;
}

function getCeil() {
  let b = document.querySelector("p.texto-conta");
  b.innerText = Math.ceil(firtsValue);
  tela = 1;
}

function getCbrt() {
  let b = document.querySelector("p.texto-conta");
  b.innerText = Math.cbrt(firtsValue);
  tela = 1;
}

