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
    board.display();
    board.DragAndDrop();
});

socket.on("movment", (tab)=>{
    console.log("Movement");
    board.setMovement(tab[0][0], tab[0][1], tab[1][0], tab[1][1]);
    console.log("Clear");
    board.clearDisplay();
    console.log("Display");
    board.display();
    console.log("DragAndDrop");
    board.DragAndDrop();
});













    


    