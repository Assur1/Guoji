const{ Socket } = require("socket.io");
const express = require("express");
const path = require("path");

const server = express();
const http = require("http").createServer(server);
const port = 16800;


/**
 * @type {Socket}
 */
const io = require("socket.io")(http);
server.use(express.static('public'));


server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,"client/main.html"));
});

http.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}/`);
})


let rooms = [];

io.on('connection', (socket)=>{ 
    console.log(`[Connexion] ${socket.id}`)

    // Creer une route qui écoute l'event de création de player
        // Si pas de roomid => Creer room
        // si rejoin salon avec lien ou code : Regarde avec un predicat si le code entrer === à une rooms*
    //socket.join(id de la room)
    io.to(socket.id).emit('join room', //id de la room
    )

    // si nombre de joueur == 2 alors start game
})

function createRoom()
{

}

function genRoomId()
{
    return null;
}