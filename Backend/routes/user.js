var express = require("express");
var router = express.Router();
const userController = require("../controllers/userController");


 router.post("/create", userController.createUser);

 router.get('/', userController.getUsers);
 
 router.get('/:id', userController.getOneUser);

 router.delete('/:id', userController.deleteUser);


module.exports = router;