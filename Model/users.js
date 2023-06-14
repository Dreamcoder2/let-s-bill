const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    LoginNumber: {
      type: Number,
      required: true,
    },
    UserType: {
      type: String,
    },
    TransactionCount: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);
