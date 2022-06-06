import React from 'react'
import './Home.css'
import Footer from './Footer'
import {FaMale} from 'react-icons/fa'
import {FaFemale} from 'react-icons/fa'
import { useState } from 'react';
import ContinueButton from './ContinueButton'

const Home = () => {
  const [isActive, setIsActive] = useState("")

  return (
    <div>
    
     <div className='gender_div'>
    <p className='gender_heading'>Which gender do you prefer? </p>
    <div className='inner_container'>
    <div id='male' className={ isActive=== "male" ? 'male people active' : " male people"} onClick={(e)=>setIsActive("male") }>
      <FaMale className= 'center_icon '/> <p>Male</p></div>
    
    <div id='female'  className= { isActive=== "female" ? 'female people active' : "female people"} onClick={(e)=>setIsActive( "female")}>
       <FaFemale className='center_icon'/><p>Female</p>
      
      </div>
    
      <div className={ isActive=== "bi-gender" ? 'bi_gender people active' : " bi_gender people"} id='bi-gender' onClick={(e)=> setIsActive("bi-gender")}>
      <FaMale  className='center_icon'/> <FaFemale className='center_icon'/> <p>Any</p></div>
    </div>
  <ContinueButton destination='/requirement' name='Continue'/>
    </div>
    
    
      <Footer/>
    </div>
  )
}

export default Home
