import React from 'react'
import FirstComponet from './FirstComponet'
import './hireDeveloper.css'
import OverviewComponet from './OverviewComponet'
import FrequentlyAskedQue from './FrequentlyAskedQue'
import PricingPlans from './PricingPlans'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import { Helmet } from 'react-helmet'
const HireDeveloperAllPages = () => {

  const [hireDevDataByTitle, sethireDevDatabyTitle] = useState({})
  const { developerName } = useParams()

  console.log(developerName)

  const getDeveloperdatByTitle = async () => {
    try {
      const response = await axios.get(`https://ct-backend-apis.onrender.com/get-hire-developer-page-data-by-title/${developerName}`)
      sethireDevDatabyTitle(response.data.getDataByTitle)
    } catch (error) {
      console.log(error)
    }

  }
  useEffect(() => {
    window.scrollTo(0, 0);
    getDeveloperdatByTitle()
  }, [developerName])

  console.log(hireDevDataByTitle)

  return (
    <div id='hire-developer-all-pages'>
      <Helmet>
        <title> Hire {developerName} | Conscientious Technology </title>
      </Helmet>
      <FirstComponet hiredevData={hireDevDataByTitle} />
      <OverviewComponet overview={hireDevDataByTitle} />
      <PricingPlans />
      <FrequentlyAskedQue />


    </div>
  )
}

export default HireDeveloperAllPages
