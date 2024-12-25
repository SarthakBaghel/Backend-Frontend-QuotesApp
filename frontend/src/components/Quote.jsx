import axios from "axios"
import { useNavigate } from "react-router"

function Quote(props) {
  const navigate = useNavigate()
  // function handleShow(){
  function handleShow(id){
    // navigate(`/quotes/${props.id}`)
    navigate(`/quotes/${id}`)
  }
  async function handleDelete(id){
    await axios.delete(`http://localhost:5050/quotes/${id}/delete`)
    navigate('/')
  }
  
  return (
    <div className=" flex flex-col flex-1 justify-center items-center p-8" >
        <div className="flex flex-col p-7 w-full max-h-fit justify-center items-center border-2 border-slate-500 rounded-lg ">
        <p className="font-mono text-orange-500 text-2xl leading-normal text-center">{props.text}</p>
        <h5 className="mt-8 text-start text-slate-500 text-lg font-thin"> - {props.author}</h5>
        {/* <button onClick={handleShow}>View Quote</button> */}
      </div>
      <div className="flex gap-4 justify-center items-center">
        
        <button className="text-sm mt-6 bg-blue-400 rounded-full focus:ring focus:ring-blue-200 p-3 " onClick={()=>handleShow(props.id)}>View Quote</button>
        <button className="text-sm mt-6 bg-red-400 rounded-full focus:ring focus:ring-red-200 p-3 " onClick={()=>handleDelete(props.id)}>Delete Quote</button>
        
      </div>
    </div>
  )
}

export default Quote