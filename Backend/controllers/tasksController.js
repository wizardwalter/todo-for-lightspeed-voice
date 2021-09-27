const { json } = require("body-parser");
const mongoose = require("mongoose");

const Task = require("../models/tasks");

module.exports.createTask = (req, res, next) => {
  const task = new Task({
    title: req.body.title,
    estimatedHours: req.body.estimatedHours,
    user: req.body.user,
    todo: req.body.todo,
  });
  task
    .save()
    .then((result) => {
      res.status(201).json({
        message: "Task created!",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
};

module.exports.getTasks = (req, res, next) => {
  Task.find()
  .populate('todo')
  .populate('user')
  .then((tasks) => {
    res.json({ tasks: tasks });
  });
};

module.exports.getoneTask = (req, res, next) => {
  Task.findById(req.params.id)
  .populate('todo')
  .exec((err, todo) => {
    if (err) {
      res.status(404).json({ message: err });
    } else {
      res.json({ task: task });
    }
  });
};

module.exports.deleteTask = (req, res) => {
  Task.deleteOne({ _id: req.params.id }).then((result) => {
    console.log(result);
    res.status(200).json({ message: "todo deleted successfully!" });
  });
};

module.exports.editTask = (req, res) => {
  Task.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        _id: req.params.id,
        title: req.body.title,
        estimatedHours: req.body.estimatedHours,
        user: req.body.user,
        todo: req.body.todo,
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

// module.exports.getCategories = (req, res) => {
//   Task.find({ todo: req.body.todo }, (err, todos) => {
//     if (err) {
//       return res.status(422).json({ message: "no data found" });
//     } else {
//       res.status(200).json(todos);
//     }
//   });
// };

// module.exports.getProjectList = (req, res) => {
//   Task.find({ user: req.params.user }, (err, user) => {
//     let projects = [];
//     let todos = [];
//     for (let data of user) {
//       projects.push(data);
//       todos.push(data.todo);
//     }
//     var stopLoop = false;
//     var newArr = [];
//     for(var xyz in projects){
//         if(newArr.indexOf(projects[xyz]['todo']) != -1 && newArr !== ''){
//           // projects[xyz]['estimatedHours'] + projects[xyz]['estimatedHours'];
//           projects.splice(xyz,1)
//       }else{
//         newArr.push({todo: projects[xyz]['todo'],estimatedHours:projects[xyz]['estimatedHours'],user:projects[xyz]['user'],title:projects[xyz]['title']})
//       }
//     }
//       // for(let i = 0; i < projects.length; i++){

//       //   for(let j = 0; j < projects.length; j++){
//       //     if(i !== j){
//       //       if(projects[i].todo == projects[j].todo){
//       //         projects[j].estimatedHours += projects[i].estimatedHours

//       //         if(newArr.indexOf(projects[j] == -1)){
//       //           newArr.push(projects[j])
//       //         }
//       //         stopLoop = true;
//       //         console.log('duplicate log' + i)
//       //         break;
//       //       }
//       //     }
//       //   }
//       //   if(stopLoop){
//       //     continue
//       //   }
//       // }
//     // console.log(projects)
//     console.log(newArr);
//     let findOtherUsers = async function() {
//       var tempQuery = [];
//       var returnArray = [];
//       for await (let data of todos) {
//         let findUser = await Task.find({todo: data}).exec();
//         tempQuery.push(findUser);
//       }

//       returnArray = await Promise.all(tempQuery);
//       return returnArray;
//     }

//     findOtherUsers().then((doc) => {

//     }).catch(err => {
//       console.log(err)
//     })
//   });
// };

// // let tempJson = {
//         //     todo: '',
//         //     members: user.user + '',
//         //     estimatedHours: ''
//         //   };
//     //     if (err) {
//     //   return res.status(422).json({ message: "user not found" });
//     // } else {
//     //     let anotherTempArray= [];
//     //     let tempProjects = [];
//     //     for(let i =0; i < user.length; i++){
//     //         tempProjects.push(user[i].todo)
//     //     }
//     //     tempProjects.forEach(data =>{
//     //         Task.find({todo: data}, (err, member)=>{
//     //             console.log(member)
//     //         })
//     //         console.log(anotherTempArray);
//     //     })
//     // }

//     // if(err){
//     //   console.log(err)
//     // }
//     // let projects = [];
//     // for (let data of user) {
//     //   projects.push(data);
//     // }
