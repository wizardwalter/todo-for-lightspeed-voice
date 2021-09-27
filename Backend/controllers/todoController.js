const { json } = require("body-parser");
const mongoose = require("mongoose");
const Todo = require("../models/todo");

module.exports.createTodo = (req, res, next) => {
  const todo = new Todo({
    title: req.body.title,
    users: [req.body.users]
  });
  todo
    .save()
    .then((result) => {
      res.status(201).json({
        message: "Todo created!",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
};

module.exports.getTodos = (req, res, next) =>{
    Todo.find()
    .populate({ 
      path: 'tasks',
      populate: {
        path: 'users',
        model: 'user'
      }
   })
    .then(todos => {
        res.json({todos:todos})
    });
};

module.exports.getoneTodo = (req,res,next)=>{
    Todo.findById(req.params.id)
    .populate({ 
      path: 'tasks',
      populate: {
        path: 'user',
        model: 'user'
      }
   })
    .exec((err,todo)=> {
        if(err) {
            res.status(404).json({message: err})
        } else{
            console.log(todo);
            res.json({todo:todo});
        }  
    }) 
};

module.exports.deleteTodo = (req,res) =>{
    Todo.deleteOne({_id:req.params.id}).then(result =>{
        console.log(result);
        res.status(200).json({message:"todo deleted successfully!"})
    })
};

module.exports.editTodo = (req, res) => {
  Todo.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        _id: req.params.id,
        title: req.body.title,
        user: {user: req.body.user}
      },
    },
    { new: true }
  ).then((result) => {
    console.log(result);
    res.status(200).json({
      message: "update was a success!",
      updatedBlog: result,
    });
  });
};
