
import React from 'react'
import './Circular.css';
import { FaHandshake } from 'react-icons/fa';
import {CgProfile} from 'react-icons/cg'
import {RiUserSearchLine} from 'react-icons/ri'
const Circular = () => {
  return (
    <div>
        <div className='circulars'>
      <div className='outermost-div'>
      <div className='icon-div'>
                <RiUserSearchLine className='circular-icons'/>
              </div>
          <div className='inner-div'>
              <div className='inner-div-content'>
              <h2>Search</h2>
              <p>Use our simple Search and tell us what you require. See the list of all the available maids in your area</p>
              </div>
          </div>
      </div>
      <div className='outermost-div'>
      <div className='icon-div'>
                <CgProfile className='circular-icons'/>
              </div>
          <div className='inner-div'>
              <div className='inner-div-content'>
              <h2>Shortlist</h2>
              <p>View the complete profile of the hundreds of available maids and Shortlist as per your preference.</p>
              </div>
          </div>
      </div>
      <div className='outermost-div'>
      <div className='icon-div'>
                <FaHandshake className='circular-icons'/>
              </div>
          <div className='inner-div'>
              <div className='inner-div-content'>
              <h2>Meet, Select & Relax</h2>
              <p> Talk to the maid on the phone or meet her personally. Select the maid and pay only after the maid joins.</p>
              </div>
          </div>
      </div>
      </div>
    </div>
  )
}

export default Circular
