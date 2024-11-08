import React, { useContext, useState, useEffect } from 'react';
import CompanyPage from '../../Pages/CompanyPage/Company';
import HireDeveloper from '../../Pages/HireDeveloperPage/HireDevolper';
import ResourcePage from '../../Pages/ResourcePage/Resource';
import Service from '../../Pages/ServicePage/Service';
import './navbar.css';
import { CTcontext } from '../../ContextAPI/createContext';
import { Link, useNavigate } from 'react-router-dom';
import CT_logo from '../../Assets/carsouls1img/CT_logo.jpeg';

const NavBar = () => {
  const {
    show_company_dropdown,
    setShow_company_dropdown,
    show_service_dropdown,
    setShow_service_dropdown,
    show_hiredeveloper_dropdown,
    setShow_hiredeveloper_dropdown,
    show_resource_dropdown,
    setShow_resource_dropdown,
  } = useContext(CTcontext);

  const [showNavbar, setShowNavbar] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 960);

  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 960);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const showCompanyDropdown = () => {
    setShow_company_dropdown(!show_company_dropdown);
  };

  const hideCompanyDropdown = () => {
    setShow_company_dropdown(false);
  };

  const showServiceDropdown = () => {
    setShow_service_dropdown(!show_service_dropdown);
  };

  const hideServiceDropdown = () => {
    setShow_service_dropdown(false);
  };

  const showHireDeveloperDropdown = () => {
    setShow_hiredeveloper_dropdown(!show_hiredeveloper_dropdown);
  };

  const hideHireDeveloperDropdown = () => {
    setShow_hiredeveloper_dropdown(false);
  };

  const showResourceDropdown = () => {
    setShow_resource_dropdown(!show_resource_dropdown);
  };

  const hideResourceDropdown = () => {
    setShow_resource_dropdown(false);
  };

  return (
    <>
      <div id="navbar">
        <div id="logo-div" className="cursor" onClick={() => {
          hideCompanyDropdown();
          hideHireDeveloperDropdown();
          hideResourceDropdown();
          hideServiceDropdown();
          setShowSidebar(false);
          navigate("/");
        }}>
          <img src={CT_logo} alt="logo" />
        </div>
        <div id="content-div">
          <div id="company">
            <p className="cursor" onClick={() => {
              showCompanyDropdown();
              hideHireDeveloperDropdown();
              hideResourceDropdown();
              hideServiceDropdown();
              setShowSidebar(false);
            }}>
              Company <i className="fa-solid fa-caret-down"></i>
            </p>
          </div>
          <div>
            <p className="cursor" onClick={() => {
              showServiceDropdown();
              hideCompanyDropdown();
              hideHireDeveloperDropdown();
              hideResourceDropdown();
              setShowSidebar(false);
            }}>
              Services <i className="fa-solid fa-caret-down"></i>
            </p>
          </div>
          <div className="cursor" onClick={() => {
            showHireDeveloperDropdown();
            hideServiceDropdown();
            hideResourceDropdown();
            hideCompanyDropdown();
            setShowSidebar(false);
          }}>
            Hire Developers <i className="fa-solid fa-caret-down"></i>
          </div>
          <div>Case Study</div>
          <div className="cursor" onClick={() => {
            showResourceDropdown();
            hideServiceDropdown();
            hideCompanyDropdown();
            hideHireDeveloperDropdown();
            setShowSidebar(false);
          }}>
            Blog <i className="fa-solid fa-caret-down"></i>
          </div>
          <div onClick={() => {
            hideCompanyDropdown();
            hideHireDeveloperDropdown();
            hideResourceDropdown();
            hideServiceDropdown();
            navigate("/contactus");
          }}>
            <Link to="/contactus" className="text-white text-decoration-none">Contact Us</Link>
          </div>
        </div>
        <div id="navbar-bar">
          {
            !showSidebar ? <i
              className="fa fa-bars"
              aria-hidden="true"
              style={{ fontSize: "200%" }}
              onClick={() => {
                setShowSidebar(!showSidebar);
                setShow_service_dropdown(false);
                setShow_resource_dropdown(false);
                setShow_hiredeveloper_dropdown(false);
                setShow_company_dropdown(false);
              }}
            ></i> : <i class="fa fa-times" aria-hidden="true"
              style={{ fontSize: "200%" }}
              onClick={() => {
                setShowSidebar(false);
                setShow_service_dropdown(false);
                setShow_resource_dropdown(false);
                setShow_hiredeveloper_dropdown(false);
                setShow_company_dropdown(false);
              }}></i>
          }

        </div>
        {isSmallScreen && showSidebar && (
          <aside id="sidebar">
            <div id="company">
              <p
                className="cursor"
                onClick={() => {
                  showCompanyDropdown();
                  setShowSidebar(false);
                }}
              >
                Company <i className="fa fa-caret-right" aria-hidden="true"></i>
              </p>
            </div>
            <div>
              <p
                className="cursor"
                onClick={() => {
                  showServiceDropdown();
                  setShowSidebar(false);
                }}
              >
                Services <i class="fa fa-caret-right" aria-hidden="true"></i>
              </p>
            </div>
            <div
              className="cursor"
              onClick={() => {
                showHireDeveloperDropdown();
                setShowSidebar(false);
              }}
            >
              Hire Developers <i className="fa-solid fa-caret-right"></i>
            </div>
            <div>Case Study</div>
            <div className="cursor">
              <p
                className="cursor"
                onClick={() => {
                  showResourceDropdown();
                  setShowSidebar(false);
                }}
              >
                Blog <i className="fa-solid fa-caret-right"></i>
              </p>
            </div>
            <div
              onClick={() => {
                hideCompanyDropdown();
                hideHireDeveloperDropdown();
                hideResourceDropdown();
                hideServiceDropdown();
                setShowSidebar(false);
                navigate("/contactus");
              }}
              className="text-dark"
            >
              Contact Us
            </div>
          </aside>
        )}
      </div>
      {show_company_dropdown ? <CompanyPage /> : ""}
      {show_service_dropdown ? <Service /> : ""}
      {show_hiredeveloper_dropdown ? <HireDeveloper /> : ""}
      {show_resource_dropdown ? <ResourcePage /> : ""}
    </>
  );
};

export default NavBar;
