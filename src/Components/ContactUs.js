
import React, { useState } from 'react'
import './ContactUs.css';
import ContinueButton from './ContinueButton';
import Footer from './Footer'
 




const ContactUs = () => {
    const [value, setValue]= useState({
    name:"",
    email:"",
    password:""

    })
    const changeHandler = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setValue({...value, [name]:value})
    }
  return (
    <div>
      <div className='contact-container'>
      <div className='contact-inputs'>
          <h1>Say Hello!</h1>
              <form className='contact-input'>
              <input type="text" value={value.name} placeholder='Your name' name='name' id='name' onChange={changeHandler}/>
          <input type="text" value={value.email} placeholder='Enter email' name='email' id='email' onChange={changeHandler}/>
          <input type="password" value={value.password} placeholder='Enter password' name='password' id='password' onChange={changeHandler}/>
            <select className='contact-select' name='reason' id='reason' value={value.reason} onChange={changeHandler}>
                <option >
                    Select reason
                </option>
                <option>
                    Select reason
                </option>
                <option>
                    Select reason
                </option>
                <option>
                    Select city
                </option>
            </select>
            <select className='contact-select'>
                <option>
                    Select city
                </option>
                <option>
                    Select city
                </option>
                <option>
                    Select city
                </option>
                <option>
                    Select city
                </option>
            </select>
            </form>
      </div>
      <div>
          <textarea className='contact-textarea' placeholder='Comment'/>
      </div>
      <ContinueButton name="Submit" destination="/" />
      </div>
      <Footer/>
    </div>
  )
}

export default ContactUs
