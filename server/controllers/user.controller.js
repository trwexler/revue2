const User = require("../models/user.model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


module.exports = {
    register: (req, res) => {
        const newUser = new User(req.body);
        console.log(newUser); 

        newUser.save()
            .then(()=>{
                console.log("success!");
                res.json({
                    message: "Successly Registered",
                    user: newUser,
                })
            })
            // Possibly update the register method to immediately log them in as they register.
            /*
            .then(user => {
                const userToken = jwt.sign({
                    id: user._id
                }, process.env.SECRET_KEY);
 
            res.cookie("usertoken", userToken, secret, {
                httpOnly: true
                })
                .json({ msg: "success!", user: user });
            })
            .catch(err => res.json(err));
            }
            */
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            })
    },

    login: (req, res) => {
        User.findOne({ email: req.body.email })
            .then((user) => {
                if(user === null){
                    res.status(400).json({ message: "Invalid Login Attempt - 1"});
                    
                } else {
                    bcrypt.compare(req.body.password, user.password)
                        .then((isPasswordValid) => {
                            if(isPasswordValid=== true) {
                                console.log("password is valid");
                                res.cookie("usertoken", 
                                    jwt.sign({
                                        _id: user._id,
                                        email: user.email
                                    },  
                                    process.env.JWT_SECRET),
                                    {
                                        httpOnly: true,
                                        expires: new Date(Date.now() + 999999999)
                                    })
                                    .json(
                                        
                                        {
                                        message: "Successfully logged in",
                                        userLoggedIn: {
                                            firstName: user.firstName,
                                        }
                                    })
                                    
                                    
                            } else {
                                res.status(400).json({ message: "Invalid Login Attempt"})
                            }
                        })
                        .catch((err) => {
                        res.status(400).json({ message: "Invalid Login Attempt"})
                        })
                }
            })
            .catch((err) => {
                res.status(400).json({ message: "Invalid Login Attempt"})
            })
            
    },
    logout: (req, res) => {
        console.log("logging out");
        res.clearCookie("usertoken");
        res.json({message: "you have successfully logged out of our system"});
    },

    getLoggedInUser: (req, res) => {
        const decodedJWT = jwt.decode(req.cookies.usertoken, {complete: true});

        User.findById(decodedJWT.payload._id)
            .then(user => res.json(user))
            .catch(err =>res.json(err));

    },
};

 