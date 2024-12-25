import React, { useEffect, useState } from 'react'
import Quote from './Quote'
import axios from 'axios'

function AllQuotes() {

  let [quotes,setQuotes] = useState([])

  async function getquotes(){
    let resp = await axios.get('http://localhost:5050/allquotes')
    // console.log(resp,'axios response')
    setQuotes(resp.data)
  }

  //api calling is a side effect always keep under use effect
  useEffect(()=>{ //cannot write async function here directly
    getquotes()
  },[])

  return (
    <div className='bg-[#f7ede2] pt-4'>
      <h1 className='text-center mb-5 text-4xl font-bold '>All Quotes</h1>
    <div className='flex justify-center w-full min-h-screen'>

      <div className='grid grid-cols-3 gap-10 w-[1340px]'>
        {quotes.map((quote,index)=>{
          return(
            <Quote key={index} author={quote.author} text={quote.text} id={quote._id} />
          )
        })}
      </div>
    </div>
    </div>
  )
}

export default AllQuotes