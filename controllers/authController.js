const { SECRET } = require("../config");
const db = require("../models");
const User = db.user;
const Role = db.role;
const LogHistory = db.logHistory;

//var fs = require('fs');
//var path = require('path');

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


//Signup ad save hashed password on the DB
exports.signup = (req, res) => {
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        idNumber: req.body.idNumber,
        email: req.body.email,
        adress: req.body.adress,
        city: req.body.city,
        phoneNumber: Number(req.body.phoneNumber),
        joinedDate: Date(req.body.joinedDate),
        password: bcrypt.hashSync(req.body.password, 8),
        roles:[],//req.body.roles,
        /*img: {
            data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.image)),
            contentType: 'image/png'
        }*/
    });
    console.log("requested for signup controller...",user);

    user.save((err, user) => {
        if (err) {
            console.log("request error for signup controller...",err);
            res.status(500).send({ message: err });
            return;
        }

        Role.find(
            {
                name: { $in: req.body.roles }
            },
            (err, roles) => {
                if (err) {
                    res.status(500).send({ message: err });
                    return;
                }

                user.roles = roles.map(role => role._id);
                user.save(err => {
                    if (err) {
                        console.log("request role error for signup controller...",err);
                        res.status(500).send({ message: err });
                        return;
                    }

                    res.send({ message: "User was registered successfully!" });
                    console.log("requested for signup successfull...",res)

                });
            }
        );
    });
};


//Signing in and returning the JWT token funtion
exports.signin = (req, res) => {
    console.log("------------------------------------------------------------------signin back---------------------------------------------------------------------------------",req.body.email);

    User.findOne({
        email: req.body.email
    })
        .populate("roles", "-__v")
        .exec((err, user) => {
            console.log("--------user----------",user);

            if (err) {
                res.status(500).send({ message: err });
                return;
            }

            if (!user) {
                console.log("--------user not found..invalid email");

                return res.status(404).send({ message: "Incorrect Email!" });
            }

            var passwordIsValid = bcrypt.compareSync(
                req.body.password,
                user.password
            );

            if (!passwordIsValid) {
                console.log("--------....password invalid");
                return res.status(401).send({
                    accessToken: null,
                    message: "Incorrect Password!"
                });
            }

            var token = jwt.sign({ id: user.id }, SECRET, {
                expiresIn: 86400 // 24 hours
            });

            var authorities = [];

            for (let i = 0; i < user.roles.length; i++) {
                authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
            }

            const logHistory = new LogHistory({
                useID:user._id,
                dateTime:new Date().toLocaleDateString(),
            })

            logHistory.save()
            .then(() => {console.log("--------user log  added to log history");})
            .catch((err) => {
                //res.status(400).json("DataBase Error " +err);
                console.log("user log history Error:", err);});

            res.status(200).send({
                id: user._id,
                username: user.firstName ,
                email: user.email,
                roles: authorities,
                accessToken: token,
                expiresIn: "86400"
            });
        });
};


//Singout by clearing client-side token data
exports.signout = (req, res) => {
    res.status(200).send({ auth: false, token: null });
};