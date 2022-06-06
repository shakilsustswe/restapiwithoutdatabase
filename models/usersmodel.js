const { v4: uuidv4 } = require("uuid");

const users = [
  {
    id: uuidv4(),
    userName: "shakil",
    userEmail: "shakil@gamilcom",
  },
  {
    id: uuidv4(),
    userName: "raju",
    userEmail: "raju@gamilcom",
  }
];

module.exports = users;
