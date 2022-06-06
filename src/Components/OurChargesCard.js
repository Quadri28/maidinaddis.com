import React from 'react'
import { FaCheck,  } from 'react-icons/fa'
import './OurChargesCard.css'
const OurChargesCard = (props) => {
  return (
    <div>
      <div className='plans-container' id={props.id} >
          <div className='plan-div' style={props.style}>
              <h1>{props.plan}</h1> 
          </div>
          <hr/>
          <p><FaCheck className='plan-icon'/> {props.text}</p>
          <p>{props.icon2} {props.title}</p>
          <p> {props.icon3} {props.space}</p>
          <p> {props.icon4} {props.description}</p>

          <hr/>
          <h1>{props.price}</h1>

      </div>
    </div>
  )
}

export default OurChargesCard
