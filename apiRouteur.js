// imports
var express = require('express');
var usersCtrl = require('./routes/usersCtrl');

// Routeurs
exports.routeur = (function(){
var apiRouteur =express.Router();

// Users Routes
apiRouteur.route('users/register/').post(usersCtrl.register)
apiRouteur.login('users/login/').post(usersCtrl.login)
return apiRouteur;
})();