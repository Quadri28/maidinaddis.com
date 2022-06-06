
import React from 'react'
import './Immediately.css'
import Immediate from './Immediate'
import cleanerBoy2  from '../images/cleanerBoy2.png'
import kitchenGirl2  from '../images/kitchenGirl2.png'
import maid from '../images/maid.png'

const Immediately = () => {
  return (
    <div>
      <div className='immediately-wrapper'>
       <div className='immediately-header'>
         <h2>Immediately availabe  <span>24 hours</span> Maids for Addis Ababa </h2>
        </div>
        <div className='immediately-container'>
        <div className='immediately-containers'>
       <Immediate
       image={maid}
       name="Marsi Lakda"
       salary="Rs 1500"
       skills= "cleaner, kitchen helper"
       />
       </div>
       <div className='immediately-containers'>

       <Immediate 
       image={cleanerBoy2}
       name="Sandyarani Kujur"
       salary="Rs 1500"
       skills="cleaner, kitchen helper" 
       />
       </div>
       <div className='immediately-containers'>

       <Immediate
       image={kitchenGirl2}
       name="Basila Sangma"
       salary= "Rs 1500"
       skills="cleaner, kitchen helper"
       />
</div>
</div>
</div>
    </div>
  )
}

export default Immediately
