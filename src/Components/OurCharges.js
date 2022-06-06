import React, { useState } from 'react'
import { FaCheck } from 'react-icons/fa'
import OurChargesCard from './OurChargesCard'
import './OurCharges.css'
import Footer from './Footer'
import {AiOutlineClose} from 'react-icons/ai';

const OurCharges = () => {
  const [selected, setSelected] = useState("")
  return (
    <div>
      <div className='conditions'>
          <h1>Our Charges</h1>
          <p><FaCheck className='conditions-icon'/> You need to pay us a "one-time" fee for finding you a maid.</p>
          <p><FaCheck className='conditions-icon'/> You need to pay this fee to us the day the maid joins.</p>
          <p><FaCheck className='conditions-icon'/> The monthly salary of the maid needs to be given directly to the maid.</p>
      </div>
      <div className='charges-card'>
        <div  className={selected==='basic' ? 'activated' : ''}
          onClick={(e)=>setSelected('basic')}
          id="basic">
          <OurChargesCard 
         
           icon2= {<AiOutlineClose className='plan-close'/>}
           icon3= {<AiOutlineClose className='plan-close'/>}
           icon4= {<AiOutlineClose className='plan-close'/>}
          style={{backgroundColor :"black", }}
          plan="Basic"
           text= "Sample text here"     
           title="other text title"
          space="text space goes here"
        description="Description space" 
        price="$ 2.99"/>
</div>
<div  className={selected==='standard' ? 'activated' : ''}
           onClick={(e)=>setSelected('standard')}
          id="standard">
          <OurChargesCard 
          
          style={{backgroundColor: "#16DDE0"}}
          icon2= {<FaCheck className='plan-icon'/>}
          icon3= {<AiOutlineClose className='plan-close'/>}
          icon4= {<AiOutlineClose className='plan-close'/>}
           plan="Standard"
          text= "Sample text here"
          title="other text title"
          space="text space goes here"
          description="Description space" 
           price="$ 5.99"/>
</div>
<div  className={selected==='premium' ? 'activated' : ''}
           onClick={()=>setSelected('premium')}
          id="premium">
          <OurChargesCard 
          icon2= {<FaCheck className='plan-icon'/>}
          icon3= {<FaCheck className='plan-icon'/>}
          icon4= {<AiOutlineClose className='plan-close'/>}
          
          style={{backgroundColor:"orange"}}
           plan="Premium"
          text= "Sample text here"
          title="other text title"
           space="text space goes here"
           description="Description space" 
           price="$ 8.99"/>
           </div>
      </div>
      <Footer/>
    </div>
  )
}

export default OurCharges
