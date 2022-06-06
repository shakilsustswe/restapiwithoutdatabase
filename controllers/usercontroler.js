//users require
let users=require("../models/usersmodel");
const { v4: uuidv4 } = require("uuid");
//get all users
const getAllUser = (request, response) => {
  response.status(200).json({ users });
};

const AddUser = (request, response) => {
    
    const newUser={
        id:uuidv4(),
        userName:request.body.userName,
        userEmail:request.body.userEmail,   
    };
    users.push(newUser);
    response.status(200).json(users);
  };


  //update User
  const updateUser = (request, response) => {
    const userid=request.params.id;
    const {userName,userEmail}=request.body;
    users.filter((user)=>user.id==userid).map((seleteduser)=>{
        seleteduser.userName=userName;
        seleteduser.userEmail=userEmail;
    });
    response.status(200).json(users);
  };

   //delete User
   const deleteUser = (request, response) => {
    const userid=request.params.id;
    users =users.filter((user)=>user.id!=userid)
    response.status(200).json(users);
  };

module.exports = {getAllUser,AddUser,updateUser,deleteUser};
