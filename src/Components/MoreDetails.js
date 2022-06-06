
import React from 'react';
import ServiceSpecification from './ServiceSpecification';
import MoreDetailsSelect from './MoreDetailsSelect';
import './MoreDetails.css';
import Footer from './Footer';

const MoreDetails = () => {
  return (
    <div>
    <div className='more-detail-container'>
        <MoreDetailsSelect/>
        <ServiceSpecification/>

    </div>
    <Footer/>
    </div>
  )
}

export default MoreDetails
