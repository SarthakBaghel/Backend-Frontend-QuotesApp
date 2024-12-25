import React from 'react'
import {Link} from 'react-router-dom'

function MainNavigation() {
  return (
    <div className='flex h-10 w-full p-10 justify-between items-center bg-[#f6bd60]'>
        <h2 className='text-2xl font-serif font-semibold '><Link to='/'>All Quotes app</Link></h2>
          <ul className='flex gap-5 text-pretty font-serif'>
            <li><Link to='/'>Visit all quotes</Link></li>
            <li><Link to='/new'>Visit new quotes</Link></li>  
          </ul>
    </div>
  )
}

export default MainNavigation