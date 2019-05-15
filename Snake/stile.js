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
var coda = new Array(0); // array contenente le posizioni

//funzione di avvio
function  avvio() {
  initMat();  //inizializzazione matrice
  disCampo(); //grafica campo

  coda.push(posSnakeX + "," + posSnakeY);

  document.getElementById("btn_" + posSnakeX + "_" + posSnakeY).style.backgroundColor = BLU;
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
  tabella.style.margin = "20px auto";
  tabella.style.borderSpacing = "0";
  for (var i = 0; i < DIM; i++) {
    riga = document.createElement("tr");
    tabella.appendChild(riga);
    for (var j = 0; j < DIM; j++) {
      // creo celle
      cella = document.createElement("td");
      riga.appendChild(cella);

      //creo bottoni
      btn = document.createElement("input");
      btn.type = "button";
      btn.id = "btn_" + i + "_" + j;
      btn.style.height= "17px";
      btn.style.width= "18px";
      btn.style.backgroundColor = GRIGIO;
      btn.style.color = BIANCO;

      //settaggio attributi
      btn.setAttribute("onClick", "get_cordinate(this)");
      cella.appendChild(btn);

    }
  }
}

function get_cordinate(btn) {
  //alert("hai cliccato il pulsante " + cord.id);
  var vector = btn.id.split("_");
  alert(vector [1] + " " + vector [2]);
}

function changeDirection(event) {
  var code = event.keyCode;
  if(codice == 37){
    direzione = "sx";
  }
  if(codice == 38){
    direzione = "up";
  }
  if(codice == 39){
    direzione = "dx";
  }
  if(codice == 40){
    direzione = "dw";
  }


}

function muoviSnake() {
  

}
