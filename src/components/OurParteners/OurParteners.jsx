import Slider from "react-slick";
import './ourpartener.css'
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
const OurPartener = () => {
  const [ourPartnerData, setOurPartnerdata] = useState([])
  const getOurPartnerdata = async () => {
    try {
      const response = await axios.get("https://ct-backend-apis.onrender.com/get-our-partner-data");
      if (response.status === 200) {
        setOurPartnerdata(response.data.getdata)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getOurPartnerdata()
  }, [])

  const settings = {
    loop: 2,
    slidesToShow: 6,
    slidesToScroll: 2,
    autoplay: true,
    arrows: false,
    speed: 1500,
    autoplaySpeed: 2500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
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
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },

    ]

  };

  return (
    <div id="our-partener-div">
      {/* <h2 id="our-partner-heading">Our Parteners</h2> */}
      <Slider {...settings} className="mt-5">
        {ourPartnerData.map((items, i) => {
          return (
              <div className="logo-div" key={i}>
              <img src={items.companyLogo} alt="img1"/>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}
export default OurPartener