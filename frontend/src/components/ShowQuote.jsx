import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'

function ShowQuote() {
    let [quote,setQuote] = useState({})
    //to get id from url in bakend we use req.params
    //in react we have a hook
    let params = useParams();
    // console.log(useParams);


    async function handleDelete(id){
        await axios.delete(`http://localhost:5050/quotes/${id}/delete`)
        navigate('/')
    }

    async function fetchQuote() {
        let resp = await axios.get(`http://localhost:5050/quotes/${params.id}`)
        // console.log(resp.data)
        let {text,author} = resp.data
        setQuote({text,author})
    }

    useEffect(()=>{
        fetchQuote()
    },[])


  return (
    <div className='bg-[#f7ede2] min-h-screen pt-4 flex flex-col items-center '>
        <h1 className='text-center mb-5 text-4xl font-bold'>Showing a particular quote</h1>
        <div className='flex flex-col items-center max-w-4xl max-h-fit mt-20'>
            <div className='flex justify-between w-full gap-16 border-2 border-slate-500 rounded-lg p-24'>
                <div className='flex flex-1 justify-center items-center'>
                    <p className='font-serif text-3xl p-6 leading-normal max-w-lg'>{quote.text}</p>
                </div>
                <div className='flex flex-1 justify-center items-center'>
                    <h2 className='text-center text-pretty font-thin text-orange-600 text-4xl p-6'>{quote.author}</h2>
                </div>
            </div>
            <div>
                <button className="text-sm mt-10 bg-red-400 rounded-full focus:ring focus:ring-red-200 p-3 " onClick={()=>handleDelete(params.id)}>Delete Quote</button>
            </div>
        </div>
    </div>
  )
}

export default ShowQuote