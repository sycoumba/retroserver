var bCrypt = require('bcrypt');
var jwt =require('jsonwebtoken');
var models = require('../models');

//Routes
module.exports ={
    register: function(req, res)
    {
       // TODO: to implement
//params
var email =req.body.email;
var username = require.body.username;
var password = require.body.password;
var bio = require.body.bio;

if (email == null || username == null || password == null){

    return res.status(400).json({'error':'missing parameters'});
}
// TODO verify pseudo lenght, mail regex, password etc.
models.User.findOne({
  attributes:['email'],
  where: {email:email}
})
.then(function(userFound){
if(!userFound){
bCrypt.hash(password, 5, function(err, bcryptedpassword){
 var newUser =models.user.create ({
     email: email,
     username: username,
     password: bcryptedpassword,
     bio:bio,
     isAdmin:0
 })
 .then(function(newUser){
     return res.status(201).json({  
'userId': newUser.id
     })
 })
 .catch(function(err){
    return res.status(500).json({'error': 'cannot add user'});
 });
});
}
else{
    return res.status(409).json({'error': 'user already exist'}); 
}

})
.catch(function(err){
return res.status(500).json({'error': 'enable to verify user'});

});
    },
    login: function(resq, res){
        // TODO: to implement
    }
}