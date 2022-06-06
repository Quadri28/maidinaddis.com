import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'
const Card = () => {
  return (
    <div>
      <div className='card-container'>
      <div className='top-div'></div>
        <div className='card'>
          <div className='brand'>
            <span>MIA</span>
     <div> <p>maidinaddis.com</p>
      <h2>Welcome to maidinaddis</h2>
      </div>
      </div>
    
      <div className='buttons'>
         <div>
             <Link to="/home" > <button className='btns'>I AM LOOKING TO HIRE A MAID</button></Link>
              </div>
         <div> <Link to="/need-job"><button className='btns'>I AM LOOKING FOR A JOB</button></Link>
          <Link to="/need-job"><button className='btns'>MUJHE KA'M CHAHI HUN</button></Link>
          <Link to="/need-job"><button className='btns'>Lore ipsum dolloit</button></Link>
          <Link to="/need-job"><button className='btns'>+ ADD A LANGUAGE</button></Link>
          </div>
      </div>
      
      </div>
      </div> 
      
    </div>
  )
}

export default Card;
