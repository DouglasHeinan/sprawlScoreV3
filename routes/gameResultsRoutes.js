const express = require("express");
const router = express.Router();
const gameResultsController = require("../controllers/gameResultsController");

router.route("/")
    .get(gameResultsController.getAllGameResults)
    .post(gameResultsController.createNewGameResult)
    .patch(gameResultsController.updateGameResult)
    .delete(gameResultsController.deleteGameResult)

module.exports = router;
