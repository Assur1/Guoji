import Board from './Board.js';

const socket = io.connect("http://localhost:16800");
socket.emit("joined");

var board = new Board(8, socket);

let currentPlayer = {
    id : socket.id,
    color : "",
};
socket.emit("join", currentPlayer.id);

socket.on("join", (color) =>{
    currentPlayer.color = color;
});

socket.on("disconnected", ()=>{
    window.location.reload();
});

socket.on("start", ()=>{
    board.init();
    board.display(currentPlayer.color);
    board.DragAndDrop(socket);
});

socket.on("movment", (tab)=>{
    board.setMovement(tab[0][0], tab[0][1], tab[1][0], tab[1][1]);
    board.display(currentPlayer.color);
    board.DragAndDrop(socket);
});













    


    