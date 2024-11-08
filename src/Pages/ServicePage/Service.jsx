import React, { useEffect, useState, useContext } from 'react';
import './service.css';
import { CTcontext } from '../../ContextAPI/createContext';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Service = () => {
  const {
    setShow_service_dropdown,
    SetServiceCategory,
    AllServicePage,
    setCategory1,
  } = useContext(CTcontext);

  const [devserviceData, setdevServiceData] = useState([]);
  const [dataByCategory, setDataByCategory] = useState([]);
  const [category, setCategory] = useState('MERN');
  const [hoverImg, setHoverImg] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const getdevServicesData = async () => {
      try {
        const response = await axios.get("https://ct-backend-apis.onrender.com/get-devservice-page-data");
        setdevServiceData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getdevServicesData();
  }, []);

  const getTechServiceDataByCategory = async (developmentCategory) => {
    try {
      const response = await axios.get(`https://ct-backend-apis.onrender.com/get-techservice-page-data-by-one-category/${developmentCategory}`);
      setDataByCategory(response.data);
  
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTechServiceDataByCategory("web development");
  }, []);


  return (
    <div id="service-container" onMouseLeave={() => { setShow_service_dropdown(false) }}>
      <div id='first-div'>
        {devserviceData.map((item, index) => (
          <ul key={index}>
            <li
              onMouseEnter={() => {getTechServiceDataByCategory(item.devService); setHoverImg(item.devHoveringImg); setCategory(item.devService)  }}
              onClick={() => {
                setShow_service_dropdown(false);
                setCategory(item.devService);

                navigate(`/services/${item.devService}`);
              }}
            >{item.devService}   </li>
          </ul>
        ))}
      </div>

      <div id='second-div'>
        <div id='web-dev-list'>
          {dataByCategory.map((item, index) => (
            <ul key={index} className='text-dark'>
              <li onClick={() => { navigate(`/service/${item.techService}`); setShow_service_dropdown(false); }}>{item.techService}</li>
            </ul>
          ))}
        </div>
      </div>

      <div id='third-div'>
        <div id='dev-img' style={{
          backgroundImage: `url(${hoverImg})`,
          backgroundSize: 'cover',
        }}
          onClick={() => { setCategory1(category); setShow_service_dropdown(false); navigate(`/services/${category}`) }}
        >
          <h3 className='text-black'>{category}</h3>
        </div>
      </div>

      <div className='fourth-div'>
        <div className='fourth-inner-div' onClick={() => { navigate('/industry-we-serve'); }}>
          <h3 className='text-black'>Let's Discuss Your Requirement</h3>
        </div>
      </div>




    </div>
  );
}; 

export default Service;
