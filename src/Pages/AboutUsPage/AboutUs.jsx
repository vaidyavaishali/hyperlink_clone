import React from 'react'
import './aboutUs.css'
import Header from './Heading/Header'
import WhatWeAre from './WhatWeAre/WhatWeAre'
import OurStory from './OurStory/OurStory'
import OurVision from './OurVision/OurVision'
import OurTeam from './OurTeam/OurTeam'
import OurPartener from '../../components/OurParteners/OurParteners'
import WhatWeDo from './WhatWeAre/WhatWeDo'
import { Helmet } from 'react-helmet'
import { useEffect } from 'react'
const AboutUs = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
}, [])
  return (
    <div>
      <Helmet>
        <meta charSet='utf-8' />
        <meta name='description' content='conscintious technology about page' />
        <meta name='keywords' content='aboout page'/>
       <title>About Us | Conscientious technology</title>
      </Helmet>
      <Header />
      <WhatWeAre />
      <WhatWeDo />
      <OurStory />
      <OurVision />
      <OurTeam />
      <OurPartener />
    </div>
  )
}

export default AboutUs
