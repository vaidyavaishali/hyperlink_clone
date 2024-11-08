import { Link, NavLink } from 'react-router-dom'
import { useContext, useState } from 'react'
import { CTcontext } from '../../ContextAPI/createContext'
import './company.css'
const CompanyPage = () => {
    const { show_company_dropdown, setShow_company_dropdown, show_service_dropdown, setShow_service_dropdown,
        show_hiredeveloper_dropdown, setShow_hiredeveloper_dropdown, show_resource_dropdown, setShow_resource_dropdown } = useContext(CTcontext)

    const [aboutUs, setAboutUs] = useState(true)
    const [industries, setIndustries] = useState(true)
    const [career, setcareer] = useState(true)
    const [events, setevents] = useState(true)

    return (
        <div id="company-page" onMouseLeave={()=>{setShow_company_dropdown(false)}}>
            <div className='first-div'>
                <ul>
                    <Link to="aboutus" className='text-dark text-color'><li className='cursor' onClick={() => { setShow_company_dropdown(!setShow_company_dropdown) }} onMouseOver={() => { setAboutUs(true); setIndustries(false); setcareer(false); setevents(false) }}>About Us</li> </Link>

                    <Link to="/industry-we-serve" className='text-color'><li className='cursor' onClick={() => { setShow_company_dropdown(!setShow_company_dropdown) }} onMouseOver={() => { setAboutUs(false); setIndustries(true); setcareer(false); setevents(false) }}>Industry We Serve</li></Link>

                    <Link to="/career" className='text-color'>
                        <li className='cursor' onClick={() => { setShow_company_dropdown(!setShow_company_dropdown) }} onMouseOver={() => { setAboutUs(false); setIndustries(false); setcareer(true); setevents(false) }}>Career</li>
                    </Link>

                    <li className='cursor'>Event</li>

                </ul>
            </div>

            <div className='third-div'>

                {aboutUs ? <Link to='/aboutus' onClick={() => { setShow_company_dropdown(false) }} className='text-color'>
                    <div className='third-inner-div text-white'>
                        <h4>Know More About Conscientious Tech</h4>
                    </div>
                </Link> : industries ?
                    <Link to='/industry-we-serve' onClick={() => { setShow_company_dropdown(false) }} className='text-color'>
                        <div className='third-inner-div text-white'>
                            <h4>Industries We Serve</h4>
                        </div>
                    </Link> :
                    career ? <Link to='/career' onClick={() => { setShow_company_dropdown(false) }} className='text-color'>
                        <div className='third-inner-div text-white'>
                            <h4>Build Career With Conscientious Tech</h4>
                        </div>
                    </Link> : events ?

                        // <Link to='/career'  className='text-color'>
                            <div className='third-inner-div text-white'>
                                <h4>Our Events</h4>
                            </div>
                        // </Link> 
                        : ""
                }


            </div>

            <div className='fourth-div'>
                <Link to="/contactus" onClick={()=>{setShow_company_dropdown(false)}} className='text-color'>
                <div className='fourth-inner-div'>
                    <h3>Lets Discuss Your Requirnment</h3>
                </div>

                </Link>
                
            </div>
            <div className='second-div contact'>
                <ul>
                    <li className='cursor'>
                        <a href="tel:+91 8421432551" className='text-dark'>
                            <i class="fa-solid fa-phone"></i>{" "}
                            +91 8421432551  </a>

                    </li>

                    {/* <li className='cursor'>
                        <a className="text-center text-dark" target="_blank" href="https://api.whatsapp.com/send?phone=+91 8421432551?utm_source=google&amp;utm_medium=search-srv&amp;utm_campaign=brand&amp;gad=1&amp;gclid=EAIaIQobChMIpfb--qv-_wIVJCeDAx3HNACyEAAYASAAEgKtkvD_BwE" class="text-dark"> <span class="text">
                            <i class="fa-brands fa-whatsapp" ></i>{" "}
                            +91 8421432551</span> </a>
                    </li> */}

                    <li className='cursor'>
                        <a className="text-center text-dark" target="_blank" href="https://wa.me/7770012793?text=Hello%20I%20am%20interested%20in%20your%20services" class="text-dark"><span class="text">
                            <i class="fa-brands fa-whatsapp" ></i>{" "}
                            +91 7770012793</span> </a>
                    </li>


                    <li className='cursor'>


                        <a href="mailto: connect@conscientioustech.in" className="text-center text-dark"><span>
                            <i class="fa-sharp fa-solid fa-envelope"></i>{" "}
                            connect@conscientioustech.in</span></a>

                    </li>
                </ul>

                <div id='social-icons-container'>
                    <div>
                        <img src="https://www.facebook.com/images/fb_icon_325x325.png" alt="" srcset="" className='fb-icon' />
                    </div>
                    <div>
                        <img src="https://img.freepik.com/free-vector/instagram-vector-social-media-icon-7-june-2021-bangkok-thailand_53876-136728.jpg" alt="" srcset="" className='insta-icon' />
                    </div>
                    <div>
                        <img src="https://cdn-icons-png.flaticon.com/512/124/124021.png" alt="" srcset="" className='tweeter-icon' />
                    </div>
                    <div>
                        <NavLink to="https://www.linkedin.com/company/conscientious-technology-pvt-ltd/?originalSubdomain=in" target='_blank'>
                        <img src="https://static-00.iconduck.com/assets.00/linkedin-icon-1024x1024-z5dvl47c.png" alt="conscientious technology linkedin" srcset="" className='linkedin-icon' />
                        </NavLink>

              
                    </div>

                </div>

            </div>



        </div>
    )

}
export default CompanyPage