import React, { useState } from 'react';
import './ServiceSpecification.css'
import { Switch} from 'react-switch-input';
import ContinueButton  from './ContinueButton'

const ServiceSpecification = () => {
  const [check, setCheck] = useState("true")
  const checkHandler = (e)=>{
    setCheck (!check)
    
  }

  const [isOn, setIsOn] = useState("")
  const switchHandler =(e)=>{
    setIsOn (e.target.value)
    setIsOn(!isOn)
  }
  const [selected, setSelected] = useState("true")
  const selectHandler =(e)=>{
    setSelected (e.target.value)
    
  }
  return (
    <div>
     
     <div className='service-specification-p'>
          <p>Select your needs for cleaner</p> 
      </div>
      <div className='body-switches'>
      <div className='switches'>
        <p>Cleaning all rooms</p>
        <Switch className="switch" name='cleaning' onChange={switchHandler}/>
      </div>
      <div className='switches'>
        <p>Ironing clothes</p>
        <Switch name='ironing' onChange={switchHandler}/>
      </div>
      <div className='switches'>
        <p>Washing clothes (By hand)</p>
        <Switch name='washing by hand' onChange={switchHandler}/>
      </div>
      <div className='switches'>
        <p> Washing clothes (With Washing Machine)</p>
        <Switch name='washing with machine' onChange={switchHandler}/>
      </div>
      <div className='switches'>
        <p>Dusting Sweeping Mopping</p>
        <Switch name='otherChores' onChange={switchHandler}/>
      </div>
      <div className='switches'>
        <p> Washing Dishes</p>
        <Switch name='dishWashing' onChange={switchHandler}/>
      </div>
        
      </div>
      <div className='service-specification-p'>
          <p>Select your needs for cook</p> 
      </div>
      <div  className='food-section'>
        <h3> Food Type</h3>
        <h3>Meal Type</h3>
      </div>
      <div className='body-switches'>
      <div className='switches'>
        <p>Vegetarian food</p>
        <Switch name='vegetarian' onChange={switchHandler}/>
      </div>
      <div className='switches'>
        <p>Breakfast</p>
        <Switch name='breakfast' onChange={switchHandler}/>
      </div>
      <div className='switches'>
        <p>Non-vegetarian food</p>
        <Switch name='non-vegetarian' onChange={switchHandler}/>
      </div>
      <div className='switches'>
        <p> Lunch</p>
        <Switch name='lunch' onChange={switchHandler}/>
      </div>
      <div className='switches'>
        <p>Traditional food</p>
        <Switch name='traditional' onChange={switchHandler}/>
      </div>
      <div className='switches'>
        <p> Dinner</p>
        <Switch name='dinner' onChange={switchHandler}/>
      </div>
      <div className='switches'>
        <p> Non-traditional food</p>
        <Switch name='non-traditional' onChange={switchHandler}/>
      </div>
      </div>
      <div className='service-specification-p'>
        <p> Select your needs  for baby sitter</p>
        </div>
        <div className='body-switches'>
        <div className='switches'>
        <p> Select baby'Age</p>
        <select name='age' onChange={selectHandler}> 
        <option>
          1
        </option>
        <option>
          2
        </option>
        <option>
          3
        </option>
        <option>
          4
        </option>
        </select>
      </div>
      <div className='switches'>
        <p>Baby's Gender</p>
       <label htmlFor='gender'>Boy </label> <input type="radio" name='gender' value={check} onClick={checkHandler}/>
       <lable htmlFor="gender">Girl</lable>
        <input type="radio" name='gender' value={check} onClick={checkHandler}/>  

      </div>
      </div>
      <div className='body-switches'>
      <div className='switches'>
        <p>Baby bathing</p>
        <Switch name='bathing' onChange={switchHandler}/>
      </div>
      <div className='switches'>
        <p>Cleaning baby's utensils </p>
        <Switch name='utensils' onChange={switchHandler}/>
      </div>
      <div className='switches'>
        <p>Changing Diaper</p>
        <Switch name='diaper' onChange={switchHandler}/>
      </div>
      <div className='switches'>
        <p> putting baby to sleep</p>
        <Switch name='sleep' onChange={switchHandler}/>
      </div>
      <div className='switches'>
        <p> feeding</p>
        <Switch name='feeding' onChange={switchHandler}/>
      </div>
      <div className='switches'>
        <p> Dinner</p>
        <Switch name='dine' onChange={switchHandler}/>
      </div>
      <div className='switches'>
        <p> Washing baby's clothes</p>
        <Switch name='clothes' onChange={switchHandler}/>
      </div>
      <div className='switches'>
        <p> Taking baby for walk </p>
        <Switch name='cloth' onChange={switchHandler}/>
      </div>
      </div>
      <div>
        <input type="text" value={""} name="otherBabySitting" className='other-baby-sitting' placeholder='Other baby sitting services' />
      </div>
      <div className='service-specification-p'>
        <p> Select your needs  for elderly care</p>
        </div>
        <div className='body-switches'>
          <div className='elderly-select'>
            <select>
              <option> Select age</option>
              <option>60-70</option>
              <option>70-80</option>
              <option>80-90</option>
              <option>90-100</option>
            </select>
          </div>
      <div className='switches'>
        <p>Gender of elderly</p> 
       <input type="radio" name='grand' value={check} onClick={checkHandler}/>
       <label htmlFor='grand'>Boy </label>
        <input type="radio" name='grand' value={check} onClick={checkHandler}/>  
        <lable htmlFor="grand">Girl</lable>
        </div>
     
      <div className='switches'>
      
        <p>Is he/she bed ridden?</p>
       <label htmlFor='oldie'>Yes </label> <input type="radio" name='oldie' value={check} onClick={checkHandler}/>
       <lable htmlFor="oldie">No</lable>
        <input type="radio" name='oldie' value={check} onClick={checkHandler}/>  
      </div>
      <div className='switches'>
        <p> cleaning utensils of elderly</p>
        <Switch name='utensilCleaning' onChange={switchHandler}/>
      </div>
      <div className='switches'>
        <p> Cooking for patient </p>
        <Switch name='cookings' onChange={switchHandler}/>
      </div>
      <div className='switches'>
        <p> Changing diapers </p>
        <Switch name='diapersChanging' onChange={switchHandler}/>
      </div>
      <div className='switches'>
        <p> feeding </p>
        <Switch name='elderly-feeding' onChange={switchHandler}/>
      </div>  <div className='switches'>
        <p> Giving medicines </p>
        <Switch name='medications' onChange={switchHandler}/>
      </div>
      <div className='switches'>
        <p> injection </p>
        <Switch name='injections' onChange={switchHandler}/>
      </div>
      <div className='switches'>
        <p> bathing </p>
        <Switch name='elderlyBathing' onChange={switchHandler}/>
      </div>
      <div className='switches'>
        <p> taking elderly for walk</p>
        <Switch name='walkingElderly' onChange={switchHandler}/>
      </div>
      </div>
      <div>
        <input type="text" value={""} name="otherElderlyService" className='other-baby-sitting' placeholder='Other elderly ervices' />
      </div>
      <div className='service-specification-p'>
        <p>Select your needs for Gardening</p>
      </div>
      <div className='body-switches'>
      <div className='switches'>
        <p> Changing diapers </p>
        <Switch name='grass' onChange={switchHandler}/>
      </div>
      <div className='switches'>
        <p> feeding </p>
        <Switch name='cutting' onChange={switchHandler}/>
      </div>  <div className='switches'>
        <p> Giving medicines </p>
        <Switch name='wetting' onChange={switchHandler}/>
      </div>
      <div className='switches'>
        <p> injection </p>
        <Switch name='can' onChange={switchHandler}/>
      </div>
      <div className='switches'>
        <p> bathing </p>
        <Switch name='bush' onChange={switchHandler}/>
      </div>
      <div className='switches'>
        <p> taking elderly for walk</p>
        <Switch name='cutlass' onChange={switchHandler}/>
      </div>
      </div>
      <div>
        <input type="text" value={""} name="otherElderlyService" className='other-baby-sitting' placeholder='Other gardening services' />
      </div>
      <div className='service-specification-p'>
        <p>Select your needs for Guard</p>
      </div>
      <div className='body-switches'>
      <div className='switches'>
        <p> Cleaning all rooms </p>
        <Switch name='allRoomsCleaning' onChange={switchHandler}/>
      </div>
      <div className='switches'>
        <p> Ironing clothes </p>
        <Switch name='clothesIroning' onChange={switchHandler}/>
      </div>  <div className='switches'>
        <p> Washing clothes (by hands) </p>
        <Switch name='byHand' onChange={switchHandler}/>
      </div>
      <div className='switches'>
        <p> Washing clothes (with washing machine)</p>
        <Switch name='byMachine' onChange={switchHandler}/>
      </div>
      <div className='switches'>
        <p> dusting Sweeping Mopping</p>
        <Switch name='sweepingMopping' onChange={switchHandler}/>
      </div>
      <div className='switches'>
        <p>  Washing Dishes</p>
        <Switch name='dishesWashing' onChange={switchHandler}/>
      </div>
      </div>
      <div>
        <input type="text" value={""} name="otherElderlyService" className='other-baby-sitting' placeholder='Other cleaning services' />
      </div>
      <div className='last-div'>
      <input type='radio' name='workPermit' required onChange={checkHandler}/>
        <p>I allow Maidinaddis.com (Nano Job Consultant Pvt Ltd) to contact me over phone call and sms regarding my requirement</p>
      </div>
     <div className='service-continue-button'>
        <ContinueButton destination='/about' name="Continue"/>
     </div>
    </div>
  )
}

export default ServiceSpecification
