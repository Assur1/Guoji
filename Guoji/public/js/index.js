import Board from './Board.js';

const socket = io.connect("http://localhost:16800");
socket.emit("joined");

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
    var board = new Board(8);
    board.init();
    board.display(currentPlayer.color);
    board.DragAndDrop();
});










    


    