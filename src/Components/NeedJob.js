import React from "react";
import ContinueButton from "./ContinueButton";
import "./NeedJob.css";
import Footer from "./Footer";
import { AiFillCamera } from "react-icons/ai";
import {useState} from 'react'

const NeedJob = () => {

  const [upload, setUpload] =useState({documentOne:'',
  documentTwo:'',
  documentThree:'',
  documentFour:''
})
const uploadHandler =(e)=>{
  const files= e.target.files;
  const name= e.target.name;
setUpload({...upload, [name]:files})
}
const [jobDetail, setJobDetail ] =useState({
  fullName:'',
  mobileNumber: '',
  email:'',
  yearsOfExperience:'',
  earning:'',
  age:'',
  petFriendly:'',
  educationLevel:'',
  familyBackground:'',
  jobLocation:'',
  jobType:'',
  daysOfWork:'',
  language:'',
  contactTime:'',
  startingTime:''

})
const jobHandler =(e)=>{
  const name= e.target.name;
  const value= e.target.value; 
setJobDetail({...jobDetail, [name]:value })
}
  return (
    <div>
      <div className="need-job-top-container">
        <p className="need-job-top-container-p">Need a job? </p>
        <form className="need-job-top">
          <input
          onChange={jobHandler}
          required
            type="text"
            name="fullName"
            value={jobDetail.fullName}
            id="fullName"
            placeholder="Full name"
          />
          <input
          onChange={jobHandler}
          required
            type="tel"
            name="mobileNumber"
            value={jobDetail.mobileNumber}
            id="mobileNumber"
            placeholder="Mobile number"
          />
          <input
          required
          onChange={jobHandler}
            type="text"
            name="email"
            value={jobDetail.email}
            id="email"
            placeholder="Your email"
          />
          <input
          onChange={jobHandler}
            type="number"
            name="age"
            value={jobDetail.age}
            id="fullName"
            placeholder="Your age"
          />
          <input
          onChange={jobHandler}
          required
            type="text"
            name="familyBackground"
            value={jobDetail.familyBackground}
            id="familyBackground"
            placeholder="Your family background"
          />

          <select name="language" value={jobDetail.language} id='language' required onChange={jobHandler}>
            <option>Language</option>
            <option>Language</option>
            <option>Language</option>
            <option>Language</option>
          </select>
          <select name="jobLocation" value={jobDetail.jobLocation} id='jobLocation' required onChange={jobHandler}>
            <option>Select job location</option>
            <option>Language</option>
            <option>Language</option>
            <option>Language</option>
          </select>
          <select name="jobType" value={jobDetail.jobType} id='jobType' required onChange={jobHandler}>
            <option>What type of job do you need?</option>
            <option>Language</option>
            <option>Language</option>
            <option>Language</option>
          </select >
          <select name="educationLevel" value={jobDetail.educationLevel} id='educationLevel' required onChange={jobHandler}>
            <option> Select education level</option>
            <option>Language</option>
            <option>Language</option>
            <option>Language</option>
          </select>
          <input
          onChange={jobHandler}
          required
            type="text"
            name="yearsOfExperience"
            value={jobDetail.yearsOfExperience}
            id="yearsOfExperience"
            placeholder="Years of work experience"
          />
          <select name="daysOfWork" value={jobDetail.daysOfWork} id='daysOfWork' required onChange={jobHandler}>
            <option> How many days a week do you want to work?</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
          </select>
          <input
            type="text"
            name="earning"
            value={jobDetail.earning}
            id="earning"
            placeholder="How much do you want to earn?"
            required
            onChange={jobHandler}
          />
          <div className="need-job-radio">
            <p>
              Are you pet-friendly? <input type="radio" name="petFriendly" value={upload.petFriendly} id='petFriendly' onChange={uploadHandler}/> Yes
              <input type="radio" name="petFriendly" value={jobDetail.petFriendly} id='petFriendly' onChange={jobHandler}/> No
            </p>
          </div>
          <select name="startingTime" value={jobDetail.startingTime} id='startingTime' onChange={jobHandler}>
            <option> How soon can you start?</option>
            <option>Right away</option>
            <option>In a week time</option>
            <option>In a month time</option>
          </select>
          <select name="contactTime"  value={jobDetail.contactTime} id='contactTime' onChange={jobHandler}>
            <option> When is a good time to contact you?</option>
            <option>Any time</option>
            <option>Morning</option>
            <option>Afternoon</option>
            <option>Evening before 8:00pm</option>
          </select>
        </form>

        <div className="need-job-top-heading">
          <p className="need-job-para">Additional information</p>
          <p className="need-job-top-heading-p">
            Please fill out this box if you have additional information you need
            your employer to know
          </p>
        </div>
        <div className="need-job-top">
          <input
          onChange={jobHandler}
            type="text"
            name="travelRequirement"
            value={jobDetail.travelRequirement}
            id="travelRequirement"
            placeholder="Travel requirement"
            required
          />
          <input
          onChange={jobHandler}
            type="text"
            name="medicalCondition"
            value={jobDetail.medicalCondition}
            id="medicalCondition"
            placeholder="Medical condition"
            required
          />
          <input
          onChange={jobHandler}
            type="text"
            name="specificCondition"
            value={jobDetail.specificCondition}
            id="specificCondition"
            placeholder="Specific condition"
          />
        </div>

        <div className="need-job-top-p">

          <p>Upload these documents for better employment options</p>
        </div>
        <form className="need-job-top">
          <label className="file-button">
           <span>Travel requirement</span> {<AiFillCamera className="need-job-icon"/>}
            <span>
              <input className="need-job" name="documentOne" type="file" onChange={uploadHandler}/>
            </span>
          </label>
          <label className="file-button">
          Travel requirement {<AiFillCamera className="need-job-icon"/>}
            <span>
              <input className="need-job" name="documentTwo" value="" type='file' onChange={uploadHandler} required/>
            </span>
          </label>
          <label className="file-button">
           Travel requirement {<AiFillCamera className="need-job-icon"/>}
            <span>
              <input className="need-job" name="documentThree" value="" type='file' onChange={uploadHandler} required/>
            </span>
          </label>
          <label className="file-button">
            Travel requirement {<AiFillCamera className="need-job-icon"/>}
            <span>
              <input className="need-job" name="documentFour" value="" type='file' onChange={uploadHandler} required/>
            </span>
          </label>
        </form>
        <div className="need-job-continue">
          <ContinueButton destination="/end-card" name="Continue" type='Submit' />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NeedJob;
