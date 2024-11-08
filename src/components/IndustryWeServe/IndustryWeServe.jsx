import './industryWeServe.css'
import education from '../../Assets/IndustriesWeServe/education.svg'
import foodAndRestraurant from '../../Assets/IndustriesWeServe/FoodAndRestraurant.svg'
import gaming from '../../Assets/IndustriesWeServe/gaming.svg'
import healthcare from '../../Assets/IndustriesWeServe/healthcare.svg'
import travelingHospitality from '../../Assets/IndustriesWeServe/hospitality.svg'
import logistic from '../../Assets/IndustriesWeServe/logistic.svg'
import realEsted from '../../Assets/IndustriesWeServe/realEstate.svg'
import retailEcommerse from '../../Assets/IndustriesWeServe/retailEccomrse.svg'
import socialNetworking from '../../Assets/IndustriesWeServe/retailEccomrse.svg'
import onDemandSolution from '../../Assets/IndustriesWeServe/onDemandSolution.svg'
const IndustryWeServe = () => {
    let indeustriesWeServeArr = [{ logo: retailEcommerse, industriesname: "Retail, Ecommerce" },
    { logo: education, industriesname: "Education & Learning" },
     { logo: healthcare, industriesname: "Healthcare & Fitness" },
     { logo: foodAndRestraurant, industriesname: "Food & Restaurant" },
     { logo: realEsted, industriesname: "Real Estate" },
     { logo: socialNetworking, industriesname: "Social Networking" },
     { logo: logistic, industriesname: "Logistics & Distribution" },
     { logo: gaming, industriesname: "Gaming" },
     { logo: onDemandSolution, industriesname: "On-Demand Solutions" },
     { logo: travelingHospitality , industriesname: "Travel And Hospitality" }
    
    ]
    return (
        <div id='industries-we-serve-container'>
            <div id='industries-we-serve-heading-div'>
                <h1 className='industries-main-title'>Industries We Serve</h1>
                <p>Here, we make almost every genre of applications. You name it and we build it.</p>
            </div>
            <div id='industries-we-serve-content-container'>
                {indeustriesWeServeArr.map((items, i) => (
                    <div>
                      <img src={items.logo} alt="logo"/>
                      <h5>{items.industriesname}</h5>
                    </div>
                ))}
            </div>

        </div>
    )
}
export default IndustryWeServe

