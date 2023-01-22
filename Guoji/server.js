const{ Socket } = require("socket.io");
const express = require("express");
const path = require("path");

const server = express();
const http = require("http").createServer(server);
const port = 16800;

const io = require("socket.io")(http);

server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,"Client/html/main.html"));
});

http.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}/`);
})
