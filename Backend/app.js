const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { json } = require("body-parser");
const cors = require ("cors");
const userRoute = require('./routes/user');
const todosRoute = require('./routes/todo');
const tasksRoute = require('./routes/tasks');


var app = express();
app.use(cors());
app.use(bodyParser.json());
mongoose.connect("mongodb+srv://walter_admin:Gucci12705@todolist.sm9md.mongodb.net/todolist?retryWrites=true&w=majority",
 { useNewUrlParser: true, useUnifiedTopology: true },
 (err) => {
    if (!err) {
        console.log("Successful MongoDB Connection"); 
    } else {
        console.log("Error in connection : " + JSON.stringify(err, undefined, 2)); 
    }
});

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers",
    "Orgin, X-Requested-With, Content-Type, Accept, authorization"
    );
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS")
    next();
});

app.use('/users', userRoute);
app.use('/todos', todosRoute);
app.use('/tasks', tasksRoute)


app.listen(3000, ()=> {
    console.log(`Server is listening on port: 3000`);
});