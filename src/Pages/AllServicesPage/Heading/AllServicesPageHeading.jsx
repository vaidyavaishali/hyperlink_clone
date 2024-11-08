import React, { useEffect, useContext, useRef } from 'react';
import './allServicesPageheading.css';
import { CTcontext } from '../../../ContextAPI/createContext';
import { useParams } from 'react-router-dom';

const AllServicesPageHeading = (props) => {


    return (
        <div id='header-container'>
            {props.dataCategory ? (
                <>
                    <div id='header-heading-container'> 
                        <h1>{props.dataCategory.devService}</h1>
                        <p>{props.dataCategory.devSubTitle}</p>
                    </div>
                    <div id='header-image-container'>
                        <img src={props.dataCategory.devMainImage} alt="abc" />
                    </div>
                </>
            ) : null}
        </div>
    );
}

export default AllServicesPageHeading;
