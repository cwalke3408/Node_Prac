var express = require('express');
var router = express.Router();

let bandMembers = [
  'SunnyD',
  'Matapilla',
  'Hostess'
]

console.log(bandMembers);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { theBand: bandMembers });
});

// : is a wildcard
router.get('/add/:member', (req, res, next)=>{
  // req.params is an object with a property for 
  // every :something in the path name
  const newMember = req.params.member;
  // res.send(newMember);
  bandMembers.push(newMember);
  res.render('index', ({theBand: bandMembers}));
});

router.get('/remove/:member',(req, res, next) => {
  const memberToRemove = req.params.member;
  const indexToSplice = bandMembers.indexOf(memberToRemove);
  if(indexToSplice > -1){
    bandMembers.splice(indexToSplice, 1);
  }
  res.redirect('/');
})

module.exports = router;
