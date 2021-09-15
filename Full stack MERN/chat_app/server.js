const express = require('express');
const cors = require('cors') 
const app = express();
const port = 8000

require("./server/config/mongoose.config")

app.use(cors()) 
app.use(express.json())
app.use(express.urlencoded({extended:true}))

require('./server/routes/product.routes')(app);

const server = app.listen(port, () => {
    console.log(`Listening at Port ${port}`)
})
const io = require("socket.io")(server, {cors: true})

io.on("connection", socket => {
    socket.on("event_from_client", data => {
        console.log("Nice to meet you. (shake hand)")
        socket.broadcast.emit("send_data_to_all_other_clients", data);
    })
})