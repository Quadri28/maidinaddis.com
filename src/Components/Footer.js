
import React from 'react'
import './Footer.css';
import {ImFacebook} from 'react-icons/im'
import { TiSocialLinkedin} from 'react-icons/ti'
import {FaTwitter} from 'react-icons/fa'
import {FaBehance} from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
      <div className='footer_container'>
      <div className='footer left'>
        
        <a href="/">
        <div className='left_image'> 
                  <span>MIA</span>
          <small>maidinaddis.com</small>
          </div>
          </a> 
        
        <p className='left_p'>We Are Indians Largest Online Aggregators Of Maids Bureaus. Whether You Are Looking for a maid or a nanny or a patient caretacker in Mumbai, thane, Navy Mumbai, pune, bangalore, surat. You will find the best quality and experinced staff here. </p>
      </div>
        <div className='footer center'>
        <h5>About Maidinaddis.Com</h5>
        <ul className='center_list'>
            <li > <a href='/'>Home</a></li>
           <li > <a href='/'>About Us</a></li>

            <li id='#terms'> <a href='/'>Terms Of Use </a></li>
            <li id='#privacy'> <a href='/'>Privacy Policy</a></li>
            <li> <a href='/'>Blacklisted Maids</a></li>
            <li> <a href='/'>Contact Us</a></li>
        </ul>
        </div>
        <div className='footer right'>  
        <h5>Partner With Us</h5>
        <p className="right_p">
           Are You An Agency Which Supplies Maids/Baby seaters/Patient Care Staff? 
           Partner With Us and earn extra money

        </p>
        </div>
        <div className='footer_icon'>
      <h3>Contact With Us</h3>
        <div className='footer_icons' > <a href='www.facebook.com' alt='facebook'> <ImFacebook/> </a> </div>
        <div className='footer_icons'>  <a href='www.facebook.com' alt='Twitter'><FaTwitter/></a> </div>
        <div className='footer_icons'> <a href='www.facebook.com' alt='Linkedin'> <TiSocialLinkedin/> </a> </div>
        <div className='footer_icons'> <a href='www.facebook.com' alt='Twitter'> <FaBehance/></a> </div>

      </div>
      </div>
     
      <div className='last_part'>
        <h3> © {new Date().getFullYear()} Maidinaddis. All right reserved</h3>
        
      </div>
    </div>
  )
}

export default Footer;
