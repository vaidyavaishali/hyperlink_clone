import React from 'react'
import './contactusForm.css'
import { useState } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2'
import { toast } from 'react-toastify';
import { RiCheckLine, RiCloseLine } from 'react-icons/ri'
import { FaExclamationCircle } from 'react-icons/fa';
import { useEffect } from 'react';


const ContactUsForm = () => {
 

  const [correctSum, setCorrectSum] = useState(false);
  const [inputData, setInputData] = useState({
    fullName: '',
    email: '',
    contactNo: '',
    whatsAppNo: '',
    skypeID: '',
    address: '',
    message: '',
   
  });


  const handleSubmit = async (e) => {
    e.preventDefault();


    if (!validateClient(inputData)) {
      return;
    }

    try {
      const response = await axios.post(
        'https://ct-backend-apis.onrender.com/add-contact-us-data',
        inputData
      );

      if (response.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Thank For Your Response. We Will Reach You Soon.',
          showConfirmButton: true,
        });
        setInputData({
          fullName: '',
          email: '',
          contactNo: '',
          whatsAppNo: '',
          skypeID: '',
          address: '',
          message: ''
        })
      }
    } catch (error) {
      console.log(error);
    }
  };

  const validateClient = (inputData) => {
    if (!inputData.fullName) {
      showErrorToast('Name is required.');
      return false;
    } else if (!inputData.email) {
      showErrorToast('Email is required.');
      return false;
    } else if (!inputData.contactNo) {
      showErrorToast('Contact Number is required.');
      return false;
    } else if (inputData.contactNo.length !== 10) {
      showErrorToast('Contact Number should be 10 digits.');
      return false;
    } else if (isNaN(inputData.contactNo)) {
      showErrorToast('Contact Number should be in digits.');
      return false;
    } else if (!inputData.address) {
      showErrorToast('Address is required.');
      return false;
    }
    return true;
  };

  const showErrorToast = (message) => {
    toast.error(message, {
      icon: <FaExclamationCircle style={{ color: 'red' }} />,
      position: toast.POSITION.TOP_CENTER,
    });
  };


  return (
    <div id='contact-us-form'>
      <form onSubmit={handleSubmit}>
        <fieldset id='full-name-fieldset'>
          <input type="text" name="" id="" placeholder='Full Name*' onChange={(e) => { setInputData({ ...inputData, fullName: e.target.value }) }} value={inputData.fullName} />
          <input type="email" name="" id="" placeholder='Email*' onChange={(e) => { setInputData({ ...inputData, email: e.target.value }) }} value={inputData.email} />
        </fieldset>
        <fieldset id='full-contact-fieldset'>
          <input type="text" name="" id="" placeholder='Contact No*' onChange={(e) => { setInputData({ ...inputData, contactNo: e.target.value }) }} value={inputData.contactNo} />
          <input type="text" name="" id="" placeholder='Whatsapp No.' onChange={(e) => { setInputData({ ...inputData, whatsAppNo: e.target.value }) }} value={inputData.whatsAppNo} />
          <input type="text" name="" id="" placeholder='Skype' onChange={(e) => setInputData({ ...inputData, skypeID: e.target.value })} value={inputData.skypeID} />

        </fieldset>
        <fieldset id='full-address-fieldset'>
          <input type="text" name="" id="" placeholder='Address/Location' onChange={(e) => setInputData({ ...inputData, address: e.target.value })} value={inputData.address} />
        </fieldset>

        <fieldset id="message-textarea-fieldset">
          <textarea name="" id="message-textarea" cols="120" rows="3" placeholder='Write a message(optional)' onChange={(e) => { setInputData({ ...inputData, message: e.target.value }) }} value={inputData.message}></textarea>
        </fieldset>

        <div id='send-btn-div'>
          <input type="submit" value="Send" id='send' />
        </div>
      </form>
    </div>
  )
}

export default ContactUsForm
