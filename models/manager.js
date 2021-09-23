      const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema= new Schema(
  {
    idNumber: {type: String,unique: true,required: true, trim: true,minlengthe: 5,},
    firstName: {type: String,required: true, trim: true},
    lastName: {type: String,required: true, trim: true},
    image: {data: Buffer, contentType: String},
    password: {type: String,required: true, trim: true},
    address:{type: String, trim: true},
    city:{type: String, trim: true},     
    phoneNumber: {type: Number, trim: true,lengthe: 10,},
    email: {type: String, unique: true,trim: true,minlengthe: 5,},
    joinedDate: {type: Date,required: true, trim: true}

  },
  { timestamps: true }
);

const Manager = mongoose.model('Manager',userSchema);

module.exports=Manager;