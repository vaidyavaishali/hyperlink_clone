import './partenerShipModel.css'
import fixedPriceModel from '../../Assets/partenershipModel/fixed-price-model-new.png'
import hirededicatedModel from '../../Assets/partenershipModel/hire-dedicated-model.png'
import onSiteDevModel from '../../Assets/partenershipModel/on-site-development-model-new.png'
const PartenerShipModelPage = () => {
    
    let partenershipModelArr = [{
        icon: fixedPriceModel, heading:"Fixed Price Model", description:"In this model, the project scope of work with its associated cost and timeline is defined before development starts. This is a preferred model for longer periods of engagement. Client always has peace of mind of knowing the project will remain on the same budget as agreed. This model suits best to clients who have a perfect vision of their requirement."
    },{
        icon: hirededicatedModel, heading:"Hire Dedicated Model", description:"This is very classic and simple way of engagement wherein clients pay for the number of hours the app developer works on project. Clients easily start the project as they don't have to walk in with detailed specifications. This model also allows client to update new features any time and clients know exactly what they’re paying for. This drives a lot more trust and communication."
    }, {
        icon: onSiteDevModel, heading:"On Site Development Model", description:"This model is preferred when clients want additional temporary resources for on-site development. This contract type ensures the engagement is cost-effective and a face-to-face interactions with developers. This model helps in achieving the deadline on time as there is continuous communication during the whole process."
    } ]
    return (
        <div id='partenership-models-container'>
            <div id='partenership-models-heading-container'>
                <h1 className='partenership-main-title'>Partenership Models</h1>
                <p>Hyperlink InfoSystem a leading mobile app development company in USA & India offers custom app development services to wide range of industries and businesses. Know more about our partnership models.</p>
            </div>
        
            <div id='partenership-models-content-container'>
               {
                partenershipModelArr.map((items, i)=>(
                    <div>
                        <img src={items.icon} alt="icon"/>
                        <h4>{items.heading}</h4>
                        <p>{items.description}</p>
                    </div>
                ))
               }
             
            </div>
        </div>
    )
}
export default PartenerShipModelPage