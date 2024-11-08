import React from 'react'
import './socialMedia.css'
const SocialMedia = () => {
    let socialMediaIconArr = [{ imgUrl: "https://img.freepik.com/premium-vector/blue-social-media-logo_197792-1759.jpg", href:"/fb" }, {imgUrl:"https://img.freepik.com/premium-vector/modern-badge-logo-instagram-icon_578229-124.jpg?w=2000", href:"/insta"}, {imgUrl:"https://e1.pngegg.com/pngimages/589/288/png-clipart-clay-os-6-a-macos-icon-twitter-tweeter-icon.png", href:"/tweeter"}, {imgUrl:"https://cdn3.iconfinder.com/data/icons/sociocons/256/linkedin-sociocon.png", href:"/insta"}]
    return (
        <div id='social-media-main-container'>
            <h2>Social Media</h2>
            <p>Don’t Miss To Follow Us On Our Social
                Networks Accounts</p>
            <div id='social-media-icon'>
                {socialMediaIconArr.map((items, i) => {
                    return(
                        <div >
                        <a href={items.href}>
                            <img src={items.imgUrl} alt="" srcset="" />
                        </a>
                    </div>
                    )
                   
                })}

        
            </div>
        </div>
    )
}

export default SocialMedia
