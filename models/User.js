const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema= new Schema(
  {
    idNumber: {type: String,required: true, trim: true,minlengthe: 5,},
    firstName: {type: String,required: true, trim: true,minlengthe: 5,},
    lastName: {type: String,required: true, trim: true,minlengthe: 5,},
    image: {type: String,required: true},
    password: {type: String,required: true, trim: true,minlengthe: 5,},
    address:{
      line1:{type: String,required: true, trim: true},
      line2:{type: String,required: true, trim: true},
      city:{type: String,required: true, trim: true},
      district:{type: String,required: true, trim: true},
    }, 
    phoneNumber: {type: Number,required: true, trim: true,minlengthe: 10,},
    email: {type: String,required: true, unique: true,trim: true,minlengthe: 5,},
    joinedDate: {type: Date,required: true, trim: true}

  },
  { timestamps: true }
);

const User = mongoose.model('User',userSchema);

module.exports=User;