
import React from 'react'
import { Link } from 'react-router-dom';
import './Detail.css';
import {AiOutlineClose} from 'react-icons/ai'
import  Footer from './Footer'

const Detail = () => {
  return (
    <div>
      <div className='detail_container'>
          <Link to='/card' className='cancel_btn'><AiOutlineClose/></Link>
        <h1>Details of service you need</h1>
        <p className="detail_p">Your salary budget is less than market standard. We might not be able to find a maid in Your budget.</p>
        <Link to="/salary">  <button className='detail_btn detail_right_btn'>REVISE THE SALARY</button> </Link> 
     <Link to="/more-details"><button className='detail_btn detail_left_btn'>CONTINUE IN THE SAME SALARY</button>  </Link> 

      </div>
      < Footer/>
    </div>
  )
}

export default Detail
