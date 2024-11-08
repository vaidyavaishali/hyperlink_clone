import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2'
import { toast } from 'react-toastify';
import { RiCheckLine, RiCloseLine } from 'react-icons/ri'
import { FaExclamationCircle } from 'react-icons/fa';
const OverviewComponet = (props) => {

    const [inputData, setInputData] = useState({
        fullName: '',
        email: '',
        contactNo: '',
        address: '',
        message: '',
        devCategory:''

    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateClient(inputData)) {
            return;
        }

        try {
            const response = await axios.post(
                'https://ct-backend-apis.onrender.com/add-hiredev-data',
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
    console.log(props.overview)

    return (
        <div id='over-view-container'>

            {/* <div id='overview-para-hire' dangrouslySetInnerHTML={{ __html: props.overview.description }} /> */}
            <div id='overview-para-hire'>{props.overview.description}</div>
            <div id='hire-right-container'>
                <div id='hire-form-container'>
                    <form action="" onSubmit={()=>{handleSubmit(); setInputData({...inputData, devCategory:props.overview.devloperTitle})}}>
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
                            <textarea name="message" id="" cols="50" rows="1" placeholder='Your message' value={inputData.message} onChange={(e) => { setInputData({ ...inputData, message: e.target.value }) }}></textarea>
                        </fieldset>

                        <button id='over-view-container-get-send'>
                            Send {" "} &#10230;

                        </button>
                    </form>
                </div>
                <div id='our-pricing-plans'>
                    <h4>Our Pricing Plan</h4>
                    <p>Hire App Developers Starts from,</p>
                    <div id='our-pricing-plans-inner-div'>
                        <div id='pricing-div'>
                            <p id='hourly'>Hourly</p>
                            <p><span id='price-span'>₹ 23.00 </span> / hour</p>
                        </div>
                        <div id='hirenow-btn-container'>
                            <div id='hirenow-btn'>
                                Hire Now
                            </div>
                        </div>

                    </div>
                    <div id='our-pricing-plans-inner-div'>
                        <div id='pricing-div'>
                            <p id='hourly'>Project Based</p>
                            <p><span id='price-span'>₹ 23.00 </span> / per project</p>
                        </div>
                        <div id='hirenow-btn-container'>
                            <div id='hirenow-btn'>
                                Hire Now
                            </div>
                        </div>

                    </div>

                </div>
            </div>



        </div>
    )
}

export default OverviewComponet
