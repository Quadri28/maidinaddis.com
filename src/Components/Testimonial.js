
import React, { useEffect, useState } from 'react';
import './Testimonial.css';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import {FiInstagram}from 'react-icons/fi'
import {ImLinkedin2} from 'react-icons/im'
import maid from '../images/maid.png'
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'


const Data =[
  {
    id:1,
    name:"Mahesh Agarwa",
    testimonial:'I am from Dehli and moved to Bangalore. I am working in infosys as a Sr manager. I recently became a father and both of us are working. I wanted a reliable babycaretaker for my daughter and contacted bookmybai.',
    icons1: <BsStarFill/>,
    icons2: <BsStarHalf/>,
    icon1: <FaFacebook/>,
    icon2: <FaTwitter/>,
    icon3: <FiInstagram/>,
    icon4:<ImLinkedin2/>,
    image:'maid'

  },
  {
    id:2,
    name:"Mahesh Agarwa",
    testimonial:'I am from Dehli and moved to Bangalore. I am working in infosys as a Sr manager. I recently became a father and both of us are working. I wanted a reliable babycaretaker for my daughter and contacted bookmybai.',
    icons1: <BsStarFill/>,
    icons2: <BsStarHalf/>,
    icon1: <FaFacebook/>,
    icon2: <FaTwitter/>,
    icon3: <FiInstagram/>,
    icon4:<ImLinkedin2/>,
    image:'maid'

  },
  {
    id:3,
    name:"Mahesh Agarwa",
    testimonial:'I am from Dehli and moved to Bangalore. I am working in infosys as a Sr manager. I recently became a father and both of us are working. I wanted a reliable babycaretaker for my daughter and contacted bookmybai.',
    icons1: <BsStarFill/>,
    icons2: <BsStarHalf/>,
    icon1: <FaFacebook/>,
    icon2: <FaTwitter/>,
    icon3: <FiInstagram/>,
    icon4:<ImLinkedin2/>,
    image:'maid'

  },
  {
    id:4,
    name:"Mahesh Agarwa",
    testimonial:'I am from Dehli and moved to Bangalore. I am working in infosys as a Sr manager. I recently became a father and both of us are working. I wanted a reliable babycaretaker for my daughter and contacted bookmybai.',
    icons1: <BsStarFill/>,
    icons2: <BsStarHalf/>,
    icon1: <FaFacebook/>,
    icon2: <FaTwitter/>,
    icon3: <FiInstagram/>,
    icon4:<ImLinkedin2/>,
    image:'maid'

  },
  {
    id:5,
    name:"Mahesh Agarwa",
    testimonial:'I am from Dehli and moved to Bangalore. I am working in infosys as a Sr manager. I recently became a father and both of us are working. I wanted a reliable babycaretaker for my daughter and contacted bookmybai.',
    icons1: <BsStarFill/>,
    icons2: <BsStarHalf/>,
    icon1: <FaFacebook/>,
    icon2: <FaTwitter/>,
    icon3: <FiInstagram/>,
    icon4:<ImLinkedin2/>,
    image:'maid'

  },
  
]
const Testimonial = () => {
const [size, setSize ] = useState(window.innerWidth)
const handleResize = ()=>{
  setSize(window.innerWidth)
}

useEffect(()=>{
  window.addEventListener('resize', handleResize)
}, [])
  return (
    <div>
<h1 className='testimonial-heading'>Why our clients love us</h1>
    <Swiper 
    modules={[ Pagination]}
      spaceBetween={10}
      slidesPerView={size > 768? 3 : 1 }
      pagination={{ clickable: true }}
      >

{Data.map((data)=>{
const {name, icon1, icon2,icon3, icon4, testimonial, image, icons1, icons2, id}=data
return <SwiperSlide key={id} >
  <div className='testimonial-wrapper'> 
  <div className='stars'>
  <span>{icons1}</span>
  <span>{icons1}</span>
  <span>{icons1}</span>
  <span>{icons1}</span>
  <span>{icons2}</span>
</div>
<p className='testimonial-line'>
  {testimonial}
</p>

<div className='social-footer'>
        <p>{name}</p>
        <div className='socials'>
            <span> <a href="/">{icon1} </a></span>
            <span> <a href='/'>{icon2} </a></span>
            <span> <a href='/'>{icon3} </a></span>
            <span> <a href='/'>{icon4} </a></span>
            </div>
        </div>
  <img src={maid} alt={image} className="testimonial-image"/>

  </div>
  </SwiperSlide>
})}

  </Swiper>
  </div>
  )
}

export default Testimonial;
