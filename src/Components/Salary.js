
import React from 'react'
import './Salary.css'
import ContinueButton from './ContinueButton';
import Footer from './Footer'
const Salary = () => {
  return (
    <div>
      <div className='salary-container'>
        <p className='salary-p'> The approximate salary for a maid who works 1 hour daily in birr. 3000 to 4000 per month </p>
      <select className='select-salary'>
         <option>Select maximum salary</option>
         <option>Birr. 4000</option>
         <option>Birr. 5000</option>
         <option>Birr. 6000</option>

          </select>
          <div className='salary-continue'><ContinueButton destination="/detail" name="Continue"/></div>
      </div>
      <Footer/>
    </div>
  )
}

export default Salary
