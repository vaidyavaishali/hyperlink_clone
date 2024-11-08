import React from 'react'
import './careerpage.css'
import CareerStart from './CareerStartContainer/CareerStart'
import CareerInfoPage from './CareerInfoPage/CareerInfoPage'
import Perks from './Perks/Perks'
import Culture from './CulturePage/Culture'
import ProcessOfInterview from './ProcessOfInterview/ProcessOfInterview'
import OurLatestPodcast from './OurLatestPodcast/OurLatestPodcast'
import CurrentOpportunities from './CurrentOpening/CurrentOpportunities'
import { Helmet } from 'react-helmet'
import { useEffect } from 'react'
function CareerPage() {
    useEffect(()=>{
        window.scrollTo(0, 0);
    }, [])
    return (
        <div>
            <Helmet>
                <meta charSet='utf-8' />
                <meta name='description' content='conscintious technology about page' />
                <meta name='keywords' content='aboout page' />
                <title>Career | Conscientious technology</title>
            </Helmet>
            <CareerStart />
            <CareerInfoPage />
            <Perks />
            <Culture />
            <ProcessOfInterview />
            <CurrentOpportunities />
            {/* <OurLatestPodcast/> */}

        </div>
    )
}

export default CareerPage