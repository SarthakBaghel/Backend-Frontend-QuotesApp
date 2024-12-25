const express = require('express')
const Quote = require('../models/Quote')
const router = express.Router()
const mongoose = require('mongoose')

router.get('/allquotes',async (req,res)=>{
    try{
        let allQuotes = await Quote.find({});
        // res.status(200).send(allQuotes)    // status to check if everything is good
        res.status(200).json(allQuotes)
        // res.status(200).json({data:allQuotes})
    }
    catch(e){
        res.status(400).json({msg:'something went wrong'})
    }
})

//route to show a form -> now by react 

//add a new quote 
router.post('/allquotes',async (req,res)=>{
    try{
        let {text,author} = req.body //all the data filled on react part we will get on req.body
        //by default req.body is undefined we have to use middleware (urlencoded wala)
        await Quote.create({text,author})
        res.status(201).json('new quote created successfully')
    }
    catch(e){
        res.status(400).json({msg:'Something went wrong'})
    }
})

//show a particular quote
router.get('/quotes/:id',async(req,res)=>{
    try{
        let {id} = req.params
        let quote = await Quote.findById(id)
        res.status(200).json(quote)

    }
    catch(e){
        res.status(400).json({msg:'Something went wrong'})
    }
})

//delete a particular quote
router.delete('/quotes/:id/delete',async(req,res)=>{
    try{
        let {id} = req.params
        let quote = await Quote.findByIdAndDelete(id)
        res.status(200).json(quote)
    }
    catch(e){
        res.status(400).json({msg:'Something went wrong'})
    }
})





module.exports = router