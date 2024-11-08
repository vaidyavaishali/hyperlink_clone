import './processwefollow.css'
const ProcessWeFollowPage = () => {
    let processWeFollowArr = [{ logo: "https://e7.pngegg.com/pngimages/248/207/png-clipart-customer-service-user-requirement-others-miscellaneous-company-thumbnail.png", processName: "Requirement Gathering", desc: "We follow the first and foremost priority of gathering requirements, resources, and information to begin our project." },

    { logo: "https://img.freepik.com/free-vector/mobile-ui-ux-concept-illustration_114360-14906.jpg", processName: "UI/UX Design", desc: "We create catchy and charming designs with the latest tools of designing to make it a best user-friendly experience" },
    { logo: "https://cdn-icons-png.flaticon.com/512/2684/2684657.png", processName: "Prototype", desc: "After designing, you will get your prototype, which will be sent ahead for the development process for the product." },

    { logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRRy19hkX45UAnaChU_XxO4Cr-UCev6PPdRg&usqp=CAU", processName: "Development", desc: "Development of mobile application/web/blockchain started using latest tools and technologies with transparency." },

    { logo: "https://cdn-icons-png.flaticon.com/512/5526/5526322.png", processName: "Quality Assurance", desc: "Hyperlink values quality and provides 100% bug free application with no compromisation in it." },

    { logo: "https://cdn-icons-png.flaticon.com/512/1185/1185454.png", processName: " Deployment", desc: "After trial and following all processes, your app is ready to launch on the App store or Play Store" }, { logo: "https://www.freeiconspng.com/thumbs/maintenance-icon/maintenance-icon-25.png", processName: "Support & Maintenance", desc: "Our company offers you all support and the team is always ready to answer every query after deployment." }]
    return (
        <div id='process-we-follow-container'>
            <div id='process-we-follow-heading-div'>
            <h2 className="main-title">Process We Follow</h2>
            </div>
            <div id='process-we-follow-inner-container'>
                {/* <div> */}
                {processWeFollowArr.map((items, i) => {
                    return (
                        <div key={i} className='process-we-follows-all-div'>
                            <img src={items.logo} alt="logo" />
                            <h5>{i + 1}. {" "} {items.processName}</h5>
                            <p>{items.desc}</p>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}
export default ProcessWeFollowPage