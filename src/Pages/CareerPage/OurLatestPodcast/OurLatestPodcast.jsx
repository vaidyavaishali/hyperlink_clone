import React from 'react'
import './latestpodcast.css'
const OurLatestPodcast = () => {
    return (
        <div id='latest-podcast'>
            <div id='latest-podcast-heading-div'>               
                <h1>Our Latest Podcast</h1>                
                <span id='listen-tech'>Listen Technology Based Podcast Hosted By Hyperlink<br></br> InfoSystem.</span>
                <button>View All {" "} <span id='view-all-arrow'>{" "} &#10230;</span>  </button>
            </div>
            <div id='latest-podcast-cart-div'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
               
            </div>

        </div>
    )
}

export default OurLatestPodcast
