import './App.css';
import ConscientiousTechMain from './components/ConscientiousTechMain';
import NavBar from './components/NavBarr/NavBar';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import ContextProvider from './ContextAPI/ContextProvider';
import CareerPage from './Pages/CareerPage/CareerPage';
import AboutUs from './Pages/AboutUsPage/AboutUs';
import ContactUs from './Pages/ContactUs/ContactUs';
import HireDeveloperAllPages from './Pages/HireDeveloperAllPages/HireDeveloperAllPages';
import AllServicesPage from './Pages/AllServicesPage/AllServicesPage';
import Industry from './Pages/IndustryWeServePage/Industry';
import JobDescriptionPage from './Pages/CareerPage/CurrentOpening/JobDescriptionPage';
import ApplyForm from './Pages/CareerPage/CurrentOpening/ApplyForm';
import ServiceTech from './Pages/ServiceTechpage/ServiceTech';
import NotFound from './NotFound';
import { useEffect } from 'react';

function App() {
  const isNotFound = window.location.pathname === '*'; // Replace with your actual NotFound route
  return (
    <div className="App">
      <ContextProvider>
        {!isNotFound && <NavBar />}
        <Routes>
          <Route path='/' element={<ConscientiousTechMain />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/career' element={<CareerPage />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/hiredeveloper/:developerName' element={<HireDeveloperAllPages />} exact />

          <Route path='/industry-we-serve' element={<Industry />} />
          <Route path='/career/job-description/:id' element={<JobDescriptionPage />} />
          <Route path='/career/apply-here/:jobrole' element={<ApplyForm />} />
          <Route path='/service/:techName' element={<ServiceTech />} />
          <Route path='/services/:category' element={<AllServicesPage />} />

          {/* Use a wildcard (*) to match any other route */}
          <Route path='*' element={<NotFound />} />
        </Routes>
        {!isNotFound && <Footer />}
      </ContextProvider>

    </div>
  );
}

export default App;
