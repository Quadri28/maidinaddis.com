import React, { useState } from 'react'
import ContinueButton from './ContinueButton'
import './About.css';
import Footer from './Footer'

const About = () => {
    const [name, setName] =useState("")
    const [number, setNumber] =useState("")
    const [email, setEmail] =useState("")
    const [password, setPassword] =useState("")
    const [city, setCity] = useState("")

const nameHandler=(e)=>{
    setName (e.target.value)
}
const emailHandler=(e)=>{
    setEmail (e.target.value)
}
const numberHandler=(e)=>{
    setNumber (e.target.value)
}
const passwordHandler=(e)=>{
    setPassword (e.target.value)
}
const cityHandler=(e)=>{
    setCity (e.target.value)
}

  return (
    <div>
      <div className='about_container'>
          <p className='about_container_p'>Tell us more about yourself</p>
             <form className='about_inputs'>
          <input name='name' value={name} placeholder="Your name" onChange={nameHandler}/>
          <input name='number' type="number" value={number} placeholder="Mobile number" onChange={numberHandler}/>
          <input name='email' type="email" value={email} placeholder="Your email" onChange={emailHandler}/>
          <select name='city' value={city} className="about_select" onChange={cityHandler}> 
          <option>Select City </option>
          <option>Select City </option>
          <option>Select City </option>
          <option>Select City </option>
          <option>Select City </option>
          <option>Select City </option>
          <option>Select City </option>
          <option>Select City </option>

          </select>
          <input name='password' type="password" value={password} placeholder="Enter new password" onChange={passwordHandler}/>
          <input name='name' placeholder="Re-type password"/>
          </form>
          
          <div className='about_continue'>
          <ContinueButton destination="/login" name="Continue"/>
      </div>
      <div>
      <small className='about-account'>I already have an account on maidinaddis</small>
      <p className='about-spans'>By clicking on Join now, I accept the<span className='smallie'><a href='terms'> <i> terms of use </i></a> </span> <i>and </i> <span className='smallie'><a href='privacy'><i>privacy policy </i></a></span> of maidinaddis.com</p>
      </div>
      </div>
     <Footer/>
    </div>
  )
}

export default About
