import React from 'react'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { Routes, Route} from  'react-router-dom';
import Requirement from './Components/Requirement';
import Duration from './Components/Duration';
import EndCard from './Components/EndCard';
import Salary from './Components/Salary';
import Detail from './Components/Detail';
import About from './Components/About';
import Service from './Components/Service';
import MoreDetails from './Components/MoreDetails';
import Login from './Components/Login';
import NeedJob from './Components/NeedJob';
import OurCharges from './Components/OurCharges';
import ContactUs from './Components/ContactUs';
import PostRequirement from './Components/PostRequirement';
import Shortlists from './Components/Shortlists';


const App = () => {
  return (
    <div>
  
      <Navbar/>
     <Routes>
    <Route path='/home' element={<Home/>}/>
    <Route path='/requirement' element= {<Requirement/>} />
    <Route path='/duration' element= {<Duration/>} />
    <Route path='/end-card' element= {<EndCard/>} />
    <Route path='/salary' element= {<Salary/>} />
    <Route path='/detail' element= {<Detail/>} />
    <Route path='/about' element= {<About/>} />
    <Route path='/' element= {<Service/>} />
    <Route path='/more-details' element= {<MoreDetails/>} />
    <Route path='/login' element= {<Login/>} />
    <Route path='/need-job' element= {<NeedJob/>} />
    <Route path='/our-charges' element= {<OurCharges/>} />
    <Route path='/contact-us' element= {<ContactUs/>} />
    <Route path='/post-requirement' element= {<PostRequirement/>} />
    <Route path='/shortlists' element= {<Shortlists/>} />























     </Routes>
      
      
    </div>
  )
}

export default App
