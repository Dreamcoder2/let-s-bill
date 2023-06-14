const asyncHandler = require("express-async-handler");
const User = require("../Model/users");

exports.createUser = asyncHandler(async (req, res) => {
  const { LoginNumber } = req.body;
  const user = new User({
    LoginNumber,
  });
  const usersaved = user.save();
  if(!usersaved) {
    throw new Error ('saving user failed')
  }
  res.status(200).json({
    msg: "success",
    usersaved
  })
});
