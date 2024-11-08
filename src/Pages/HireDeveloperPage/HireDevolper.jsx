import { Link, NavLink, useNavigate } from 'react-router-dom'
import './hiredeveloper.css'
import { useContext } from 'react'
// import ContextProvider from '../../ContextAPI/ContextProvider'
import { CTcontext } from '../../ContextAPI/createContext'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

const HireDeveloper = () => {
  const { show_hiredeveloper_dropdown, setShow_hiredeveloper_dropdown } = useContext(CTcontext);

  const [hireDevData, setHireDeveloperData] = useState([]);

  const getHireDeveloperData = async () => {
    const response = await axios.get("https://ct-backend-apis.onrender.com/get-hire-developer-page-data");
    setHireDeveloperData(response.data);
  };

  const navigate = useNavigate();

  useEffect(() => {
    getHireDeveloperData();
  }, []);

  return (
    <div className={`hire-dropdown ${show_hiredeveloper_dropdown ? 'show' : ''}`} onMouseLeave={() => { setShow_hiredeveloper_dropdown(false) }}>
      {
        hireDevData.map((items, i) => (
          <div key={i} className='developers'>

              <p style={{color:'black', textDecoration:"none"}} onClick={() =>{ setShow_hiredeveloper_dropdown(false); navigate(`/hiredeveloper/${items.devloperTitle}`)}}>{items.devloperTitle}</p>
         
          </div>
        ))
      }
    </div>
  )
};

// ... (export statement)

export default HireDeveloper;
