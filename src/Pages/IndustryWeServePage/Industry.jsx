import React from 'react'
import IndustryWeServe from './IndustryWeServe'
import OurLatestPodcast from '../CareerPage/OurLatestPodcast/OurLatestPodcast'
import { useEffect } from 'react'

const Industry = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
}, [])
  return (
    <div>
      <IndustryWeServe/>
      {/* <OurLatestPodcast/> */}
    </div>
  )
}

export default Industry
