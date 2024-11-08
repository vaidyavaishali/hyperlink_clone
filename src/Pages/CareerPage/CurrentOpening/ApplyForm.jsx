import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './applyForm.css'
import { useState } from 'react'
import axios from 'axios';

import Swal from 'sweetalert2'


const ApplyForm = () => {
  const { jobrole } = useParams()
  console.log(jobrole)


  const [inputData, setInputData] = useState({ firstName: "", lastName: "", email: "", phone: "", address: "", pincode: "", city: "", state: "", applyingPosition: { jobrole }, emplyomentType: "", expectedSalary: "", expectedJoining: "", expectedAvailableInterviewDate: "", preferedLocation: "", highestQualification: "", fresherOrExperience: "", PassingDate: "", ExperienceCompanyName: "", ExperiencePosition: "", startDate: "", endDate: "", file: null });

  const [experienceField, setExperienceField] = useState(false)

  const formData = new FormData();

  formData.append("firstName", inputData.firstName)
  formData.append("lastName", inputData.lastName)
  formData.append("email", inputData.email)
  formData.append("phone", inputData.phone)
  formData.append("address", inputData.address)
  formData.append("state", inputData.state)
  formData.append("applyingPosition", inputData.applyingPosition)
  formData.append("emplyomentType", inputData.emplyomentType)
  formData.append("expectedSalary", inputData.expectedSalary)
  formData.append("expectedJoining", inputData.expectedJoining)
  formData.append("expectedAvailableInterviewDate", inputData.expectedAvailableInterviewDate)
  formData.append("preferedLocation", inputData.preferedLocation)
  formData.append("highestQualification", inputData.highestQualification)
  formData.append("fresherOrExperience", inputData.fresherOrExperience)
  formData.append("PassingDate", inputData.PassingDate)
  formData.append("file", inputData.file)
  formData.append("pincode", inputData.pincode)

  const initialInputData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    pincode: "",
    city: "",
    state: "",
    applyingPosition: "",
    emplyomentType: "",
    expectedSalary: "",
    expectedJoining: "",
    expectedAvailableInterviewDate: "",
    preferedLocation: "",
    highestQualification: "",
    fresherOrExperience: "",
    PassingDate: "",
    ExperienceCompanyName: "",
    ExperiencePosition: "",
    startDate: "",
    endDate: "",
    file: "",
  };

  const navigate = useNavigate()

  const navigateToCareer = () => {
    navigate("/career");
  };

  const handleapplyNow = async (e) => {
    e.preventDefault()
    console.log(inputData)
    console.log(inputData.fresherOrExperience)
    try {

      if (inputData.firstName && inputData.lastName && inputData.email && inputData.phone && inputData.address && inputData.state && inputData.emplyomentType && inputData.expectedSalary && inputData.expectedJoining && inputData.expectedAvailableInterviewDate && inputData.preferedLocation && inputData.highestQualification && inputData.fresherOrExperience && inputData.PassingDate && inputData.file && inputData.pincode) {
        const response = await axios.post("https://ct-backend-apis.onrender.com/apply-now", formData);
        if (response.status === 201) {
          Swal.fire({
            icon: 'success',
            title: `Successfully Applied for ${jobrole}`,
            showConfirmButton: true,
          }).then((result) => {
            if (result.isConfirmed) {
              navigateToCareer();
            }
          });
        }
      } else {
        alert("all field required")
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    setInputData({ ...inputData, applyingPosition: jobrole })
  }, [jobrole])




  return (
    <div id='job-apply-form'>
      <form onSubmit={handleapplyNow}>
        <div id='form-header'>
          <h3>Apply Now</h3>
          <h5>{jobrole}</h5>
        </div>
        <div id='personal-info'>
          <h4>Personal Info</h4>
          <fieldset id='full-name-fieldset' className='fieldset'>
            <input type="text" name="" id="" placeholder='First Name*' value={inputData.firstName} onChange={(e) => { setInputData({ ...inputData, firstName: e.target.value }) }} />
            <input type="text" name="" id="" placeholder='Last Name*' value={inputData.lastName} onChange={(e) => { setInputData({ ...inputData, lastName: e.target.value }) }} />
          </fieldset>

          <fieldset id='full-contact-fieldset' className='fieldset'>
            <input type="email" name="" id="" placeholder='Email*' value={inputData.email} onChange={(e) => { setInputData({ ...inputData, email: e.target.value }) }} />
            <input type="text" name="" id="" placeholder='Contact No.*' value={inputData.phone} onChange={(e) => { setInputData({ ...inputData, phone: e.target.value }) }} />
          </fieldset>


          <fieldset id='full-address-fieldset' className='fieldset'>
            <input type="text" name="" id="" placeholder='Address' value={inputData.address} onChange={(e) => setInputData({ ...inputData, address: e.target.value })} />
          </fieldset>

          <fieldset id='full-city-state-pinCode-fieldset' className='fieldset'>
            <input type="text" name="" id="" placeholder='City' value={inputData.city} onChange={(e) => setInputData({ ...inputData, city: e.target.value })} />

            <input type="text" name="" id="" placeholder='State' value={inputData.state} onChange={(e) => setInputData({ ...inputData, state: e.target.value })} />

            <input type="text" name="" id="" placeholder='PinCode' value={inputData.pincode} onChange={(e) => setInputData({ ...inputData, pincode: e.target.value })} />
          </fieldset>
        </div>

        <div id='position-info'>

          <h4>Position Information</h4>
          <fieldset className='position-info-fieldset'>
            <label>What Is Your Desire Employment ?</label>
            <select className='position-info-input empoyment-type-select' value={inputData.emplyomentType} onChange={(e) => setInputData({ ...inputData, emplyomentType: e.target.value })}>
              <option value="">Select Option</option>
              <option value="FullTime">Fulll Time</option>
              <option value="PartTime">Part Time</option>
              <option value="Internship">Internship</option>
            </select>
          </fieldset>

          <fieldset className='position-info-fieldset desire-pay'>
            <label htmlFor='desirePayinput'> What Is Your Desire Pay ?
              <input type='text' id='desirePayinput' placeholder='Your Expected Salary...' className='position-info-input' value={inputData.expectedSalary} onChange={(e) => setInputData({ ...inputData, expectedSalary: e.target.value })} />
            </label>
          </fieldset>

          <fieldset className='position-info-fieldset'>
            <label>Expected Joining ?</label>
            <select className='position-info-input empoyment-type-select' value={inputData.expectedJoining} onChange={(e) => setInputData({ ...inputData, expectedJoining: e.target.value })}>
              <option value="">Select Option</option>
              <option value="immediate">Immediate</option>
              <option value="within15Days">Within 15 days</option>
              <option value="oneMonth">Within One Month</option>
            </select>
          </fieldset>

          <fieldset className='position-info-fieldset interview-available'>
            <label htmlFor='availableForInterview'>Expected Available Date For Interview ?
              <input type='date' id='availableForInterview' placeholder='Expected available date' value={inputData.expectedAvailableInterviewDate} className='position-info-input' onChange={(e) => setInputData({ ...inputData, expectedAvailableInterviewDate: e.target.value })} />
            </label>
          </fieldset>

          <fieldset className='position-info-fieldset'>
            <label htmlFor='preferedLocation'>Prefered Location?</label>
            <input type='text' id='preferedLocation' placeholder='Prefered Location' value={inputData.preferedLocation} className='position-info-input' onChange={(e) => setInputData({ ...inputData, preferedLocation: e.target.value })} />
          </fieldset>
        </div>

        <div id='qualification-info'>
          <h4>Qualification</h4>
          <fieldset className='qualification-info-fieldset'>
            <label htmlFor='desirePayinput'> What Is Your Highest Qualification ?</label>
            <select className='position-info-input empoyment-type-select' value={inputData.highestQualification} onChange={(e) => setInputData({ ...inputData, highestQualification: e.target.value })}>
              <option>Select Your Qualification</option>
              <option value="BE/B.Tech">BE/B.Tech</option>
              <option value="BCA/BSC">BCA/BSC/BCom/BBA</option>
              <option value="MCA/MSC/MCM">MCA/MSC/MCM/MBA/MCom</option>
              <option value="Other">Other</option>
            </select>
          </fieldset>

          <fieldset className='qualification-info-fieldset'>
            <label htmlFor='yearOfPassing' onChange={(e) => setInputData({ ...inputData, PassingDate: e.target.value })}>Date Of Passing ?</label>
            <input type='date' id='yearOfPassing' placeholder='Date Of Passing' value={inputData.PassingDate} className='position-info-input' onChange={(e) => setInputData({ ...inputData, PassingDate: e.target.value })} />

          </fieldset>

          <fieldset className='qualification-work-experience-info-fieldset'>
            <label id='are-you-fresher-question'>Are You Fresher or Experience</label>
            <input type='radio' id='fresher' name='work-experience' value="fresher" onChange={(e) => { setExperienceField(false); setInputData({ ...inputData, fresherOrExperience: e.target.value }) }} /> <label htmlFor='fresher'>Fresher</label>
            <br />

            <input type='radio' id='experience' name='work-experience' value="experience" onChange={(e) => { setExperienceField(true); setInputData({ ...inputData, fresherOrExperience: e.target.value }) }} /> <label htmlFor='experience'>Experience</label>
          </fieldset>

        </div>

        {
          experienceField ? <div id='work-experience-info'>
            <h4>Work Experience</h4>
            <fieldset className='work-experience-info-fieldset'>
              <label htmlFor='company'> Comapny you worked ?</label>
              <input type='text' id='company' placeholder='Company Name' value={inputData.ExperienceCompanyName} onChange={(e) => setInputData({ ...inputData, ExperienceCompanyName: e.target.value })} />

            </fieldset>
            <fieldset className='work-experience-info-fieldset'>
              <label htmlFor='position'>Position</label>
              <input type='text' id='position' placeholder='Position' value={inputData.ExperiencePosition} onChange={(e) => setInputData({ ...inputData, ExperiencePosition: e.target.value })} />

            </fieldset>

            <fieldset className='work-experience-info-fieldset'>
              <label htmlFor='startDate'>Start Date </label>
              <input type='date' id='startDate' placeholder='' value={inputData.startDate} onChange={(e) => setInputData({ ...inputData, startDate: e.target.value })} />
            </fieldset>
            <fieldset className='work-experience-info-fieldset'>
              <label htmlFor='endDate'>End Date </label>
              <input type='date' id='endDate' placeholder='' value={inputData.endDate} onChange={(e) => setInputData({ ...inputData, endDate: e.target.value })} />
            </fieldset>

          </div> : ""
        }

        <div id='upload-cv'>
          <fieldset className='upload-cv-fieldset'>
            <label htmlFor='resume'>Upload Your Resume (Please upload pdf file) </label>
            <input type='file' id='resume' className='position-info-input' onChange={(e) => setInputData({ ...inputData, file: e.target.files[0] })} />
          </fieldset>

        </div>

        <div id='apply-form-btn'>
          <input type="submit" value="Apply" id='apply-form-btn' />
        </div>
      </form>
    </div>
  )
}

export default ApplyForm
