const mongoose = require('mongoose')
const Quote = require('./models/Quote')


let dummyArray = [
    {
        text:'jasuu di balle balle ahaa',
        author:'jassu maharaj'
    },
    {
        text:'kis color ki baniyan pehne ho',
        author:'shree shree 420'
    },
    {
        text:'video delete 15 nov tak',
        author:'thara bhai joginder'
    },
    {
        text:'i only believe in jassi bhai',
        author:'SIR DSP SIRAJ'
    }
]



async function seedDB(){
    await Quote.insertMany(dummyArray)
    console.log('Data Seeded')
}

module.exports = seedDB