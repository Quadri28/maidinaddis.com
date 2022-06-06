
import React from 'react'
import './WhyUs.css';
import { FaClock,  FaClipboardList, FaAward } from 'react-icons/fa';
import { MdHomeRepairService } from 'react-icons/md';
import {VscArrowSwap} from 'react-icons/vsc';
import {BsShieldShaded} from 'react-icons/bs'
const WhyUs = () => {
  return (
    <div>
      <div className='why-us-container'>
        <h2>Why Us?</h2>
        <div className='why-us-containers'>
      <div className='why-us'>
       <p  className='why-us-icon'>{<FaClock/>} </p>
      <p className='why-us-title'>Quick & Easy </p>
      <p className='why-us-description'>No need for maid to come for interview. Search- View profile- Select</p>
      </div>
      <div className='why-us'>
      <p  className='why-us-icon'> <BsShieldShaded/> </p>
      <p className='why-us-title'>Safe & Reliable </p>
      <p className='why-us-description'>Your safety is our first priority. We do a thorough background check on every maid </p>
      </div>
      <div  className='why-us'>
        <p  className='why-us-icon'>< FaClipboardList/></p>
      <p className='why-us-title'>Multiple Options </p>
      <p className='why-us-description'>Watch as many profile as you want. Select only the one you find best</p>
      
     </div>

      <div className='why-us'>
        <p className='why-us-icon'> <FaAward/></p>
      <p className='why-us-title'>High Quality </p>
      <p className='why-us-description'>Only skilled maids are registered with us</p>
     
      </div>
      <div className='why-us second-to'>
        <p className='why-us-icon'> <VscArrowSwap/></p>
      <p className='why-us-title'>Free Replacement </p>
      <p className='why-us-description'>If the maid leaves for any reason withing 6 months of joining, we will replace... </p>
      </div>
      <div className='why-us'>
        <p  className='why-us-icon'> <MdHomeRepairService/></p>
      <p className='why-us-title'>Service </p>
     < p className='why-us-description'>We are not just another maid agency. We have strong ethics and customers</p>
     
      </div>
      </div>
      </div>
    </div>
  )
}

export default WhyUs
