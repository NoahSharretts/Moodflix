const express = require("express");


const router = express.Router();

// Get most popular movies
router.get("/popular", asyncHandler(async (req, res) => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '91c11a3976msh5b33a221d82d12dp1a2e50jsn10da760e6739',
      'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
    }
  };

  fetch('https://online-movie-database.p.rapidapi.com/title/get-most-popular-movies?currentCountry=US&purchaseCountry=US&homeCountry=US', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
}));

module.exports = router
