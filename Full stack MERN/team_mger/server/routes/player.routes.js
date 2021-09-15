const PlayerController = require("../controllers/player.controller")

module.exports = (app) =>{
    app.post("/api/players", PlayerController.createPlayer)
    app.get("/api/players", PlayerController.getAll)
    app.get("/api/players/:id", PlayerController.getOne)
    app.delete("/api/players/:id", PlayerController.deletePlayer)
    app.put("/api/players/:id", PlayerController.updateplayer)
}