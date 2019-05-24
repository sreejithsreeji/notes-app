const util=require('../shared/util.js');
const con=require('../dbconfig.js');
const moment=require('moment');
const register=(user)=>{

    const data={
        email:user.email,
        password:util.getHash(user.password),
        first_name:user.firstname,
        last_name:user.lastname,
        address:user.address,
        token:util.getHash(user.email+moment().valueOf()),
        created_at:moment().format(),
        token_created_at:moment().format()
    }
    const email=user.email;
    return new Promise((resolve,reject)=>{
        getUser(email)
        .then(user=>{
           // console.log(user)
            if(user.length===0){
                const sql='insert into users set ?';
                con.query(sql,[data],(err,rows,fields)=>{
                    if(err) {
                        reject(err)
                    }else{
                        resolve({token:data.token})
                    }
                })
    
            }else{
                resolve(false)
            }
        })
    })
}

const loginManager=async (email,password)=>{

    const users=await login(email,password);
    if(users.length>0){
        const data=await updateToken(email);
        const token={
            token:data.token
        }
        return [Object.assign({},users[0],token)];
    }else{
        return([])
    }

}
const login=(email,password)=>{


    const sql='select id,token,token_created_at from users where email=? and password=?';
    return new Promise((resolve,reject)=>{
        con.query(sql,[email,util.getHash(password)],(err,rows,fields)=>{
            if(err) reject(err);
            resolve(rows);
        })
    })

}

const generateToken=(email)=>{
    return util.getHash(email+moment().valueOf())
}

const updateToken=(email)=>{
    const data={
        token:generateToken(email),
        token_created_at:moment().format()
    }
    const sql='update users set ? where email=?';
    return new Promise((resolve,reject)=>{
        con.query(sql,[data,email],(err,rows,fields)=>{
            if(err) reject(err);
            resolve({token:data.token});
        })
    })
}

const getUser=(email)=>{
    const sql='select id,first_name,last_name,token from users where email=?';
    return new Promise((resolve,reject)=>{
        con.query(sql,[email],(err,rows,fields)=>{
            if(err) reject(err);
            resolve(rows);
        })
    })
}

const logout=(email)=>{
    const sql='update users set ? where email=?';
    const data={
        token:null,
        token_created_at:moment().format()
    }
    return new Promise((resolve,reject)=>{
        con.query(sql,[data,email],(err,rows,fields)=>{
            if(err) reject(err);
            resolve(rows);
        })
    })
}

const getTokenDetails=(token)=>{
    const sql='select id,token,token_created_at from users where token=?';
    return new Promise((resolve,reject)=>{
        con.query(sql,[token],(err,rows,fields)=>{
            if(err) reject(err);
            resolve(rows);
        })
    })
}

/*getTokenDetails('d56e4c9c7425fb388bb79897a8ea3c2aea8195fcab14867eb19048765411a7ff')
.then(data=>{
    console.log(data);
})*/

module.exports={
    register,
    loginManager,
    updateToken,
    getTokenDetails,
    logout
}