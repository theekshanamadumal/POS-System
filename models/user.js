const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema= new Schema(
  {
    idNumber: {type: String,unique: true,required: true, trim: true,minlengthe: 5,},
    firstName: {type: String,required: true, trim: true},
    lastName: {type: String,required: true, trim: true},
    image: {type: String},
    password: {type: String,required: true, trim: true},
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ],
    address:{type: String, trim: true},
    city:{type: String, trim: true},     
    phoneNumber: {type: Number, trim: true,lengthe: 10,},
    email: {type: String, unique: true,trim: true,minlengthe: 5,},
    joinedDate: {type: Date,required: true, trim: true}

  },
  { timestamps: true }
);
/*
const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
  })
);

module.exports = User;
*/
const User = mongoose.model('users',userSchema);

module.exports=User;