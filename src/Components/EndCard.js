
import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineClose} from 'react-icons/ai'
import './EndCard.css'
const EndCard = () => {
  return (
    <div>
      <div className='end_card'>
       <Link to="/"> <span className='end_card_cancel'> <AiOutlineClose/> </span></Link>
          <h1>THANK YOU!</h1>
          <p>Please keep your phone with you during the requested contact time. Also feel free to recommend this service to freinds who are seeking employment </p>
      </div>
    </div>
  )
}

export default EndCard
