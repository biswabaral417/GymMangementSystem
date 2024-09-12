const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true
  },
  Phone: {
    type: Number,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
  Todos: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "todos",
    },
  ],
  memberships: {
    type:{
     type:String 
    },
    time:{
      type:String
    },
    memberDetails:{
      recentCheckedWeight:{
        type:Number
      },
      targetWeight:{
        type:Number
      },
      height:{
        type:Number
      },
      gender:{
        type:Number
      },
      age:{
        type:Number
      },
      
    }
  },
  attendence:
    [{
      date: {
        type: String
      }, present: {
        type: Boolean
      }
    }],
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        required: true,
      },
    },
  ],

});


userSchema.pre("save", async function (next) {
  if (this.isModified("Password")) {
    this.Password = await bcrypt.hash(this.Password, 12);
  }
  next();
});




const UserData = mongoose.model("UserData", userSchema);

module.exports = UserData;
