import React from 'react'
import './ourTeam.css'
import Slider from "react-slick";
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';


const OurTeam = () => {

    const [teamData, setTeamData] = useState([])

    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000, responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3,
                    infinite: true,
                 
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2
                }
            },

        ]
    };


    const getTeamData = async () => {
        try {
            const response = await axios.get("https://ct-backend-apis.onrender.com/get-our-team-data")
            if (response.status === 200) {
                console.log(response)
                setTeamData(response.data.getdata)
            }
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        getTeamData()
    }, [])


    return (
        <div id='our-team'>

            <h2 id='heading'>Meet Our Team</h2>
            <Slider {...settings}>
                {teamData.map((items, i) => {
                    return (
                        <div key={i} className='our-team-inner-div'>
                            <div className='description-container'>
                                <div className='img-div'>
                                    <img src={items.employeeProfile} alt={items.image} className='' />
                                </div>
                                <div id='desc'>
                                <h5 id='emp-name'>{items.employeeName}</h5>
                                <p className='designation'>{items.designation}</p>
                                <p className='role'>{items.employeeRole}</p>
                                </div>
                              
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}

export default OurTeam
