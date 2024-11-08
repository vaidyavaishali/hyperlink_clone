import React, { useEffect, useState } from 'react'

import AllServicesPageHeading from './Heading/AllServicesPageHeading'
import OurPartener from '../../components/OurParteners/OurParteners'
import Overview from './Overview/Overview'
import TechStackWeUsed from './TechStackWeUsed/TechStackWeUsed'
import ProcessWeFollowPage from '../../components/ProcessWeFollow/ProcessWeFollow'
import Latestblog from '../../components/LatestBlog/Latestblog'
import GetFreeCode from './GetFreeCodeForm/GetFreeCode'
import FrequentlyAskedQue from './FrequentlyAskedQue'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Helmet } from 'react-helmet'
import { useRef } from 'react'
import { CTcontext } from '../../ContextAPI/createContext'
import { useContext } from 'react'

const AllServicesPage = () => {
  const { development, AllServicePage, setCategory1 } = useContext(CTcontext);
    const { category } = useParams();
    const categoryRef = useRef(category);

    useEffect(() => {
        // Check if the category has changed in the URL
        if (category !== categoryRef.current) {
            // If it has changed, set the new category and fetch the data
            categoryRef.current = category;
            setCategory1(category);
            AllServicePage(category);
        } else if (!development.length) {
            // If the category is the same but data is not available, fetch the data
            AllServicePage(category);
        } else {
            // If the category is the same and data is available, you don't need to fetch it
        }
    }, [category, development, setCategory1, AllServicePage]);

    const dataCategory = development && development.length > 0 ? development[0] : null;


    useEffect(() => {
      window.scrollTo(0, 0);
        if (dataCategory) {
            // Store the data in localStorage for this specific category
            localStorage.setItem(`servicePageData_${category}`, JSON.stringify(dataCategory));
        }
    }, [dataCategory, category]);
  return (
    <div>
      <Helmet>
        <meta charSet='utf-8' />
        <meta name='description' content='conscintious technology about page' />
        <meta name='keywords' content='aboout page' />
        <title>{category} | services </title>
      </Helmet>
      <AllServicesPageHeading dataCategory={dataCategory}/>
      <OurPartener />
      <Overview Overview={dataCategory}/>
      <TechStackWeUsed />
      <ProcessWeFollowPage />
      <FrequentlyAskedQue />
      <GetFreeCode />
    </div>
  )
}

export default AllServicesPage
