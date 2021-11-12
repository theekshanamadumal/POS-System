const { SECRET } = require("../config");
const db = require("../models");
const User = db.user;
const Role = db.role;
const LogHistory = db.logHistory;


const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


//Signup and save hashed password on the DB
exports.signup = (req, res) => {


//upload photo
console.log("requested for image file...",req.file);

    const user = new User({
        idNumber: req.body.idNumber,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        image: req.file.filename,
        password: bcrypt.hashSync(req.body.password, 8),
        email: req.body.email,
        adress: req.body.adress,
        city: req.body.city,
        phoneNumber: Number(req.body.phoneNumber),
        joinedDate: Date(req.body.joinedDate),
        roles:[],//req.body.roles,
        /*img: {
            data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.image)),
            contentType: 'image/png'
        }*/
    });
    console.log("requested for signup controller...",user);
    console.log("requested for signup controller user image name...",user.image);

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

            //console.log("--------....password req.body.password",req.body.password);
            const password = bcrypt.hashSync(req.body.password, 8);

            //console.log("--------....password req.body.password crypted",password);
            //console.log("--------....password user.password",user.password);

            var passwordIsValid = bcrypt.compareSync(
                req.body.password,
                user.password
                
            );
            console.log("--------....password passwordIsValid",passwordIsValid);


            if (!passwordIsValid) {
                //$2b$08$DMcBRIJKrN/waVyEDgXhGOZsAmwCpJfz7ls/iSdTNiorggBYf1beK
                //console.log("--------....password invalid");
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

            res.status(200).send({
                id: user._id,

                firstName: user.firstName,
                lastName: user.lastName,
                username: user.firstName+' '+user.lastName,
                email: user.email,
                roles: authorities,
                accessToken: token,
                expiresIn: "86400"
            });

            //console.log("--------....userID:user._id,",user._id);


            const logHistory = new LogHistory({
                userID:user._id,
                dateTime:new Date(),
            })

            logHistory.save()
            .then(() => {console.log("--------user log  added to log history");})
            .catch((err) => {    //res.status(400).json("DataBase Error " +err);
                               console.log("user log history Error:", err);
            });


        });
};


//Singout by clearing client-side token data
exports.signout = (req, res) => {
    res.status(200).send({ auth: false, token: null });
};