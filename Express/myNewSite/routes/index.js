var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  team = {
    name: 'The Greatest',
    lineup: [
      'Randy Brown',
      'Jud Buechler',
      'Jason Caffey',
      'James Edwards',
      'Jack Haley', 
      'Ron Harper',
      'Michael Jordan',
      'Steve Kerr',
      'Toni Kukoc',
      'Luc Longley',
      'Scottie Pippen',
      'Dennis Rodman',
      'John Salley',
      'Dickey Simpkins',
      'Bill Wennington'
    ],
    nickname: 'GOAT'
  }
  res.render('index', team);
});

router.get('/bums', function(req, res){
  team = {
    name: 'The Chokes',
    lineup: [
      'Joel Anthony',
      'Carlos Arroyo',
      'Mike Bibby',
      'Chris Bosh',
      'Mario Chalmers',
      'Erick Dampier',
      'Udonis Haslem',
      'Eddie House',
      'Juwan Howard',
      'Zydrunas Ilgauskas',
      'Lebron James',
      'Jamaal Magloire',
      'Mike Miller',
      'Dexter Pittman',
      'Jerry Stackhouse',
      'Dwyane Wade'
    ],
    nickname: 'Bum'
  };
  res.render('index', team);
});

module.exports = router;
