// INclude Express ..
var express = require('express');

// set up the router FROM the express module
var router = express.Router();

// get request. We have this because we npm 
// installed IDBTransaction. we need it to make http requests. 
const request = require('request');

// Get our credentials from our non-git file to keep them safe from the scary Interent
const creds = require('../config/creds');

// Set up the urls we are going to use over and over
const apiBaseUrl = `http://api.themoviedb.org/3`;
const nowPlayingUrl = `${apiBaseUrl}/movie/now_playing?api_key=${creds.api_key}`;
const imageBaseUrl = `http://image.tmdb.org/t/p/w300`;

/* GET home page. */
router.get('/', function(req, res, next) {
    request.get(nowPlayingUrl,(error,response,movieData)=>{
        const parsedData = JSON.parse(movieData);
        res.render('index',{
            nowPlayingData: parsedData.results,
            imageBaseUrl: imageBaseUrl
        });
    });
});



module.exports = router;
