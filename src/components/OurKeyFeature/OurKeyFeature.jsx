import React from 'react';
import './ourkeyfeature.css';
import Slider from 'react-slick';
import quality from '../../Assets/keyfeature/okf-qa.svg';
import excellentSupport from '../../Assets/keyfeature/okf-excellent-support.svg';
import enhncement from '../../Assets/keyfeature/okf-growth.svg'
import dedicated_dev_team from '../../Assets/keyfeature/okf-dedicated-development-team.svg'
import data_protection from '../../Assets/keyfeature/okf-data-security.svg'
import ClientCentricDevelopment from '../../Assets/keyfeature/okf-client-centric-development.svg'
import dataBackups from '../../Assets/keyfeature/okf-data-backups.svg'
import AgileDev from '../../Assets/keyfeature/okf-agile.svg'
const OurKeyFeature = () => {
  const settings = {
    loop: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const keyFeaturesArr = [
    {
      logo: dedicated_dev_team,
      title: 'Dedicated Development Team',
      desc: 'Our skilled team leverages projects to provide the best results. The team dedicates their every effort and does not look back until it\'s accomplished.',
    },
    {
      logo: AgileDev,
      title: "Agile Developement",
      desc: "We follow the Agile Development process that helps us to deliver the project with utmost quality and solid product for reliable and scalable business."
    },
    {
      logo: dataBackups,
      title: 'Data Backup',
      desc: "The backups are the best options and we carefully maintain our clients project backups to deal with misfortunes in the best manner."
    },
    {
      logo: enhncement,
      title: 'Enhancement',
      desc: 'During Discovery, Designing and Development phases, our technical team is always there to provide suggestions and edits to improvise their product in the best possible manner.',
    },
    {
      logo: excellentSupport,
      title: 'Excellent Support',
      desc: 'We are always there to assist our clients in every possible way to meet client\'s expectations and end needs.',
    },
    {
      logo: data_protection,
      title: 'Data Protection',
      desc: 'By signing an NDA, our company ensures the utmost safety of all your private data. We deliver best-rated products to maintain confidentiality.',
    },
    {
      logo: ClientCentricDevelopment,
      title: 'Client Centric Development',
      desc: 'We craft the clients needs on web, mobile, and blockchain to tailor the solutions and enhance growth of the businesses.',
    },
    {
      logo: quality,
      title: 'Quality Delivery',
      desc: 'We craft the client\'s needs on web, mobile, and blockchain to tailor the solutions and enhance the growth of the businesses.',
    },
  ];

  return (
    <div id='our-key-feature-main-container'>
      <div id='heading-container'>
        <h1 id='key-heading'>Our Key Features</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quasi Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, rem!</p>
      </div>
      <div id="our-key-feature-div">
        <Slider {...settings} className="mt-5">
          {keyFeaturesArr.map((item, i) => (
            <div className="key-feature-sliding-divs" key={i}>
              <div className="key-feature-sliding-inner-divs">
                <img src={item.logo} alt={`Logo ${i + 1}`} style={{ width: '50px', height: '50px' }} />
                <h3 id='key-feature-title-heading'>{item.title}</h3>
                <div>
                  <p id='desc-para'>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default OurKeyFeature;
