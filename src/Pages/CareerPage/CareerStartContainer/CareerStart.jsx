import React from 'react'
import './careerStart.css'
import { Link } from 'react-router-dom'
function CareerStart() {
    return (
        <div id='career-page-main-container'>
            <p id='home-career-para'><Link to="/" className='text-color'>Home</Link> / <span>Career</span> </p>
            <div id='are-you-fresher'>
                <div id='are-you-fresher-first-div'>
                    <h1>Are You fresher ?</h1>
                    <p className='text-dark'>
                        Let's start your career together. At Hyperlink InfoSystem, we will sharpen your technical to communication skills.
                    </p>
                    <a href="#current-opportunites-main-container">
                        <button id='apply-here-btn'>
                            Apply Here{" "}
                            <span id='apply-here-arrow'>
                                &#10230;
                            </span>
                        </button>
                    </a>
                </div>
                <div id='are-you-fresher-second-div'>
                    <img src="https://theforesight.in/wp-content/uploads/2020/06/Website-Banner-Career-Page-1-1024x493.png" alt="" srcset="" />
                </div>

            </div>
        </div>
    )
}

export default CareerStart