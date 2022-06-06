import './PostHeader.css';
import { FaLock, FaPen,  FaPlusCircle } from 'react-icons/fa';
import {HiUsers} from 'react-icons/hi';
import { useState } from 'react';


const PostHeader = () => {
  const [isActive, setIsActive] = useState('')
  return (
    <div>
 
    <div className='header-icon-container'>
     
    <div id='#' className={isActive==='#'? 'header-icon-containers activated' : 'header-icon-containers' } onClick={()=>setIsActive('#')}>
      <span>  < FaPen/> </span>
    <p id='#' className={isActive==='#'? 'header-icon-container-p activated' : 'header-icon-container-p' } onClick={()=>setIsActive('#')}>"Edit profile"</p>
     </div>
      <div id='##' className={isActive==='##'? 'header-icon-containers activated' : 'header-icon-containers'} onClick={()=>setIsActive('##')}>
      <span>   
         < FaLock/> </span>
    <p  className={isActive==='##'? 'header-icon-container-p activated' : 'header-icon-container-p' } onClick={()=>setIsActive('##')}>Change password</p>
    </div>
    
     <div id='###' className={isActive==='###'? 'header-icon-containers activated' : 'header-icon-containers'} onClick={()=>setIsActive('###')}>
      <span>  
         < FaPlusCircle/> </span>
    <p  className={isActive==='###'? 'header-icon-container-p activated' : 'header-icon-container-p' } onClick={()=>setIsActive('###')}>Post requirement</p>
     </div>
     <div id='####' className={isActive==='####'? 'header-icon-containers activated' : 'header-icon-containers'} onClick={()=>setIsActive('####')}>
      <span> 
         < HiUsers/>   </span>
    <p  className={isActive==='####'? 'header-icon-container-p activated' : 'header-icon-container-p' } onClick={()=>setIsActive('####')}> Refer friend</p>
     </div>
     </div >
     <div className='large-div'>
       <FaPlusCircle/> Post Requirement
     </div>
    </div>
  )
}

export default PostHeader;