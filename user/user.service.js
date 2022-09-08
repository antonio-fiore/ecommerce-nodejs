const User = require('./user.model');
const bcrypt = require('bcrypt');
const passport = require('passport');

const UserController = {};

UserController.signup = (req,res) =>
{
    const passwordEnc = bcrypt.hashSync(req.body.password,10);
    const newUser = new User({
        email: req.body.email,
        password: passwordEnc,
        name: req.body.name,
        surname: req.body.surname,
    });
    newUser.save((err,user)=>{
        if(err)
        {
            if(err.code===11000)
            {
                res.status(500).json({ok: false, error: "Email già esistente"});
                return;

            }
            res.status(500).json({ok: false, error: err});
 
        }
        else
        {
            return res.status(201).json({
                ok: true,
            });
        }
    });
}

UserController.signin = (req,res,next) =>
{
    const {email,password} = req.body;
    User.findOne({email:email}, (err,data)=>{
        if(err)
        {
            res.status(500).json({ok:false, error: err});
        }
        else
        {
            if(bcrypt.compareSync(password,data.password))
            {
                req.body.userid=data.id;
                console.log(req.body);
                next();
            }
            else
            {
                res.status(500).json({ok:false, error: 'Password errata'});
            }
        }
    });
}

UserController.signinPassport = 

module.exports= UserController;