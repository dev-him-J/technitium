const express = require("express");
const router = express.Router();
// Problem 1
// 1. Create an API for GET /movies that returns a list of movies. Define an array of
// movies in your code and return the value in response.

// router.get("/movies", (req, res) => {
//   const moviesArr = [
//     "Sholay",
//     "Shutter Island",
//     "Swades",
//     "Harry Potter",
//     "Avengers",
//   ];

//   for (let i = 0; i < moviesArr.length; i++) {
//     console.log(moviesArr[i]);
//   }
//   res.send({movies:moviesArr});
// });
///////////////////////////////////////////////////////////////////////////////////
// Problem 2
// 2. Create an API GET /movies/:indexNumber (For example GET /movies/1 is a
// valid request and it should return the movie in your array at index 1). You can
// define an array of movies again in your api
// [‘Rang de basanti’, ‘The shining’, ‘Lord of the rings’, ‘Batman begins’]
// Example of a request url -> localhost:3000/movies/2


// router.get("/movies/:indexNumber", (req, res) => {
//   const moviesArr = [
//     "Sholay",
//     "Shutter Island",
//     "Swades",
//     "Harry Potter",
//     "Avengers",
//   ];
//   const movieNumber = Number(req.params.indexNumber) - 1;
//   console.log(moviesArr[movieNumber]);
//   res.send({ Movie: moviesArr[movieNumber] });
// });
////////////////////////////////////////////////////////////////////////////////////
// problem 3
// 3. Handle a scenario in problem 2 where if the index is greater than the valid
// maximum value or smaller that the valid minimum value, a message is returned
// that tells the user to use a valid index in an error message.

// router.get("/movies/:indexNumber", (req, res) => {
//   const moviesArr = [
//     "Sholay",
//     "Shutter Island",
//     "Swades",
//     "Harry Potter",
//     "Avengers",
//   ];
//   const movieNumber = Number(req.params.indexNumber) - 1;
//   if (
//     movieNumber === 0 ||
//     movieNumber < 0 ||
//     movieNumber > moviesArr.length - 1
//   ) {
//     res.send("Error:Use a Valid Movie Index");
//   } else {
//     res.send({ Movie: moviesArr[movieNumber] });
//   }
// });
//////////////////////////////////////////////////////////////////////////////////////////
// Problem 4
// 4. Write another api called GET /films. Instead of an array of strings define an array
// of movie objects this time. Each movie object should have attributes - id and
// name. An example of movies array is
// [ {
// “id”: 1,
// “name”: “The Shining”
// }, {
// “id”: 2,
// “name”: “Incendies”
// }, {
// “id”: 3,
// “name”: “Rang de Basanti”
// }, {
// “id”: 4,
// “name”: “Finding Nemo”
// }]
// Return the entire array in this api’s response

// router.get("/films", (req, res) => {
//   const filmsArr = [
//     {
//       id: 1,
//       name: "The Shining",
//     },
//     {
//       id: 2,
//       name: "Mummy Returns",
//     },
//     {
//       id: 3,
//       name: "Rang de Basanti",
//     },
//     {
//       id: 4,
//       name: "Shutter Island",
//     },
//   ];
//   res.send(filmsArr);
// });
///////////////////////////////////////////////////////////////////////////////////////////
// Problem 5
// 5. Write api GET /films/:filmId where filmId is the value received in request path
// params. Use this value to return a movie object with this id. In case there is no
// such movie present in the array, return a suitable message in the response body.
// Example for a request GET /films/3 should return the movie object
// {
// “id”: 3,
// “name”: “Rang de Basanti”
// }
// Similarly for a request GET /films/9 the response can be something like - ‘No
// movie exists with this id’
router.get("/films/:filmId", (req, res) => {
  const filmsArr = [
    {
      id: 1,
      name: "The Shining",
    },
    {
      id: 2,
      name: "Mummy Returns",
    },
    {
      id: 3,
      name: "Rang de Basanti",
    },
    {
      id: 4,
      name: "Shutter Island",
    },
  ];
  const movieIdNumber = Number(req.params.filmId) - 1;

  if (movieIdNumber < 0 || movieIdNumber > filmsArr.length - 1) {
    res.send("No movie exist with this id");
  } else {
    res.send(filmsArr[movieIdNumber]);
  }
  
});
module.exports = router;
