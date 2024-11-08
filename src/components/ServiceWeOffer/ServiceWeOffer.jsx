import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CTcontext } from '../../ContextAPI/createContext';
import './serviceweoffer.css';

const ServiceWeOfferPage = () => {
    const {
        setShow_service_dropdown,
        SetServiceCategory,
        AllServicePage,
        setCategory1,
    } = useContext(CTcontext);

    const [serviceData, setServiceData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState("");
    const [techServiceList, setTechServiceList] = useState([]);
    const navigate = useNavigate();

    const getServicesData = async () => {
        try {
            const response = await axios.get("https://ct-backend-apis.onrender.com/get-devservice-page-data");
            setServiceData(response.data);
            setCategory(response.data[0].devService);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getServicesData();
    }, []);

    const techServiceData = async (devService) => {
        try {
            const response = await axios.get(`https://ct-backend-apis.onrender.com/get-techservice-page-data-by-one-category/${devService}`);
            return response.data.map((item, index) => (
                <div key={index}>
                    <h3 onClick={() => { navigate(`/service/${item.techService}`) }} style={{cursor:"pointer" }}> <img src={item.techIcon} alt={item.techService} style={{ width: "25px", height: "25px"}} />  {item.techService}</h3>

                </div>
            ));
        } catch (error) {
            console.error(error);
            return [];
        }
    };

    const fetchData = async () => {
        const techServiceList = await Promise.all(serviceData.map(item => techServiceData(item.devService)));
        setTechServiceList(techServiceList);
    };

    useEffect(() => {
        fetchData();
    }, [serviceData]);

    return (
        <div id='service-we-offer'>
            <h1>Service We Offer</h1>
            <div id='service-we-offer-inner-div'>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    serviceData.map((item, index) => (
                        <div className='heading' key={index}>
                            <div id='service-name-img-div'>
                                <img src={item.devIcon} alt="logo" id='items-logo' />
                                <span id='service-name'>{item.devService} <br /> Development</span>
                            </div>

                            <div> {techServiceList[index]}</div>
                            <button
                                className='services-divs-readmore-btn'
                                onClick={() => {
                                    setCategory1(item.devService);
                                    navigate(`/services/${item.devService}`);
                                }}
                            >
                                Read More {" "}&#10230;
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default ServiceWeOfferPage;
