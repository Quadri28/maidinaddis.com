
import React from 'react'
import babysitter from '../images/babysitter.jpg'
import cook from '../images/cook.jpg'
import  farmerman from '../images/farmerman.png'
import guard from '../images/guard.jpg'
import maid from '../images/maid.jpg'
import oldfolks from '../images/oldfolks.png'
import './Services.css'


   

const Services = () => {
  return (

    <div>
      <div className='services-header '>
        <h2> Services</h2>
        </div>
        <div className='services-head'>
<div  className='services-container first'>
        <img src={maid} alt='service-icon' className='icon-image'/>
        <p className='services-title'> 
        House Cleaner
        </p>
        <p className='services-description'> 
          Lorem ipsum dolloit disit cleaner
        </p>
</div>
<div  className='services-container second'>
        <img src={cook} alt='service-icon' className='icon-image'/>
        <p className='services-title'> 
          Cook
        </p>
        <p className='services-description'> 
         Cook Lorem ipsum dolloit disit adam
        </p>
</div>
<div  className='services-container third'>
        <img src={babysitter} alt='service-icon' className='icon-image'/>
        <p className='services-title'> 
        Baby sitter
        </p>
        <p className='services-description'> 
          Baby sitter Lorem ipsum dolloit disit cleaner
        </p>
</div>
<div  className='services-container fourth'>
        <img src={oldfolks} alt='service-icon' className='icon-image'/>
        <p className='services-title'> 
        House Cleaner
        </p>
        <p className='services-description'> 
          Lorem ipsum dolloit disit cleaner
        </p>
</div>
<div  className='services-container fifth'>
        <img src={farmerman} alt='service-icon' className='icon-image'/>
        <p className='services-title'> 
        Gardner
        </p>
        <p className='services-description'> 
         Gardner Lorem ipsum dolloit disit cleaner
        </p>
</div>
<div  className='services-container sixth'>
        <img src={guard} alt='service-icon' className='icon-image'/>
        <p className='services-title'> 
        Guard
        </p>
        <p className='services-description'> 
         Guard Lorem ipsum dolloit disit cleaner
        </p>
</div>

</div>
      </div>
  
  )
}

export default Services
