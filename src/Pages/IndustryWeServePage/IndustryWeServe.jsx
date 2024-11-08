import React from 'react'
import './industryWeServe.css'
import OurLatestPodcast from '../CareerPage/OurLatestPodcast/OurLatestPodcast'
import { Helmet } from 'react-helmet'
const IndustryWeServe = () => {
    let industriesWeServesAllDetailsArr = [
        { logo: "https://p1.hiclipart.com/preview/346/979/793/shopping-cart-online-shopping-retail-ecommerce-price-shopping-centre-sales-comparison-shopping-website-png-clipart.jpg", industriesname: "Retail, Ecommerce", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto atque deleniti quis officiis eligendi ex earum, laudantium adipisci consequatur, cupiditate error dolores qui facere cum? Omnis consequuntur eum eligend       Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto atque deleniti quis officiis eligendi ex earum, laudantium adipisci consequatur, cupiditate error dolores qui facere cum? Omnis consequuntur eum eligend" },
        { logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5fss2deMtCPH3_x8e4xtr7mu2AHOqnipWiw&usqp=CAU", industriesname: "Education & Learning", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto atque deleniti quis officiis eligendi ex earum, laudantium adipisci consequatur, cupiditate error dolores qui facere cum? Omnis consequuntur eum eligend       Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto atque deleniti quis officiis eligendi ex earum, laudantium adipisci consequatur, cupiditate error dolores qui facere cum? Omnis consequuntur eum eligend" },

        { logo: "https://clipart-library.com/images_k/health-clipart-transparent/health-clipart-transparent-20.jpg", industriesname: "Healthcare & Fitness", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto atque deleniti quis officiis eligendi ex earum, laudantium adipisci consequatur, cupiditate error dolores qui facere cum? Omnis consequuntur eum eligend       Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto atque deleniti quis officiis eligendi ex earum, laudantium adipisci consequatur, cupiditate error dolores qui facere cum? Omnis consequuntur eum eligend" },

        { logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpsCGumAcbD--ZXXgybbLk-cvKVzPr70j85w&usqp=CAU", industriesname: "Food & Restaurant", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto atque deleniti quis officiis eligendi ex earum, laudantium adipisci consequatur, cupiditate error dolores qui facere cum? Omnis consequuntur eum eligend       Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto atque deleniti quis officiis eligendi ex earum, laudantium adipisci consequatur, cupiditate error dolores qui facere cum? Omnis consequuntur eum eligend" },

        { logo: "https://p7.hiclipart.com/preview/741/736/856/multiple-listing-service-real-estate-investing-estate-agent-house-house.jpg", industriesname: "Real Estate", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto atque deleniti quis officiis eligendi ex earum, laudantium adipisci consequatur, cupiditate error dolores qui facere cum? Omnis consequuntur eum eligend       Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto atque deleniti quis officiis eligendi ex earum, laudantium adipisci consequatur, cupiditate error dolores qui facere cum? Omnis consequuntur eum eligend" },

        { logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOT9C95RY8PkKMou8YTYD_DsP2GRKN5hzKGw&usqp=CAU", industriesname: "Social Networking", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto atque deleniti quis officiis eligendi ex earum, laudantium adipisci consequatur, cupiditate error dolores qui facere cum? Omnis consequuntur eum eligend       Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto atque deleniti quis officiis eligendi ex earum, laudantium adipisci consequatur, cupiditate error dolores qui facere cum? Omnis consequuntur eum eligend" },

        { logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0_zl9QCtXzBviscRzxTa3_EkZLaMIxU4EiaeyGwaEV96L8OPOAW48hKbIZOUGRLJvUEM&usqp=CAU", industriesname: "Logistics & Distribution", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto atque deleniti quis officiis eligendi ex earum, laudantium adipisci consequatur, cupiditate error dolores qui facere cum? Omnis consequuntur eum eligend       Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto atque deleniti quis officiis eligendi ex earum, laudantium adipisci consequatur, cupiditate error dolores qui facere cum? Omnis consequuntur eum eligend" },

        { logo: "https://w7.pngwing.com/pngs/627/387/png-transparent-cup-icons-medal-win-game-the-competition-award-sports-symbol-shield-thumbnail.png", industriesname: "Gaming", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto atque deleniti quis officiis eligendi ex earum, laudantium adipisci consequatur, cupiditate error dolores qui facere cum? Omnis consequuntur eum eligend Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto atque deleniti quis officiis eligendi ex earum, laudantium adipisci consequatur, cupiditate error dolores qui facere cum? Omnis consequuntur eum eligend" },

        { logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROUE-VLplH5x2ursPRm_axHebh9S1PipHhPg&usqp=CAU", industriesname: "On-Demand Solutions", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto atque deleniti quis officiis eligendi ex earum, laudantium adipisci consequatur, cupiditate error dolores qui facere cum? Omnis consequuntur eum eligend Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto atque deleniti quis officiis eligendi ex earum, laudantium adipisci consequatur, cupiditate error dolores qui facere cum? Omnis consequuntur eum eligend" }]

    return (
        <div id="industry-we-serve-page-container">
            <Helmet>
                <meta charSet='utf-8' />
                <meta name='description' content='conscintious technology about page' />
                <meta name='keywords' content='aboout page' />
                <title>Industries We Serve | Conscientious technology</title>
            </Helmet>
            <h1>Industries We Serve</h1>
            <p id='tyghh'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo consectetur neque, deserunt earum iusto ab voluptatibus animi nemo eveniet maiores?</p>

            <div className='industries-we-serve-inner-container'>
                {industriesWeServesAllDetailsArr.map((items, i) => {
                    return (
                        <div key={i} className='industries-div'>
                            <img src={items.logo} alt="logo" />
                            <h5>{items.industriesname}</h5>
                            <p className='desc'>{items.description}</p>
                        </div>
                    )

                })}

            </div>

        </div>

    )

}

export default IndustryWeServe
