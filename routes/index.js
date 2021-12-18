var express = require('express');
var router = express.Router();
var db =require('../models');
const User = db.user;
/* GET home page. */

router.post('/', async function (req, res, next) {

  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let email = req.body.email;
  let password = req.body.password;


  let user = (await User).build({firstName: firstName, lastName: lastName, email: email,password:password});
  await user.save();

  res.render('success', {firstName: firstName, lastName: lastName, email: email, password: password});
});

router.get('/', function (req, res, next) {
    res.render('index');
});

router.get('/users/table',  async function (req, res, next) {
    (await User).findAll().then(
        function (data) {
            res.render('table', {userData: data});
        }
    );



});

module.exports = router;
