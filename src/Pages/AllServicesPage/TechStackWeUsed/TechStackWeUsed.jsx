import React, { useState } from 'react'
import './techstackweUsed.css'
const TechStackWeUsed = () => {
    const [mobiledev, setmobiledev] = useState(true)
    const [frontenddev, setfrontenddev] = useState(false)
    const [backenddev, setbackenddev] = useState(false)
    const [cmsdev, setcmsdev] = useState(false)


    let mobileTechstackDiv = [{ logo: "https://www.freepnglogos.com/uploads/android-logo-png/android-logo-0.png", name: "Android" }, { logo: "https://www.freepnglogos.com/uploads/android-logo-png/android-logo-0.png", name: "Android" }, { logo: "https://www.freepnglogos.com/uploads/android-logo-png/android-logo-0.png", name: "Android" }, { logo: "https://www.freepnglogos.com/uploads/android-logo-png/android-logo-0.png", name: "Android" }, { logo: "https://www.freepnglogos.com/uploads/android-logo-png/android-logo-0.png", name: "Android" }, { logo: "https://www.freepnglogos.com/uploads/android-logo-png/android-logo-0.png", name: "Android" }, { logo: "https://www.freepnglogos.com/uploads/android-logo-png/android-logo-0.png", name: "Android" }]

    let frontendTechstackDiv = [{ logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvCNw0_gVbGkLI8__sYISpxQi2OfylIzbBrcq02UbY-A&s", name: "ReactJs" }]

    let backendTechstackDiv = [{ logo: "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png", name: "NodeJs" }]

    let CMSTechstackDiv = [{ logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzv5hnlwZzQX5u2ZGd9SZzpElw_xZWrsMvhw&usqp=CAU", name: "WordPress" }]
    return (
        <div id='tech-stack-we-worked-on-container'>
            <div id='tech-stack-we-worked-on-heading-container'>
                <h1>Technologies We Work On</h1>
                <div id='tech-name-containter'>
                    <span onClick={() => { setmobiledev(true); setbackenddev(false); setcmsdev(false); setfrontenddev(false) }} style={{borderBottom: mobiledev ? "3px solid black" : "none"}} >Mobile</span>
                    <span onClick={() => { setmobiledev(false); setbackenddev(false); setcmsdev(false); setfrontenddev(true) }} style={{borderBottom: frontenddev ? "3px solid black" : "none"}}>Frontend</span>
                    <span onClick={() => { setmobiledev(false); setbackenddev(true); setcmsdev(false); setfrontenddev(false) }} style={{borderBottom: backenddev ? "3px solid black" : "none"}}>Backend</span>
                    <span onClick={() => { setmobiledev(false); setbackenddev(false); setcmsdev(true); setfrontenddev(false) }} style={{borderBottom: cmsdev ? "3px solid black" : "none"}}>CMS</span>
                </div>
            </div>
            {
                mobiledev ? <div id='tech-stack-logo-container'>
                    {mobileTechstackDiv.map((items, i) => {
                        return (
                            <div id='tech-stack-all-div' key={i}>
                                <img src={items.logo} alt={items.name} />

                                <h6> {items.name}</h6>

                            </div>

                        )
                    })}
                </div> : frontenddev ? <div id='tech-stack-logo-container'>
                    {frontendTechstackDiv.map((items, i) => {
                        return (
                            <div id='tech-stack-all-div' key={i}>
                                <img src={items.logo} alt={items.name}/>

                                <h6> {items.name}</h6>

                            </div>

                        )
                    })}
                </div> : backenddev ? <div id='tech-stack-logo-container'>
                    {backendTechstackDiv.map((items, i) => {
                        return (
                            <div id='tech-stack-all-div' key={i}>
                                <img src={items.logo} alt={items.name}/>

                                <h6> {items.name}</h6>

                            </div>

                        )
                    })}
                </div> : cmsdev ? <div id='tech-stack-logo-container'>
                    {CMSTechstackDiv.map((items, i) => {
                        return (
                            <div id='tech-stack-all-div' key={i}>
                                <img src={items.logo} alt={items.name}/>

                                <h6> {items.name}</h6>

                            </div>

                        )
                    })}
                </div> : ""

            }





            
        </div>
    )
}

export default TechStackWeUsed
