import React, { useEffect, useState } from 'react'
import './culture.css'
import axios from 'axios';

function Culture() {
    const [cultureData, setCulterdata] = useState([]);
    const [randomImg, setRandomImg] = useState({});
    const [intervalId, setIntervalId] = useState(null);  // Track interval ID

    const getCultureData = async () => {
        try {
            const response = await axios.get("https://ct-backend-apis.onrender.com/get-our-culture-data");
            if (response.status === 200) {
                setCulterdata(response.data.getdata);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getCultureData();
    }, []);

    useEffect(() => {
        if (cultureData.length > 0 && !intervalId) {
            const newIntervalId = setInterval(() => {
                const randomIndex = Math.floor(Math.random() * cultureData.length);
                setRandomImg(cultureData[randomIndex]);
            }, 2000);
            setIntervalId(newIntervalId);
        }

        return () => {
            if (intervalId) {
                clearInterval(intervalId);
                setIntervalId(null);
            }
        };
    }, [cultureData, intervalId]);

    return (
        <div id='culture-main-container'>
            {randomImg &&
                <div id='culture-inner-containt-container'>
                    <div id='culture-inner-first-div'>
                        <h1>Life @ Consciencious Technology</h1>
                            <p className='event-desc' dangerouslySetInnerHTML={{__html:randomImg.eventDescription}}/>
                    </div>
                    <div id='culture-inner-second-div'>
                        <div id='static-disc'>It is a dream to work with Conscientious Technology. The culture, the work atmosphere is very pleasant and suitable for every employee. We take care of our employees like assets of the company.</div>

                        <div id='culture-inner-second--img-div'>
                            <img src={randomImg.eventImage} alt={randomImg.eventName} />
                            <h5 className='event-name'>{randomImg.eventName}</h5>
                        </div>

                    </div>
                </div>
            }

        </div>
    )
}

export default Culture
