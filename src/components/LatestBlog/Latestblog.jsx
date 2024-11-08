import React from 'react'
import './latestBlog.css'
import Slider from 'react-slick';
const Latestblog = () => {
    const latestblog = [{image:"logo1", desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, nemo", date:"11/8/2023"},{image:"logo1", desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, nemo", date:"11/8/2023"},{image:"logo1", desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, nemo", date:"11/8/2023"},{image:"logo1", desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, nemo", date:"11/8/2023"},{image:"logo1", desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, nemo", date:"11/8/2023"},{image:"logo1", desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, nemo", date:"11/8/2023"}]

    const settings = {
        loop:2,
        pauseOnHover: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        arrows: false,
        speed: 1000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
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
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]

    };

    return (
        <div id='latest-blog-container'>
            <div id='latest-blog-heading-container'>
                <h1>Latest Blogs</h1>
                <p>Explore the Latest Blogs on Trends and Technology.</p>
            </div>

            <Slider {...settings} >
              {latestblog.map((items, i)=>{
                return(
                  <div id="all-blog-main-container" key={i}>
                    <div>
                    <div id="blog-img-div">
                    {items.image}</div>
                  <div id='description-date'>
                    <p>{items.desc}</p>
                    <p>{items.date}</p>
                  </div>
                    </div>
                 
                  
              </div>
                )
              })}
            </Slider>
            {/* </div> */}




        </div>

    )
}

export default Latestblog
