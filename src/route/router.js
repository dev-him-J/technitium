const express = require("express");
const route = express.Router();

const players = [];

route.post("/players", (req, res) => {
  for (let i = 0; i < players.length; i++) {
    if (players[i].name.toLowerCase() === req.body.name.toLowerCase()) {
      return res.send({ message: "Name already exist", staus: false });
    }
  }

  const playerData = req.body;
  players.push(playerData);
  console.log(playerData);
  res.send({ players: players, status: true });
});

module.exports = route;
