import Board from './Board.js';

//Creer le type joueur (room id obligatoire) 

const socket = io();

//on submit => creer objet joueur
// socket = socket.id
// socket.emit du joueur

var board = new Board(8);
board.init();
board.display();
board.DragAndDrop();








    


    