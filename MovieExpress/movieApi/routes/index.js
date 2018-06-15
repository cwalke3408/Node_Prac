var express = require('express');
var router = express.Router();

// mysql module translates from node to SQL and NODE and Back
//  const mysql = require('mysql');
//  const creds = require('../config/creds');
//  const connection = mysql.createConnection(creds);
// connection.connect();


const bcrypt = require("bcrypt-nodejs");
// include rand-token so we have a token to give React 
const randToken = require('rand-token');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.post('/register', (req, res)=>{

  const password = req.body.password;
  const hashedPassword = bcyrpt.hashSync(password);

  const email = req.body.email;
  console.log("Email and Password: "+ email+" "+password);

  //we now have the 
  // res.json("test");
  const insertUserQuery = `INSERT into users (email, password, token) VALUES (?, ?, ?)`
  const token = randToken.uid(60);
  
  connection.query(insertUserQuery, [email, hashedPassword, ""], (error, results)=>{
    if(error){throw error;}
    res.json({
      token: token,
      msg: "registerSuccess"
    });
  });
});

router.post('/addFav', (req, res)=>{
  const movieToAdd = req.body.movieId;
  const userToken = req.body.token;

  const getUser = `SELECT id FROM users WHERE token = ?`;

  connection.query(getUser, [userToken], (error, results)=>{
    if(error){throw error;}
    if(reults.length > 0){
      // this is a valid token
      const insertQuery = `INSERT INTO favorites (mid,uid) VALUES (?,?)`;
      connection.query(insertQuery,[movieToAdd, results[0].id],(error2, results2)=>{
        res.json({
          msg: "favAdded"
        });
      });
      res.json(req.body);
    } else {
      // Token is bogus
      res.json({
        msg: "badToken"
      });
    }
  });

});

module.exports = router;
