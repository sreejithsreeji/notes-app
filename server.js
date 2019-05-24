const express=require('express');
const app=express();
const http=require('http');
const server=http.createServer(app);
require('dotenv').config();

const  bodyParser = require('body-parser');
const morgon=require('morgan');

app.use(morgon('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


//routes
const authRoutes=require('./routes/auth');
const noteRoutes=require('./routes/notes');


app.use('/api/v1/auth',authRoutes);
app.use('/api/v1/notes',noteRoutes);

server.listen(process.env.PORT,()=>{
    console.log(`server listening on port ${process.env.PORT}`);
})