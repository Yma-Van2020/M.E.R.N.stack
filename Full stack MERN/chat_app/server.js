const path = require("path")
const http = require("http")
const express = require("express");

const socketio = require("socket.io")

const app = express();
const server = http.createServer(app)
const io = socketio(server)

//SET STATI FOLDER
app.use(express.static(path.join(__dirname, "public")))

io.on("connection", socket => {
    //welcome current user
    socket.emit("message", "welcome to chatroom:)")

    //when connects
    socket.broadcast.emit("message", "A user has joined the chatroom");

    //when disconnects
    socket.on("disconnect", () => {
        io.emit("message", "A use has left the chatroom")
    })
})
const PORT = 3000 || process.env.PORT
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));