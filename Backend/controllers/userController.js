const { json } = require("body-parser");
const mongoose = require("mongoose");
const todo = require("../models/todo");
const User = require("../models/user");

module.exports.createUser = (req, res, next) => {
  const user = new User({
    username: req.body.username,
    todo: [req.body.todo]
  });
  user
    .save()
    .then((result) => {
      res.status(201).json({
        message: "User created!",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
};

module.exports.getUsers = (req, res, next) =>{
    User.find()
    .populate('todo')
    .then(users => {
        res.json({users:users})
    });
};

module.exports.getOneUser = (req,res,next)=>{
    User.findOne({username: req.params.username})
    .populate({ 
      path: 'todo',
      populate: {
        path: 'users',
        model: 'user'
      } 
   })
    .exec((err,user)=> {
        if(err) {
            res.status(404).json({message: err})
        } else{
            console.log(user);
            res.json({user:user});
        }  
    }) 
};

module.exports.deleteUser = (req,res) =>{
    User.deleteOne({_id:req.params.id}).then(result =>{
        console.log(result);
        res.status(200).json({message:"user deleted successfully!"})
    })
};