const db = require("../models");
const User = db.user;
const bcrypt = require("bcrypt");

module.exports =  class UserController {
    // Constructor
    constructor(type) {

        var roleType;
        switch (type) {
            case 'Admin':
                this.roleType = '6153648ac5809858d4b761f4'
                break;
            case 'Manager':
                this.roleType = '6153648ac5809858d4b761f2'
                break;
            case 'SalesPerson':
                this.roleType = '6153648ac5809858d4b761f3'
                break;
            default:
                this.roleType=''
                break;
        }
    }

    allUsers(res) {
        let selectType;
        if (this.roleType==='6153648ac5809858d4b761f4'){
            selectType=['6153648ac5809858d4b761f2','6153648ac5809858d4b761f3']
        }
        else{
            selectType=['6153648ac5809858d4b761f3']
        }
        User.find({roles:{$in:selectType}})
        .then((category) => res.json(category))
        .catch((err) => res.status(400).json("Error: " + err));
    }
    countUsers(res) {
        User.countDocuments({roles:'6153648ac5809858d4b761f3'})
        .then((category) => res.json(category))
        .catch((err) => res.status(400).json("Error: " + err));
    }
    countManagers(res) {
        User.countDocuments({roles:'6153648ac5809858d4b761f2'})
        .then((category) => res.json(category))
        .catch((err) => res.status(400).json("Error: " + err));
    }

    userCount(res) {
        User.countDocuments({roles:'6153648ac5809858d4b761f3'})
        .then((count) => res.json(count))
        .catch((err) => res.status(400).json("Error: " + err));
    }
    
// Static method

    getUser(req,res ) {
        console.log('req.params.id')
        console.log(req.params.id)
        User.findById(req.params.id)
        .then((user) => res.json(user))
        .catch((err) => res.status(400).json("Error: " + err));
    }

    deleteUser(req,res ) {
        console.log(req.params.id)
        console.log('req.params.id')
        console.log(req.params.id)
        User.findByIdAndDelete(req.params.id)
          .then(() => res.json("user deleted."))
          .catch((err) => res.status(400).json("Error: " + err));
    }

    updateUser(req,res ) {

        console.log("postedid to controller");

        const selectedImage = req.body.image;
        const imgData = selectedImage.buffer;
        const imgcontentType = "image/jpg";
        const image= {data: imgData, 
                        contentType: imgcontentType};

        User.findById(req.params.id)
        .then((user) => {

        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;
        user.idNumber = req.body.idNumber;
        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;
        user.roles = req.body.roles;
        user.image =image;
        user.password = bcrypt.hashSync(req.body.password, 8);
        user.address = req.body.address;
        user.city = req.body.city;
        user.phoneNumber = Number(req.body.phoneNumber);
        user.email = req.body.email;
        user.joinedDate = Date(req.body.joinedDate);

        user
            .save()
            .then(() => res.json("User updated!"))
            .catch((err) => {res.status(400).json("Data insert Error: " + err), 
            console.log("user update error : ", err)});
        })
        .catch((err) => {res.status(400).json("Data find Error: " + err), 
                        console.log("user update error : ", err)});

                        
    }
}
  
//Test funtions to check authorization
/*exports.admin = (req, res) => {
    res.status(200).send("Admin Content.");
};

exports.manager = (req, res) => {
    res.status(200).send("Manager Content.");
};

exports.salesperson = (req, res) => {
    res.status(200).send("Salesperson Content.");
};*/

