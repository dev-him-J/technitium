const express = require("express");

const router = express.Router();
const logger = require("../logger/logger");
const helper = require("../util/helper");
const formatter = require("../validator/formatter");
const lodash = require("lodash");
// problem 1
// router.get("/test-me", async function (req, res) {
//   console.log(logger.welcome());
//   res.send(logger.welcome());
// });
// problem 2
// router.get("/test-me", (req, res) => {
//   console.log(helper.printDate());
//   console.log(helper.printMonth());
//   console.log(helper.getBatchInfo("Technitium","W3D3","Node Module"));
//   res.send("successfull");
// });
// problem 3
// Module 3: src/validator/formatter.js
// - trim() : calls the trim function on a hardcoded string for example ‘ functionUp  ’
// - changetoLowerCase() : changes the case of the string to lower. [Call toLowerCase() on a hardcoded string]
// - changeToUpperCase() : changes the case of the string to upper case [Call toUpperCase() on a hardcoded string]

// Call all these functions in route.js inside the test-me route handler

// router.get("/test-me", (req, res) => {
//   console.log(formatter.trimFunc());
//   console.log(formatter.changeToLowerCase());
//   console.log(formatter.changeToUpperCase());
//   res.send("successfull");
// });

//  problem 4

// router.get("/test-me", function (req, res) {
//   let arr = [
//     "jan",
//     "feb",
//     "march",
//     "april",
//     "may",
//     "june",
//     "july",
//     "august",
//     "september",
//     "october",
//     "november",
//     "december",
//   ];
//   let arr2 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
//   let firstArr = [1, 2, 3, 4, 55, 67, 89];
//   let secondArr = [23, 55, 67, 89];
//   let thirdArr = [12, 35, 55, 98, 90];
//   let fourthArr = [12, 13, 14, 55];
//   let fifthArr = [14, 15, 77, 89];
//   let arr3 = [
//     ["horror", "The Shining"],
//     ["drama", "Titanic"],
//     ["thriller", "Shutter Island"],
//     ["fantasy", "Pans Labyrinth"],
//   ];
//   console.log(lodash.chunk(arr, 3));
//   console.log(lodash.tail(arr2, 9));
//   console.log(lodash.union(firstArr, secondArr, thirdArr, fourthArr, fifthArr));
//   console.log(lodash.fromPairs(arr3));

//   res.send("successfull");
// });

module.exports = router;
