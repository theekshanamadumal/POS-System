const db = require("../models");
const User = db.user;

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
        User.find({roles:this.roleType})
        .then((category) => res.json(category))
        .catch((err) => res.status(400).json("Error: " + err));
    }


// Static method
    addUser(req,res ) {
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const idNumber = req.body.idNumber;

        const selectedImage = req.body.image;
        const imgData = selectedImage.buffer;
        console.log(imgData)

        const imgcontentType = "image/jpg";
        const image= {data: imgData, 
                        contentType: imgcontentType};

        const password = req.body.password;
        const roles = this.roleType;
        const address = req.body.address;
        const city = req.body.city;
        const phoneNumber = Number(req.body.phoneNumber);
        const email = req.body.email;
        const joinedDate = Date(req.body.joinedDate);

        const newUser = new User({
            firstName,
            lastName,
            idNumber,
            image,
            password,
            roles,
            address,
            city,
            phoneNumber, 
            email,
            joinedDate
        });
        console.log("new user c:",newUser);
        newUser
            .save()
            .then(() => res.json("User added!"))
            .catch((err) => res.status(400).json("Error: " + err));
           
        return res;

    }

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
        user.image =image;
        user.password = req.body.password;
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


/*
exports.admin = (req, res) => {
    res.status(200).send("Admin Content.");
};

exports.manager = (req, res) => {
    res.status(200).send("Manager Content.");
};

exports.salesperson = (req, res) => {
    res.status(200).send("Salesperson Content.");
};
*/