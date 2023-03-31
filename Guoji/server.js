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
    res.sendFile(path.join(__dirname,"client/index.html"));
});

server.get('/chess', (req, res) => {
    res.sendFile(path.join(__dirname,"client/main.html"));
});

http.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}/`);
})

let users = [];

io.on('connection', (socket)=>{ 
    console.log(`[Connexion] ${socket.id}`)
    
    socket.on("join", () =>{
        if(users.length <= 2)
        {
            users.push(socket.id);
            if(users.length == 1)
            {
                socket.emit("join", 0);
            }
            else
            {
                socket.emit("join", 1);
            }
        }

        if(users.length == 2)
        {
            io.emit("start");
        }
    });

    socket.on('disconnect', ()=> {
        users = [];
        io.emit('disconnected')
        console.log(`[Disconnect] ${socket.id}`);
    });


    socket.on('movment', (tab)=>
    {
        if(users[0] == socket.id)
        {
            //blanc
            io.to(users[1]).emit("movment", tab);
        }else
        {
            //noir
            io.to(users[0]).emit("movment", tab);
        }
    });
});
