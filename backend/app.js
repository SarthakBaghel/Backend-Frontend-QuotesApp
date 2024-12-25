require('dotenv').config()

const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const seedDB = require('./seed')
const cors = require('cors')
const quoteRoutes = require('./apis/quotesRoutes')


mongoose.connect(`${process.env.MONGO_URL}`)
.then(function(){
    console.log('DB CONNECTED');
    
})
.catch(function(){
    console.log('DB NOT CONNECTED');
    
})

// seedDB();

//body parsing middlewares
app.use(express.urlencoded({extended:true})); // req.body is undefined without this middleware 
app.use(express.json()) 
//can always look up to express docs 

app.use(cors())

//api will run here
app.use(quoteRoutes)



PORT = process.env.PORT || 8080
app.listen(PORT,()=>{
    console.log(`connected at port ${PORT}`);
})