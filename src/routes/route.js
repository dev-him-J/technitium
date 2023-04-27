const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/bookController.js")



router.post("/createUser", UserController.createBook  )

router.get("/getUsersData", UserController.getAllBooks)

module.exports = router;