
import React, { useState } from 'react'
import { FaCheckCircle,FaLink } from 'react-icons/fa'
import {HiOutlineIdentification} from 'react-icons/hi'
import {RiFolderUserLine} from 'react-icons/ri'
import './Trust.css';

const Trust = () => {
  const [isActive, setIsActive] = useState("")
  return (
    <div>
        <div className='circular-end-wrapper' >
          <div>  <h1>We're big on trust & safety</h1>
            <p>Maids go through an extensive vetting process before they are shorlisted on bookmybai.com</p>
            </div>
            </div >
            <div className='circular-end-container'>
      <div id='#'className={isActive === '#' ? 'circular-end active' : 'circular-end'} onClick={(e)=>{setIsActive('#')}}>
    <HiOutlineIdentification className='circular-end-icon'/>
    <p>Identity Check</p>
      </div>
      <div id='##' className={isActive === '##'?'circular-end active' : 'circular-end'} onClick={(e)=>{setIsActive('##')}}>
        <FaCheckCircle className='circular-end-icon'/>
        <p>Document verification</p>
      </div>
      <div id='###' className={isActive === '###'?'circular-end active' : 'circular-end'} onClick={(e)=>{setIsActive('###')}}>
<FaLink className='circular-end-icon'/>
<p>In-person interview</p>
      </div>
      <div id="####"className={isActive === '####'?'circular-end active' : 'circular-end'} onClick={(e)=>{setIsActive('####')}}>
        <RiFolderUserLine className='circular-end-icon'/>
        <p>Training Session</p>
      </div>
      </div>
    </div>
  )
}

export default Trust
