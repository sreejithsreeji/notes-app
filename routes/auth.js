const express=require('express');
const router=express.Router();
const authController=require('../controllers/authcontroller.js');
const validater=require('../validaters/validater.js');

router.post('/register',validater.validate,(req,res)=>{
    console.log('registration routes');
    authController.register(req,res);
});



router.post('/login',(req,res)=>{
    console.log('login routes')
    authController.login(req,res);
})

router.post('/logout',(req,res)=>{
    authController.logout(req,res);
})




module.exports=router;