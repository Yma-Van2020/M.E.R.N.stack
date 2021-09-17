const pirateController = require("../controllers/pirate.controller")

module.exports = (app) =>{
    app.post("/api/pirates", pirateController.createPirate)
    app.get("/api/pirates", pirateController.getAll)
    app.get("/api/pirates/:id", pirateController.getOne)
    app.delete("/api/pirates/:id", pirateController.deletePirate)
    app.put("/api/pirates/:id", pirateController.updatePirate)
}