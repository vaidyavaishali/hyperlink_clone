import React from 'react'
import Header from './Header/Header'
import "./contactUs.css"
import ContactUsForm from './ContactUsForm/ContactUsForm'
import LocatedAt from './LocatedAt/LocatedAt'
import EsteemClients from './EsteemClients/EsteemClients'
import SocialMedia from './SocialMedia/SocialMedia'
import { Helmet } from 'react-helmet'
import { useEffect } from 'react'
const ContactUs = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
    }, [])
    return (
        <div id='contact-us'>
            <Helmet>
                <meta charSet='utf-8' />
                <meta name='description' content='conscintious technology about page' />
                <meta name='keywords' content='aboout page' />
                <title>
                    Contact Us | Conscientious Technology
                </title>
            </Helmet>
            <Header />
            <ContactUsForm />
            <LocatedAt />
            <EsteemClients />
            <SocialMedia />
        </div>
    )
}

export default ContactUs
