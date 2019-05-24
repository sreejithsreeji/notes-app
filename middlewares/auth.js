const user=require('../models/user.js');
const moment=require('moment');

const tokenvalidater=(req,res,next)=>{
   
    const token=getTokenFromHeader(req);
    if(token){
        user.getTokenDetails(token)
        .then(tokenDetails=>{
            if(tokenDetails.length>0){
                if(isTokenValid(tokenDetails[0].token_created_at)){
                    console.log('token valid');
                    next();

                }else{
                    console.log('token is expired');
                    res.status(403)
                    .send({
                        code:403,
                        message:'resource forbidden'
                    })
                }
                
            }else{
                res.status(403).send({
                    code:403,
                    message:'resource forbidden'
                })
            }
        })
        .catch(err=>{
            console.log(err);
        })
    }else{
        console.log('token is not present');
        res.status(400).send({
            code:400,
            message:'Bad request'
        })
    }

    const isTokenValid=(createdTime)=>{
        const duration=180;
        const now=moment().valueOf();
        const expiredTime=moment(createdTime).add(duration,'minutes').valueOf();

        if(now<expiredTime){
            return(true)
        }else{
            return(false)
        }
    }
}

const getTokenFromHeader=(req)=>{
    const headers=req.headers;
    //console.log(headers);
    const authorizationToken=headers.authorization;
    if(authorizationToken){
        const token=authorizationToken.split(' ')[1];
        return token;
    }else{
        return(false);
    }
}

module.exports={
    tokenvalidater
}