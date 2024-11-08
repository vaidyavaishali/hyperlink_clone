
import React from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify';
import { RiCheckLine, RiCloseLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom';
import { FaExclamationCircle } from 'react-icons/fa';

import axios from 'axios';
import Swal from 'sweetalert2'
import './serviceTech.css'
import OurPartener from '../../components/OurParteners/OurParteners'

import { Link, useParams } from 'react-router-dom'
import ServiceWeOfferPage from '../../components/ServiceWeOffer/ServiceWeOffer';
import { useEffect } from 'react';
const sum_var1 = Math.floor(Math.random() * 10);
const sum_var2 = Math.floor(Math.random() * 10);
const sum = sum_var1 + sum_var2;

const ServiceTech = () => {

    const { techName } = useParams()
    console.log(techName)
    const [dataByTechName, setdataByTechName] = useState([])
    const navigate = useNavigate()
    const getDataByTechName = async () => {
        try {
            const { data } = await axios.get(`https://ct-backend-apis.onrender.com/get-techservice-page-data-by-one-techservice/${techName}`)
            setdataByTechName(data)
            console.log(data)
        } catch (error) {

        }
    }


    useEffect(() => {
        getDataByTechName()
        window.scrollTo(0, 0);
    }, [techName])

    const [correctSum, setCorrectSum] = useState(false);
    const [inputData, setInputData] = useState({
        fullName: '',
        email: '',
        contactNo: '',
        address: '',
        message: '',
        sum: '',
    });

    const handleSumChange = (e) => {
        const enteredSum = parseInt(e.target.value);
        setCorrectSum(enteredSum === sum);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!correctSum) {
            toast.error('Please enter the correct sum.', {
                icon: <FaExclamationCircle style={{ color: 'red' }} />,
                position: toast.POSITION.TOP_CENTER,
            });
            return;
        }

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
                    message: '',
                    sum: ''
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
        <div>
            <div id='heading-page-div'>
                <div className='service-tech-heading-content' id='service-tech-heading-first' >
                    <h1>{dataByTechName.techService} {dataByTechName.developmentCategory} Company</h1>
                    <p>{dataByTechName.techSubtitle}</p>
                    <button id="get-in-touch" onClick={() => navigate("/contactus")}>Get a Quotes</button>
                </div>
                <div className='service-tech-heading-img'>
                    <img src={dataByTechName.techImage} alt="" />
                </div>

            </div>

            <OurPartener />

            <div id='over-view-container'>
                <div id='overview-para'
                    dangerouslySetInnerHTML={{ __html: dataByTechName.techDescription }} />
                <div id='right-container'>
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
                            <fieldset id='sum-fieldset'>
                                <label htmlFor="sum">Please Enter Sum</label> <br />
                                {sum_var1} + {sum_var2} =
                                <input type="text" name="sum" placeholder='Enter Sum' id='sum' onChange={(e) => { handleSumChange(e) }} />
                            </fieldset>
                            <button id='over-view-container-get-send'>
                                Send {" "} &#10230;

                            </button>
                        </form>
                    </div>




                </div>



            </div>
            <ServiceWeOfferPage />

        </div>
    )
}

export default ServiceTech
