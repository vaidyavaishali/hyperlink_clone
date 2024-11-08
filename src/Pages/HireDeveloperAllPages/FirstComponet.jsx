import React from 'react'
import { useNavigate } from 'react-router-dom'

const FirstComponet = (props) => {
    const navigate = useNavigate()
    // console.log(props.hiredevData.devloperTitle)
    return (
        <div id='first-component'>
            <div className="first-component-first-div">
                <h2>Hire {props.hiredevData.devloperTitle}</h2>
                <p>{props.hiredevData.subTitle}</p>
                <div id='hire-dev-get-quote-btn' onClick={() => navigate('/career')} className='cursor'>
                    See All Opportunities &#10230;
                </div>
            </div>
            <div className="first-component-second-div">
                <img src={props.hiredevData.image} alt="" srcset="" />
            </div>
        </div>
    )
}

export default FirstComponet
