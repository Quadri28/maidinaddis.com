
import React, { useState } from 'react'
import './MoreDetailsSelect.css';

const MoreDetailsSelect = () => {
  const [people, setPeople] = useState("")
  const [adult, setAdult] = useState("")
  const [children, setChildren] = useState("")
  const [room, setRoom] = useState("")
  const [time, setTime] = useState("")
  const [selectto, setSelectto] = useState("")
const peopleHandler =(e)=>{
  setPeople(e.target.value)
}
const adultHandler =(e)=>{
  setAdult(e.target.value)
}
const childrenHandler =(e)=>{
  setChildren(e.target.value)
}
const roomHandler =(e)=>{
  setRoom(e.target.value)
  console.log(e.target.value)
}
const timeHandler =(e)=>{
  setTime(e.target.value)
}
const selecttoHandler =(e)=>{
  setSelectto(e.target.value)
}
  return (
    <div>
      <div className='more-details-p'>
          <p>Few more details about your requirement </p>
      </div>
      <div className='more-details-top'>
    <select className='more-select' value={people} required onChange={peopleHandler}>
        <option>Select number of people in the house</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
    </select>
    <select className='more-select' required value={adult} onChange={adultHandler}>       
         <option>Select number of adults in the house</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        </select>
    <select className='more-select' required value={children} onChange={childrenHandler}>      
      <option>Select number of children in the house</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
    </select>
    <select className='more-select' required value={room} onChange={roomHandler}>
    <option>Select room type</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
    </select>
    <select className='more-select' required value={time} onChange={timeHandler}>
    <option>Select time slot (if any) </option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
    </select>
    <select className='more-select' required value={selectto} onChange={selecttoHandler}> 
    <option>to</option>
    <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
    </select>

      </div>
    </div>
  )
}

export default MoreDetailsSelect;
