
import React from 'react'
import { Link } from 'react-router-dom'
import './Immediate.css'

const Immediate = (props) => {
  return (
    <div>
      
      <div className='immediate-container'>
        <img src={props.image} alt={props.name} className="immediate-image"/>
        <p className='immediate-name'>{props.name}</p>
        <p>{props.skills}</p>
        <p> Salary Expectation: <span>{props.salary}</span></p>
<Link to="/"><button type='button'> Visit Profile </button> </Link>
      </div>
    </div>
  )
}

export default Immediate
