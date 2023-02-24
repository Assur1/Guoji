import Board from './Board.js';

function allowDrop(ev) {
    ev.preventDefault();
  }
  
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    var i = + ev.target.id.charAt(ev.target.id.length-1);
    var j = + ev.target.id.charAt(ev.target.id.length-2);

    pawn = board.getpawn(i,j);

    pMove = pawn.getmoveArray()
    console.log(pMove);
}
  
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}



//Creer le type joueur (room id obligatoire) 

const socket = io();

//on submit => creer objet joueur
// socket = socket.id
// socket.emit du joueur

const board = new Board(8);
board.init();
board.display();

