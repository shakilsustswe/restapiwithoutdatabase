const express = require("express");
const router = express.Router();

const {
  getAllUser,
  AddUser,
  updateUser,
  deleteUser,
} = require("../controllers/usercontroler");

router.get("/", getAllUser);
router.post("/", AddUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
