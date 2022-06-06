
import React from 'react'
import './Shortlist.css';


const Shortlist = (props) => {
  return (
    <div>
     
      <div className='shortlist-container'>
      <div className='left-girl'>
         <div>
          <img src={props.image} alt="Kitchen Girl" className='shortlist-image'/>
          <h1> {props.name} </h1>
          <p> Location: <span className='location'>{props.location} </span></p>
          <p> Experience: <span>{props.experience} </span></p>
          <p> Religion: <span>{props.religion}</span></p>
          <p> Age: <span>{props.age} </span></p>
          </div>
          <div className='btns'>
          <button className='shortlist-btn view-details'>View details</button>
          <button className='shortlist-btn'>Shortlist</button>
          </div>
          </div>
        <div className='right-info'>
            <div className='right-info-container'>
             <div className='icon-heading-div'> {props.icon} {props.title1} </div>
              <div className='inner-info-container'>
               <div className='inner-info-container-inputs'> {props.skill1} <input type='checkbox' name='dusting' value=''/></div>
               <div className='inner-info-container-inputs'> {props.skill2} <input type='checkbox' name='dusting' value=''/></div>
               <div className='inner-info-container-inputs'>{props.skill3} <input type='checkbox' name='dusting' value=''/></div>
               <div className='inner-info-container-inputs'> {props.skill4} <input type='checkbox' name='dusting' value=''/></div>
               <div className='inner-info-container-inputs'> {props.skill5} <input type='checkbox' name='dusting' value=''/></div>
               <div className='inner-info-container-inputs'> {props.skill6} <input type='checkbox' name='dusting' value=''/></div>
              </div>
            </div>
            <div className='right-info-second'>
              <div className='icon-heading-div'>{props.secondIcon} {props.title2} </div>
              <div className='inner-info-container'>
               <div className='inner-info-container-inputs'> {props.skillSet1} <input type='checkbox' value='traditional'/> </div>
                <div className='inner-info-container-inputs'> {props.skillSet2} <input type='checkbox' value='non-traditional'/> </div>

              </div>
            </div>
        </div>
          </div>
    </div>
  )
}

export default Shortlist
