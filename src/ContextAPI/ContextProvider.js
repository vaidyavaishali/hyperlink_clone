import React, { useEffect, useState } from 'react';
import { CTcontext } from './createContext';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function ContextProvider(props) {
    const [show_company_dropdown, setShow_company_dropdown] = useState(false);
    const [show_service_dropdown, setShow_service_dropdown] = useState(false);
    const [show_hiredeveloper_dropdown, setShow_hiredeveloper_dropdown] = useState(false);
    const [show_resource_dropdown, setShow_resource_dropdown] = useState(false);
    const { category } = useParams();
    const [category1, setCategory1] = useState(category);
    const [development, setDevelopment] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const AllServicePage = async (category1) => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.get(`https://ct-backend-apis.onrender.com/get-devservice-page-data-by-one-devservice/${category1}`);
            const newData = response.data;

            setDevelopment(newData);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setError(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        AllServicePage(category1);
    }, [category1]);

    return (
        <div>
            <CTcontext.Provider value={{
                show_company_dropdown,
                setShow_company_dropdown,
                show_service_dropdown,
                setShow_service_dropdown,
                show_hiredeveloper_dropdown,
                setShow_hiredeveloper_dropdown,
                show_resource_dropdown,
                setShow_resource_dropdown,
                setCategory1,
                AllServicePage,
                development,
                loading,
                error,
                setDevelopment
            }}>
                {props.children}
            </CTcontext.Provider>
        </div>
    );
}
