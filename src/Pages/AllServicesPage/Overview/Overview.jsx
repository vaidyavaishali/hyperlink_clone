import React, { useContext, useRef } from 'react'
import './overview.css'
import { useState } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2'
import { toast } from 'react-toastify';
import { RiCheckLine, RiCloseLine } from 'react-icons/ri'
import { FaExclamationCircle } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { CTcontext } from '../../../ContextAPI/createContext';




const Overview = (props) => {
// console.log(props)
    const [inputData, setInputData] = useState({
        fullName: '',
        email: '',
        contactNo: '',
        address: '',
        message: ''
    });

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
                    address: '',
                    message: ''
                })
            }
        } catch (error) {
            console.log(error);
        }
    };


    const showErrorToast = (message) => {
        toast.error(message, {
            icon: <FaExclamationCircle style={{ color: 'red' }} />,
            position: toast.POSITION.TOP_CENTER,
        });
    };

    return (
        <div id='all-service-page-overview-container'>
            <div id='all-service-page-overview-content-container'>
                {/* <h1 id='over-heading-service'>Overview</h1> */}
                {props.Overview && 
                <div id='overview-para-service' dangerouslySetInnerHTML={{ __html: props.Overview.devOverview }} />
                }

            </div>
            <div id='form-container'>
                <form action="" onSubmit={handleSubmit}>
                    <h4>Connect with us</h4>
                    <fieldset>
                        <input type="text" name="name" id="" placeholder='Enter Name' value={inputData.name} onChange={(e) => { setInputData({ ...inputData, fullName: e.target.value }) }} />
                    </fieldset>
                    <fieldset>
                        <input type="email" name="email" id="" placeholder='Enter Email' value={inputData.email} onChange={(e) => { setInputData({ ...inputData, email: e.target.value }) }} />
                    </fieldset>
                    <fieldset>
                        <input type="text" name="phone" id="" placeholder='Enter Phone No.' value={inputData.contactNo} onChange={(e) => { setInputData({ ...inputData, contactNo: e.target.value }) }} />
                    </fieldset>
                    <fieldset>
                        <input type="text" name="phone" id="" placeholder='Enter Address' value={inputData.address} onChange={(e) => { setInputData({ ...inputData, address: e.target.value }) }} />
                    </fieldset>
                    <fieldset>
                        <textarea name="message" id="" cols="50" rows="5" placeholder='Your message' value={inputData.message} onChange={(e) => { setInputData({ ...inputData, message: e.target.value }) }}></textarea>
                    </fieldset>

                    <button id='over-view-container-get-send'>
                        Send {" "} &#10230;

                    </button>
                </form>
            </div>


        </div>
    )
}

export default Overview
