const path = require("path")
const http = require("http")
const express = require("express");

const socketio = require("socket.io")
const formatMessages = require("./utils/messages")
const app = express();
const server = http.createServer(app)
const io = socketio(server)

//SET STATI FOLDER
app.use(express.static(path.join(__dirname, "public")))

const botName = "Chatroom-bot29438:D"
io.on("connection", socket => {
    //welcome current user
    socket.emit("message", formatMessages(botName, "welcome to chatroom:)"))

    //when connects
    socket.broadcast.emit("message", formatMessages(botName,"A user has joined the chatroom");

    //when disconnects
    socket.on("disconnect", () => {
        io.emit("message", formatMessages(botName,"A use has left the chatroom")
    })

    //listen for chatmessages
    socket.on("chatMessage", msg => {
        io.emit("message", formatMessages("User", msg)
    })
})
const PORT = 3000 || process.env.PORT
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));