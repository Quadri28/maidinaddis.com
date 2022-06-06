import ContinueButton from './ContinueButton'
import Footer from './Footer'
import React, { useState } from 'react'
import './Duration.css';

const Duration = () => {
  const [isActive, setIsActive] = useState("")
  return (
    <div>
      <div className='container'>
        <p>Duration Of Employment</p>
        <div className='durations'>
        <div className='right_duration'>
            <div className={isActive==='once'? ' active duration' : 'duration'} onClick={(e)=>{setIsActive('once')}} id='once' >
               <p className='duration_time'>Once A Week</p> 
            <p className='duration_price'>salary up to <span>3,000 - 4,000</span> per month</p>
            </div>
            <div className={isActive==='four'? ' active duration' : 'duration'} onClick={(e)=>{setIsActive('four')}} id='four'>  <p className='duration_time'> four times a week</p>
            <p className='duration_price'>salary up to <span>12,000 - 14,000</span> per month</p>
            </div>
            <div className={isActive==='live-in'? ' active duration' : 'duration'} onClick={(e)=>{setIsActive('live-in')}} id='live-in' > <p className='duration_time'> Live-in </p> 
            <p className='duration_price'>salary up to <span>22,000 - 25,000</span> per month</p>
            </div>
        </div>
        <div className='center_duration'>
            <div className={isActive==='twice'? ' active duration' : 'duration'} onClick={(e)=>{setIsActive('twice')}} id='twice' >  <p className='duration_time'>Twice A Week</p> 
            <p className='duration_price'>salary up to <span>5,000 - 8,000</span> per month</p>
            </div>
            <div className={isActive==='five'? ' active duration' : 'duration'} onClick={(e)=>{setIsActive('five')}} id='five'>  <p className='duration_time'> five times a week</p> 
            <p className='duration_price'>salary up to <span>13,000 - 15,000</span> per month</p>
            
            </div>
        </div>
        <div className='left_duration'>
            <div className={isActive==='three'? ' active duration' : 'duration'} onClick={(e)=>{setIsActive('three')}} id='three'> <p className='duration_time'> Three times A Week</p> 
            <p className='duration_price' > salary up to <span>8,000 - 10,000</span> per month</p>
             </div>
            <div className={isActive==='six'? ' active duration' : 'duration'} onClick={(e)=>{setIsActive('six')}} id='six'>   <p className='duration_time'> six times a week</p> 
            <p className='duration_price'>salary up to <span>17,000 - 20,000</span> per month</p>
            </div>
        </div>
        </div>
       <div className='duration_continue'><ContinueButton destination="/salary" name="Continue"/> </div> 
      </div>
    <Footer/>
    </div>
  )
}

export default Duration
