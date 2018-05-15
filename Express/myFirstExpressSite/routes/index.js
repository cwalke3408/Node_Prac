var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const chiTeams = [
    'Bears',
    'Bulls',
    'Fire',
    'BlackHawks',
    'Cubs',
    'White Sox'
  ]
  res.render('index', { chiTeams });
});

router.get('/football', (req, res)=>{
  const atlTeams = [
    'Tigers',
    'Bulls',
    'Fire',
    'BlackHawks',
    'Cubs',
    'White Sox'
  ]
  res.render('index', {chiTeams});
});
module.exports = router;
