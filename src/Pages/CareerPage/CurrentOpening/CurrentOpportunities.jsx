import React, { useRef } from 'react'
import './currentOpportunities.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { FaBuilding, FaMapMarkerAlt } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet';

const CurrentOpportunities = () => {
    const [byCompany, setByCompany] = useState(false)
    const [byTitle, setByTitle] = useState(false)
    const [byLocation, setByLocation] = useState(false)
    const [byDate, setByDate] = useState(false)

    const [applycompany, setApplycompany] = useState(false)
    const [applyTitle, setApplyTitle] = useState(false)
    const [applyLocation, setApplyLocation] = useState(false)
    const [applyDate, setApplyDate] = useState(false)


    const [currentOpeningData, setCurrentOpening] = useState([])
    const [filteredData, setFilterData] = useState([]);
    let arrOfByCompanyList = []
    let arrOfByLocationList = []
    let arrOfBydateList = []
    let arrOfByTitle = []

    const [applyCompanyData, setApplyCompanyData] = useState([])
    const [applyTitleData, setApplyTitleData] = useState([])
    const [applyLocationData, setApplyLocationData] = useState([])
    const [selectedRange, setSelectedRange] = useState('last7Days'); // Default selected range
    const currentOpeningDataRef = useRef([]);
    const filteredDataRef = useRef([]);
    const [search, setSearch] = useState("")


    const getCurrentOpeningData = async () => {
        try {
            const response = await axios.get("https://ct-backend-apis.onrender.com/get-our-opportunity-data");
            if (response.status === 200) {
                const fetchData = response.data.getdata
                setCurrentOpening(fetchData)
                setFilterData(fetchData)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getCurrentOpeningData();
    }, [])


    const HandleSearchFilter = () => {
        let searchedData = currentOpeningDataRef.current;
        if (search) {
            setApplyCompanyData([])
            setApplyLocationData([])
            setApplyTitleData([])
            setSelectedRange("")
            setApplyDate(false)
            setApplycompany(false)
            setApplyLocation(false)
            setApplyTitle(false)

            searchedData = searchedData.filter((jobs) => (jobs.companyName.toLocaleLowerCase().includes(search) || jobs.jobRole.toLocaleLowerCase().includes(search) || jobs.jobDescription.toLocaleLowerCase().includes(search) || jobs.jobLocation.toLocaleLowerCase().includes(search)))
        }
        setFilterData(searchedData)


    }
    useEffect(() => {
        if (!search) {
            HandleSearchFilter()
        }
    }, [search])

    const applyFilters = () => {
        setByCompany(false)
        let filtered = currentOpeningData;
        if (applyCompanyData.length > 0) {
            setApplycompany(true)
            filtered = filtered.filter(job => applyCompanyData.includes(job.companyName));

        }
        if (applyTitleData.length > 0) {
            setApplyTitle(true)
            filtered = filtered.filter(job => applyTitleData.includes(job.jobRole));

        }
        if (applyLocationData.length > 0) {
            setApplyLocation(true)
            filtered = filtered.filter(job => applyLocationData.includes(job.jobLocation));

        } if (selectedRange) {
            const currentDateTime = new Date();

            const ranges = {
                last24Hours: new Date(currentDateTime - 24 * 60 * 60 * 1000),
                last7Days: new Date(currentDateTime - 7 * 24 * 60 * 60 * 1000),
                last15Days: new Date(currentDateTime - 15 * 24 * 60 * 60 * 1000),
                last30Days: new Date(currentDateTime - 30 * 24 * 60 * 60 * 1000),
            };
            filtered = filtered.filter(job => new Date(job.date) >= ranges[selectedRange])
            console.log(ranges[selectedRange])

        }


        setFilterData(filtered);
    }
    console.log(applyCompanyData)


    for (let i = 0; i < currentOpeningData.length; i++) {
        arrOfByCompanyList.push(currentOpeningData[i].companyName)

        arrOfByLocationList.push(currentOpeningData[i].jobLocation)
        arrOfByTitle.push(currentOpeningData[i].jobRole)

    }

    let companyListSet = new Set(arrOfByCompanyList);
    let CompanyListArr = [...companyListSet]

    let locationListSet = new Set(arrOfByLocationList)
    let LocationListArr = [...locationListSet]

    let titleListSet = new Set(arrOfByTitle)
    let TitleListArr = [...titleListSet]


    const Apply_Company = (event) => {
        const company = event.target.value;
        if (event.target.checked) {
            setApplyCompanyData((prevCompanies) => ([...prevCompanies, company]));
        } else {
            setApplyCompanyData((prevCompanies) => ([...prevCompanies].filter(item => item !== company)));
        }
    }

    const Apply_Location = (event) => {
        const location = event.target.value;
        if (event.target.checked) {
            setApplyLocationData((prevLocations) => ([...prevLocations, location]));
        } else {
            setApplyLocationData((prevLocations) => ([...prevLocations].filter(item => item !== location)));
        }
    }
    const Apply_Title = (event) => {
        const title = event.target.value;
        if (event.target.checked) {
            setApplyTitleData((prevTitles) => ([...prevTitles, title]));
        } else {
            setApplyTitleData((prevTitles) => ([...prevTitles].filter(item => item !== title)));
        }
    }
    useEffect(() => {
        currentOpeningDataRef.current = currentOpeningData;
        filteredDataRef.current = filteredData;
    }, [currentOpeningData, filteredData]);

    const ClearData = () => {
        let newFilteredData = currentOpeningDataRef.current;

        // Apply retained filters
        if (applyTitleData.length > 0) {
            setApplyTitle(true)
            newFilteredData = newFilteredData.filter(job => applyTitleData.includes(job.jobRole));

        }
        if (applyLocationData.length > 0) {
            newFilteredData = newFilteredData.filter(job => applyLocationData.includes(job.jobLocation));
        }
        if (selectedRange) {
            const currentDateTime = new Date();
            const ranges = {
                last24Hours: new Date(currentDateTime - 24 * 60 * 60 * 1000),
                last7Days: new Date(currentDateTime - 7 * 24 * 60 * 60 * 1000),
                last15Days: new Date(currentDateTime - 15 * 24 * 60 * 60 * 1000),
                last30Days: new Date(currentDateTime - 30 * 24 * 60 * 60 * 1000),
            };
            newFilteredData = newFilteredData.filter(job => new Date(job.date) >= ranges[selectedRange]);
        }

        setFilterData(newFilteredData);
        setApplycompany(false);
        setApplyCompanyData([]);
    }

    const ClearTitleData = () => {
        let newFilteredData = currentOpeningDataRef.current;

        // Apply retained filters
        if (applyCompanyData.length > 0) {
            setApplycompany(true)
            newFilteredData = newFilteredData.filter(job => applyCompanyData.includes(job.companyName));

        }
        if (applyLocationData.length > 0) {
            newFilteredData = newFilteredData.filter(job => applyLocationData.includes(job.jobLocation));
        }
        if (selectedRange) {
            const currentDateTime = new Date();
            const ranges = {
                last24Hours: new Date(currentDateTime - 24 * 60 * 60 * 1000),
                last7Days: new Date(currentDateTime - 7 * 24 * 60 * 60 * 1000),
                last15Days: new Date(currentDateTime - 15 * 24 * 60 * 60 * 1000),
                last30Days: new Date(currentDateTime - 30 * 24 * 60 * 60 * 1000),
            };
            newFilteredData = newFilteredData.filter(job => new Date(job.date) >= ranges[selectedRange]);
        }

        setFilterData(newFilteredData);
        setApplyTitle(false);
        setApplyTitleData([]);
    }
    const ClearLocationData = () => {
        let newFilteredData = currentOpeningDataRef.current;

        // Apply retained filters
        if (applyTitleData.length > 0) {
            setApplyTitle(true)
            newFilteredData = newFilteredData.filter(job => applyTitleData.includes(job.jobRole));

        }
        if (applyCompanyData.length > 0) {
            setApplycompany(true)
            newFilteredData = newFilteredData.filter(job => applyCompanyData.includes(job.companyName));

        }
        if (selectedRange) {
            const currentDateTime = new Date();
            const ranges = {
                last24Hours: new Date(currentDateTime - 24 * 60 * 60 * 1000),
                last7Days: new Date(currentDateTime - 7 * 24 * 60 * 60 * 1000),
                last15Days: new Date(currentDateTime - 15 * 24 * 60 * 60 * 1000),
                last30Days: new Date(currentDateTime - 30 * 24 * 60 * 60 * 1000),
            };
            newFilteredData = newFilteredData.filter(job => new Date(job.date) >= ranges[selectedRange]);
        }

        setFilterData(newFilteredData);
        setApplyLocation(false);
        setApplyLocationData([]);
    }
    const ClearDateData = () => {
        let newFilteredData = currentOpeningDataRef.current;

        // Apply retained filters
        if (applyTitleData.length > 0) {
            setApplyTitle(true)
            newFilteredData = newFilteredData.filter(job => applyTitleData.includes(job.jobRole));

        }
        if (applyCompanyData.length > 0) {
            setApplycompany(true)
            newFilteredData = newFilteredData.filter(job => applyCompanyData.includes(job.companyName));

        }
        if (applyLocationData.length > 0) {
            newFilteredData = newFilteredData.filter(job => applyLocationData.includes(job.jobLocation));
        }

        setFilterData(newFilteredData);
        setApplyDate(false);
        setSelectedRange("");
    }

    const navigate = useNavigate()
    return (
        <div id='current-opportunites-main-container'>

            <Helmet>
                <meta charSet='utf-8' />
                <meta name='description' content='conscintious technology about page' />
                <meta name='keywords' content='aboout page' />
                <title>{}</title>
            </Helmet>

            {/* ------------------header container start---------------- */}
            <div id='heading-container'>
                <h3 id="heading">Current Opportunities</h3>
                <p>Find Jobs by Company, Location, Title or Date or search by keyword</p>
                <div id='input-search-container'>
                    <input type="text" name="search-input" id="search-input" value={search} placeholder='Search' onChange={(e) => setSearch(e.target.value)} />
                    <i class="fa fa-search" aria-hidden="true" onClick={HandleSearchFilter}></i>

                </div>

            </div>
            {/* ------------------header container end---------------- */}
            {/* ----------------------main container start----------------------- */}
            <div className='main-container'>
                {/*------------------ navbar container start---------------- */}
                <div className='nav-container'>

                    <div onClick={() => { setByTitle(!byTitle); setByCompany(false); setByDate(false); setByLocation(false); }} className='cursor' style={{ backgroundColor: applyTitle ? "blue" : "rgb(144, 144, 202)", "color": applyTitle ? 'white' : 'black' }}> <h6>  By Title  {" "} <i className="fa fa-angle-down" aria-hidden="true" ></i>  </h6> </div>

                    <div onClick={() => { setByCompany(!byCompany); setByDate(false); setByLocation(false); setByTitle(false) }} className='cursor' style={{ backgroundColor: applycompany ? "blue" : "rgb(144, 144, 202)", "color": applycompany ? 'white' : 'black' }}><h6>By Company {" "} <i className="fa fa-angle-down" aria-hidden="true" ></i> </h6> </div>

                    <div onClick={() => { setByLocation(!byLocation); setByCompany(false); setByDate(false); setByTitle(false) }} className='cursor' style={{ backgroundColor: applyLocation ? "blue" : "rgb(144, 144, 202)", "color": applyLocation ? 'white' : 'black' }}> <h6> By Location {" "} <i className="fa fa-angle-down" aria-hidden="true" ></i></h6></div>

                    <div onClick={() => { setByDate(!byDate); setByCompany(false); setByLocation(false); setByTitle(false) }} className='cursor' style={{ backgroundColor: applyDate ? "blue" : "rgb(144, 144, 202)", "color": applyDate ? 'white' : 'black' }}> <h6>By Date <i className="fa fa-angle-down" aria-hidden="true" ></i></h6> </div>

                </div>
                {/*------------------ navbar container end---------------- */}

                {/* ------------------dropdown starts-------------------------------------------- */}

                {/* ------------------------------------company dropdowns-------------------------------- */}
                {byCompany &&
                    <div id='company-dropdown' className='dropdown'>
                        <div >
                            <h6 onClick={() => { setByCompany(!byCompany) }}>By Company <i className="fa fa-angle-up" aria-hidden="true" ></i> </h6>

                            <input type="text" name="search-company-icon" className='search-input' placeholder='Search' />
                            <div className='options-div'>
                                {CompanyListArr.map((items, i) => {
                                    return (
                                        <div className='company-options options-list' key={i}>

                                            <input type="checkbox" name={items} id={items} onChange={Apply_Company} value={items} checked={applyCompanyData.includes(items)} />{" "}
                                            <label htmlFor={items}>{items}</label>

                                        </div>

                                    )
                                })}
                            </div>
                            <div className='btns'>
                                <button className='cancel-btn' onClick={() => { setByCompany(false); ClearData(); }}>Clear</button>
                                <button className='apply-btn' onClick={applyFilters}>Apply</button>

                            </div>

                        </div>
                    </div>
                }

                {byTitle &&
                    <div id='title-dropdown' className='dropdown'>
                        <div>
                            <h6 onClick={() => { setByTitle(!byTitle) }} >By Title <i className="fa fa-angle-up" aria-hidden="true" ></i> </h6>

                            <input type="text" name="search-company-icon" className='search-input' placeholder='Search' />
                            <div className='options-div'>
                                {TitleListArr.map((items, i) => {
                                    return (
                                        <div className='company-options options-list' key={i}>

                                            <input type="checkbox" name="" id={items} value={items} checked={applyTitleData.includes(items)} onChange={Apply_Title} />{" "}
                                            <label htmlFor={items}>{items}</label>

                                        </div>

                                    )
                                })}
                            </div>
                            <div className='btns'>
                                <button className='cancel-btn' onClick={() => { setByTitle(false); ClearTitleData() }}>Cancel</button>
                                <button className='apply-btn' onClick={() => { setApplyTitle(true); setByTitle(false); applyFilters() }}>Apply</button>

                            </div>

                        </div>
                    </div>
                }

                {byDate &&
                    <div id='date-dropdown' className='dropdown'>
                        <div >
                            <h6 onClick={() => { setByDate(!byDate) }} >By Date <i className="fa fa-angle-up" aria-hidden="true" ></i> </h6>
                            <input type="text" name="search-company-icon" className='search-input' placeholder='Search' />
                            <div className='options-div'>
                                <div className='company-options options-list' >
                                    <fieldset>
                                        <input
                                            type="radio"
                                            name="date"
                                            id="last24Hours"
                                            value="last24Hours"
                                            checked={selectedRange === "last24Hours"}
                                            onChange={(e) => { setSelectedRange(e.target.value); }}
                                        />{" "}
                                        <label htmlFor="last24Hours">Last 24 Hours</label>
                                    </fieldset>
                                    <fieldset>
                                        <input
                                            type="radio"
                                            name="date"
                                            id="last7Days"
                                            value="last7Days"
                                            checked={selectedRange === "last7Days"}
                                            onChange={(e) => { setSelectedRange(e.target.value); }}
                                        />{" "}
                                        <label htmlFor="last7Days">Last 7 Days</label>
                                    </fieldset>
                                    <fieldset>
                                        <input
                                            type="radio"
                                            name="date"
                                            id="last15Days"
                                            value="last15Days"
                                            checked={selectedRange === "last15Days"}
                                            onChange={(e) => { setSelectedRange(e.target.value); }}
                                        />{" "}
                                        <label htmlFor="last15Days">Last 15 Days</label>
                                    </fieldset>
                                    <fieldset>
                                        <input
                                            type="radio"
                                            name="date"
                                            id="last30Days"
                                            value="last30Days"
                                            checked={selectedRange === "last30Days"}
                                            onChange={(e) => { setSelectedRange(e.target.value); }}
                                        />{" "}
                                        <label htmlFor="last30Days">Last 30 Days</label>
                                    </fieldset>
                                    <fieldset>
                                        <input
                                            type="radio"
                                            name="date"
                                            id="AnyTime"
                                            value="AnyTime"
                                            checked={selectedRange === "AnyTime"}
                                            onChange={(e) => { setSelectedRange(e.target.value); }}
                                        />{" "}
                                        <label htmlFor="AnyTime">Any Time</label>
                                    </fieldset>

                                </div>


                            </div>
                            <div className='btns'>
                                <button className='cancel-btn' onClick={() => { setByDate(false); ClearDateData() }}>Cancel</button>
                                <button className='apply-btn' onClick={() => { setApplyDate(true); setByDate(false); applyFilters(); }}>Apply</button>
                            </div>

                        </div>
                    </div>
                }

                {byLocation &&
                    <div id='location-dropdown' className='dropdown'>
                        <div  >
                            <h6 onClick={() => { setByLocation(!byLocation) }}>By Location{" "}<i className="fa fa-angle-up" aria-hidden="true" ></i> </h6>

                            <input type="text" name="search-company-icon" className='search-input' placeholder='Search' />
                            <div className='options-div'>
                                {LocationListArr.map((items, i) => {
                                    return (
                                        <div className='company-options options-list' key={i}>

                                            <input type="checkbox" name="" id={items} value={items} checked={applyLocationData.includes(items)} onChange={Apply_Location} />{" "}
                                            <label htmlFor={items}>{items}</label>

                                        </div>

                                    )
                                })}
                            </div>
                            <div className='btns'>
                                <button className='cancel-btn' onClick={() => { setByLocation(false); ClearLocationData(); }}>Cancel</button>
                                <button className='apply-btn' onClick={() => { setByLocation(false); applyFilters() }}>Apply</button>

                            </div>

                        </div>
                    </div>
                }

                {/* ------------------dropdown end-------------------------------------------- */}

                {filteredData && filteredData.map((jobs, i) => {
                    return (
                        <div key={i} className='all-job-opening'>

                            <div>
                                <h4>{jobs.jobRole}</h4>
                                <p> <FaBuilding /> {jobs.companyName}</p>
                                <p><FaMapMarkerAlt className='map-icon' />{" "}{jobs.jobLocation}</p>
                            </div>

                            <div>

                                <button onClick={() => { navigate(`/career/job-description/${jobs._id}`) }}>See Full Job Description <FiArrowRight /> </button>
                            </div>



                        </div>
                    )
                })}

            </div>

        </div>
    )
}

export default CurrentOpportunities
