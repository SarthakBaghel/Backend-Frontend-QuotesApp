import React, { Fragment, useRef } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function NewQuotes() {
  const usernameRefInput =  useRef()
  const quoteRefInput =  useRef()
  let navigate = useNavigate()

  async function addQuoteHandler(e){
    e.preventDefault()
    const author = usernameRefInput.current.value
    const text = quoteRefInput.current.value
    try{
      let resp = await axios.post('http://localhost:5050/allquotes' , {author,text}) //data sent in axios.post in object format
      console.log(resp,'resp post axios');
      navigate('/')
    }
    catch(e){ 
      console.log('cant create a quote');
      
    }
  }
  
  return (
    <div className='bg-[#f7ede2] pt-4 min-h-screen flex flex-col items-center gap-4'>
      <h1 className='text-center mb-5 text-4xl font-bold '>New Quote</h1>
      <div className= 'flex justify-center p-24 w-fit mt-6 border-2 border-amber-500 rounded-xl'>
        <form onSubmit={addQuoteHandler} className='flex flex-col items-center gap-10 '>
          <div className='flex flex-col gap-6'>
            <div className='flex items-center gap-6'>
              <label className='font-serif text-2xl' htmlFor="author">Author:</label>
              <input className='p-4 rounded-lg hover:ring-2 hover:ring-amber-200' type="text" ref={usernameRefInput} id='author' placeholder='Enter Author name'/>
            </div>
            <div className='flex items-center gap-6'>
              <label className='font-serif text-2xl' htmlFor="quote">Quote: </label>
              <textarea className='p-4 rounded-lg hover:ring-2 hover:ring-amber-200 ' ref={quoteRefInput} rows={4} cols={10} type="text"  id='quote' placeholder='Enter Quote name'/>
            </div>
          </div>
          <button className=' w-fit mt-4 p-2 rounded-lg bg-[#f6bd60]'>Add Quote</button>
        </form>
      </div>
    </div>
  )
}

export default NewQuotes