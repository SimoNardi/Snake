const DIM = 20; //dimensione campo
var campo = new Array(DIM); //vettore campo da gioco

var direzione = "dx"; //direzione all'avvio

/* Costanti per i colori */
const GRIGIO = "rgb(100, 120, 105)";
const BIANCO = "rgb(255, 255, 255)";
const ROSSO = "rgb(187, 0, 0)";
const BLU = "rgb(6, 0, 126)";

/* Posizione Cibo */
var xCibo, yCibo; //cordinate Cibo
var nCibo;  //contatore Cibo

/* Posizione snake */
var posSnakeX = 1;  // cordinate snake x
var posSnakeY = 1;  // cordinate snake y
var coda = new Array(0) // array contenente le

//funzione di avvio
function  avvio() {
  initMat();  //inizializzazione matrice
  disCampo(); //grafica campo

}

function initMat() {
  for(var i=0; i<DIM; i++){
    campo[i] = new Array(DIM);
  }
  // inizializzo matricem a 0
  for (var i = 0; i < DIM; i++) {
    for (var j = 0; j < DIM; j++) {
      campo[i][j] = 0;
    }
  }
}

function disCampo() {
  var refBody = document.getElementsByTagName("body")[0];
  var tabella = document.createElement("table");
  var riga, cella, btn;

  refBody.appendChild(tabella);

}
