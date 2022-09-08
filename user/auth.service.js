var jwt = require('jsonwebtoken');

const AuthController = {};

const secretKey = 'epc*Ym1PF2RPP76%DlDt6X7NB1gXv^b4Li9i@th2R7D1wVT!tD'

AuthController.isAuthenticated = 
(req,res,next)=>
{   
    var header=req.header.Authorization;    
    if(!header)
    {
        next();
    }
    else
    {
        var token = header.split('Bearer')[1].trim();
    
    if(jwt.verify(token, secretKey))
    {
        next();
    }
    else
    {
        res.status(501).json({ok: false, error: 'Effettuare il login'});
    }
    }
    
}

AuthController.newToken=
(req,res)=>
{
    const token = jwt.sign(req.body.userid, secretKey);
    res.status(201).json({ok: true, token: token});
}

module.exports = AuthController;