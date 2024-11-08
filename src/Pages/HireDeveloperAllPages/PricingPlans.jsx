import React from 'react'

const PricingPlans = () => {
    return (
        <div id='our-pricing-plans-main-container'>
            <div id='heading-container'>
                <h1>Our Pricing Plans</h1>
                <p>  Hire Dedicated resources from Hyperlink InfoSystem Starts from</p></div>
            <div id='pricing-plans-inner-container'>
                {/* <div id='ttt'> */}
                    <div id='pricing-plans-content-container'>
                        <h1 style={{  fontFamily:"Franklin Gothic Medium Arial Narrow"}}>Hourly</h1>
                        <p style={{  fontFamily:"Franklin Gothic Medium Arial Narrow"}}>For short-term project or need a specialized service, hire our skilled App developers on an hourly basis</p>
                        <p id='pricing-paragraph'>
                            <span>₹ 23.00 / </span>hour

                        </p>
                        <button id='pricing-hire-now-btn'>Hire Now</button>
                    </div>
                    <div id='pricing-plans-content-container'>
                        <h1 style={{  fontFamily:"Franklin Gothic Medium Arial Narrow"}}>Project Based</h1>
                        <p style={{  fontFamily:"Franklin Gothic Medium Arial Narrow"}}>For short-term project or need a specialized service, hire our skilled App developers on an hourly basis</p>
                        <p id='pricing-paragraph'>
                            <span>₹ 23.00 / </span> per project

                        </p>
                        <button id='pricing-hire-now-btn'>Hire Now</button>
                    </div>
                  
               

            </div>
        </div>
    )
}

export default PricingPlans
