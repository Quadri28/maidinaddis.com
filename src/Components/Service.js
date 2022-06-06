
import React, { useEffect, useState } from 'react';
import './Service.css';
import ServiceWho from './ServiceWho';
import {GiMagicBroom, GiGuards, GiCampCookingPot, GiWateringCan} from 'react-icons/gi'
import { FaBabyCarriage } from 'react-icons/fa';
import {MdElderly } from 'react-icons/md';
import HowDoesItWork from './HowDoesItWork';
import Circular from './Circular';
import Services from './Services';
import bannerGirl from  '../images/bannerGirl.png'
import Immediately from './Immediately'
import WhyUs from './WhyUs';
import Testimonial from './Testimonial';
import Trust from './Trust';
import Footer from './Footer';
import Popup from 'reactjs-popup';
import Card from  './Card'
import 'reactjs-popup/dist/index.css';


const Service = () => {
  const [selected, setSelected]      = useState('')
  const [isOpen, setIsopen] = useState(window.innerWidth)

  const handleResize=()=>{
        setIsopen(window.innerWidth)
  }
  useEffect(()=>{
          window.addEventListener('resize', handleResize)
  },[])

  return (
    <div>
      <div className='service-top'>
        <div className='service-top-lefty'>
                <p className='service-top-lefty-p'>What do you want your maid to do?</p>
        <div className='service-top-left'>
        <div className= { selected==='#' ? 'service-top-icons active' : 'service-top-icons'} id='#' onClick={(e)=>setSelected('#')}> <GiMagicBroom className='service-top-icon'/> 
                <p>Cleaning</p>
        </div>
        <div className= { selected==='##' ? 'service-top-icons active' : 'service-top-icons'} onClick={(e)=>setSelected('##')} id='##'> <GiCampCookingPot className='service-top-icon'/> 
                <p>Cooking</p>
        </div>
        <div className= { selected==='###' ? 'service-top-icons active' : 'service-top-icons'} onClick={(e)=>setSelected('###')} id='###'> < FaBabyCarriage className='service-top-icon'/> 
                <p>Baby Sitting</p>
        </div>
        <div className= { selected==='####' ? 'service-top-icons active' : 'service-top-icons'}onClick={(e)=>setSelected('####')} id='####'> <MdElderly className='service-top-icon'/> 
                <p>Elderly Care</p>
        </div>
        <div className= { selected==='#####' ? 'service-top-icons active' : 'service-top-icons'}onClick={(e)=>setSelected('#####')} id='#####'> <GiWateringCan className='service-top-icon'/> 
                <p>Gardening</p>
        </div>
        <div className= { selected==='######' ? 'service-top-icons active' : 'service-top-icons'} onClick={(e)=>setSelected('######')} id='######'> <GiGuards className='service-top-icon'/> 
                <p>Guard</p>
        </div>
        </div>
        <Popup trigger={<button className='continue'> Continue </button>} position='top left' contentStyle= {isOpen > 768 ? { width: '55rem',
height:'32rem',
margin:' 0 auto 2rem 12rem',
 boxShadow: '0 0 40rem #ddd'} : {width: '25rem', boxShadow: '0 0 20rem #ddd'}}>

                <Card/>

        </Popup>
        
        </div>
        <div className='service-top-right'>
            <img src={bannerGirl} alt='Cleaner girl' />
        </div>
       
      </div>
              <ServiceWho/>
         <section id='#how-it-works'>
      <HowDoesItWork/>
      </section>
      <Circular/>
      <Services/>
      <Immediately/>
      <WhyUs/>
      <Testimonial/>
      <Trust/>
      <Footer/>
    </div>
  )
}

export default Service
