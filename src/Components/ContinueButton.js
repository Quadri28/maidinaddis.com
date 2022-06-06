import './ContinueButton.css'
import React from 'react'
import { Link } from 'react-router-dom'
const ContinueButton = (props) => {
  return (
    <div>
       <Link to={props.destination}> <button type={props.type} class="btn btn-secondary button">{props.name}</button></Link>
    </div>
  )
}

export default ContinueButton
