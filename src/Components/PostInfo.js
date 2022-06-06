
import React from 'react'
import { CgClose } from 'react-icons/cg'
import { FaClipboardList, FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import ContinueButton from './ContinueButton';
import './PostInfo.css'




const PostInfo = (props) => {
  return (
    <div>
        <div className='info-container'>
         <Link to="/" >  <CgClose className='close-icon'/> </Link>
            <p className='info-container-p'>{props.title}</p>
       {new Date().getDate() }/ {new Date().getMonth()}/{new Date().getFullYear()}
       <button className='info-icon'> <FaSearch/> Shortlist more maids</button>
           <button className='info-icon'> <FaClipboardList/> View Requirement</button>
          <div className='shortlist-div'> 
            <p>You have not shorlisted any maid</p>
            <ContinueButton destination="/" name="Shortlist now"/>
          </div>
        </div>
    </div>
  )
}

export default PostInfo
