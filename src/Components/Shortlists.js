
import React from 'react'
import Shortlist from './Shortlist'
import './Shortlists.css'
import kitchenGirl2 from '../images/kitchenGirl2.png'
import maid from '../images/maid.png'
import cleanerBoy2 from '../images/cleanerBoy2.png'
import { FaBaby, FaPen } from 'react-icons/fa'
import './Shortlists.css';
import {GiMagicBroom, GiGuards, GiCampCookingPot, GiWateringCan, GiStaticGuard} from 'react-icons/gi'
import { FaBabyCarriage  } from 'react-icons/fa';
import {MdElderly } from 'react-icons/md';

import Footer from './Footer'
import { Link } from 'react-router-dom'

const Shortlists = () => {
  return (
    <div>
       <div className='shortlist-header'>
         < p> 353 maids available for your requirement </p>
        <Link to='/' ><button> <FaPen/> Edit requirement </button> </Link>
      </div>
        <Shortlist
        image= {kitchenGirl2}
        name= "Vijaya Thakur"
        location=" East Kolkata Township"
        experience= "10"
        religion="Hindu"
        age="31 years"
        icon= {<GiMagicBroom />}
        title1="Cleaning"
        skill1="Dusting, sweeping & mopping"
        skill2="Ironing"
        skill3='Dish washing'
        skill4='Machine washing'
        skill5='Grocery shopping'
        skill6='Hand washing'
        secondIcon={<GiCampCookingPot/>}
        title2='Cooking'
        skillSet1='Traditional food'
        skillSet2='Non Vegetarian'
        />
        <Shortlist
        image ={maid}
         name= "K Bishwas"
         location=" East Kolkata Township"
         experience= "10"
         religion="Hindu"
         age="31 years"
         icon={<FaBabyCarriage/>}
         title1='Baby Sitter'
         title2='Elderly Care'
         skill1='Changing Diaper'
         skill2= 'Feeding'
         skill3='Baby Bathing'
         skill4='Preparing Baby Food'
         skill5='Preparing Baby For Sleep'
         skill6='Injection'
         skillSet1='Injection'
         skillSet2='Giving medicine'
         secondIcon={<MdElderly/>}

        />
        <Shortlist 
        image={cleanerBoy2}
        name= "Mamta Dutta"
        location=" East Kolkata Township"
        experience= "10"
        religion="Hindu"
        age="31 years"
        icon= {<GiMagicBroom />}
        title1="Gardeneing"
        skill1="Dusting, sweeping & mopping"
        skill2="Ironing"
        skill3='Dish washing'
        skill4='Machine washing'
        skill5='Grocery shopping'
        skill6='Hand washing'
        secondIcon={<GiStaticGuard/>}
        title2='Guard'
        skillSet1='Traditional food'
        skillSet2='Non Vegetarian'
         />
      <Footer/>
    </div>
  )
}

export default Shortlists
