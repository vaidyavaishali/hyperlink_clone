import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import './jobDescription.css'
import { FaBriefcase } from 'react-icons/fa'
const JobDescriptionPage = () => {
    const [jobData, setJobData] = useState({})
    const { id } = useParams()

    const navigate = useNavigate()

    const getJobDescriptionData = async () => {
        try {
            const response = await axios.get(`https://ct-backend-apis.onrender.com/get-our-opportunity-data/${id}`)
            // console.log(response.data.getdata)
            setJobData(response.data.getdata)
        } catch (error) {
            console.log(error)
        }


    }

    useEffect(() => {
        getJobDescriptionData()
    }, [])
    console.log(jobData)

    return (
        <div id='one-job-desc-container'>
            <div id='job-desc-inner-container'>
                <div className='job-role-desc'>
                    <h2>{jobData.jobRole}</h2>
                    <h5>{jobData.jobLocation}</h5>
                </div>

                <div id='jd-location-experience-salery-container'>
                    <p> <FaBriefcase /> From 4 to 9 year(s) of experience</p>
                    <p> <strong>₹ {' '}</strong>{' '}  Not Disclosed</p>
                </div>
                <div id='job-description'>
                    <h5 id='jd'>Job Description</h5>
                    <div dangerouslySetInnerHTML={{__html:jobData.jobDescription}}/>
                </div>
                <button id='apply-btn' onClick={() => navigate(`/career/apply-here/${jobData.jobRole}`)}>Apply Now</button>
            </div>

        </div>
    )
}

export default JobDescriptionPage
