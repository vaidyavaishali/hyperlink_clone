import { useNavigate } from 'react-router-dom'
import './footer.css'
const Footer = () => {

    const social_icon = [{name:"linkdin", logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPibEkA60x3EqTWbFsM6-TRIOlbFDtD0oy8oJM2xYcBY1B9bSIbezwC1VINFuEek_BJvA&usqp=CAU", link:"https://www.linkedin.com/company/conscientious-technology-pvt-ltd/?originalSubdomain=in"},
    
    { name:"facebook", logo:"https://p7.hiclipart.com/preview/236/875/801/social-media-facebook-computer-icons-logo-icon-facebook-png-free.jpg", link:"/facebook"},
     {name:"tweeter", logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvBKcFTotvQRqPk3lC-JvM-luJf1w7J2-uFPnW8dvjwSMDN7Rs5TecOenYh-olimRjsOE&usqp=CAUg", link:"/tweeter.com"},
     {name:"instagram", logo:"https://www.edigitalagency.com.au/wp-content/uploads/new-Instagram-logo-white-glyph.png", link:"/instagram.com"} 
   ]

   const quickLinks = [{name:"Home", navigateLink:"/"}, {name:"About Us", navigateLink:"/aboutus"}, {name:"Career", navigateLink:"/career"}]

   const navigate = useNavigate()

    return (
        <div id="footer-container">
            <h2>Concientious Technology</h2>
            <div className='footer-inside-container'>
            <div className='footer-address-container'>
                <h5>Address</h5>
                <p>  2nd Floor, Trident Tower, MangalMurti Layout,
                    Near Khanaiya Kunj Hotel,
                    Mahesh Nagar, Guruchhaya Colony,
                    Sai Nagar, Amaravti,
                    Maharashtra, 444607</p>
            </div>
                

               
            <div id='footer-quick-link'>
                <h5>Quick Links</h5>
                {quickLinks.map((items, i)=>{
                    return(
                        <ul key={i}>
                        <li onClick={()=>{navigate(`${items.navigateLink}`)}} className='cursor'>{items.name}</li>
                     
                     
                    </ul>
                    )
                })}
              
            </div>
            <div id='footer-social-icon'>
                 {social_icon.map((items, i)=>{
                    return(
                        <a href={items.link} key={i} target='_blank'>
                            <img src={items.logo} alt={items.name} className="footer-icon" />
                        </a>
                    )
                 })}
                </div>
         
           
        </div>
        </div>
    )
}
export default Footer