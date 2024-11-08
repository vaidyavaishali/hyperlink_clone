import Slider from "react-slick";
// import './heroslider.css'
import './heroSlidernew.css'
import { useRef, useEffect } from "react";
import ParticlesPage from "../ParticlesGraphic/ReactParticle";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import Swal from "sweetalert2";
const HeroSlider = () => {
    const [herosliderData, setHeroSliderData] = useState([])
    const heroTitleColorarr = ["red", "blue", "green", "#CC8899", "black", "violet"]
    const [selectedColor, setSelectedColor] = useState("")
    const [show, setShow] = useState(false);
    const [typeOfCompany, setTypeOfCompany] = useState("")
    const navigate = useNavigate()

    const [getQuoetesInput, setgetQuotesInput] = useState({ fullName: "", email: "", contactNo: "", whatsapp: "", address: "", message: "", devCategory: "" })



    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const HeroSlider = () => {
        axios.get("https://ct-backend-apis.onrender.com/getherosliderdata").then((res) => {
            if (res.status === 200) {
                setHeroSliderData(res.data.getdata)
            }
        })
    }

    useEffect(() => {
        HeroSlider()
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            const pickColorIndex = Math.floor(Math.random() * heroTitleColorarr.length);
            setSelectedColor(heroTitleColorarr[pickColorIndex]);
        }, 2900);

        // Clear the interval when the component unmounts or when selectedColor changes
        return () => {
            clearInterval(interval);
        };
    }, [selectedColor, heroTitleColorarr]);


    const sliderRef = useRef(null);
    const settings = {
        loop: 2,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 700,
        autoplaySpeed: 2500,
        cssEase: "linear",
        arrows: false,
        ontouchmove:false,
        pauseOnHover:false
    };

    const GetQuotesFormFunc = async() => {
        try {
            if (getQuoetesInput.fullName && getQuoetesInput.email && getQuoetesInput.contactNo && getQuoetesInput.address && getQuoetesInput.devCategory && getQuoetesInput.whatsapp) {
                const response = await axios.post("https://ct-backend-apis.onrender.com/add-getQuotes-data", getQuoetesInput)
                if (response.status === 200) {
                    setShow(false)
                    Swal.fire({
                        icon: "success",
                        text: "We will Connect you soon"
                    })
                    window.location.reload(false);
    
                    // window.reload()
                }
            }
            else {
                Swal.fire({
                    icon: "error",
                    text: "All fields mandatory"
                })
            }  
        } catch (error) {
            console.log(error)
        }
    
    }
    return (
        <div id="heroslider-div">
            <ParticlesPage id="particles" />
            <div id="slider-div">
                <Slider {...settings} ref={sliderRef} >
                    {herosliderData.map((items, i) => {
                        return (
                            <div className="heroslider-container one d-flex">
                                <div className="heroslider-container-one-first">

                                    <div id="web-dev-heading-span">
                                        <h1 id="heroslider-title" style={{ color: selectedColor }}>{items.title}</h1>
                                        <h3 id="dev-company-heading">Development Company</h3>

                                    </div>
                                    <div id="no-one-company">

                                        <p id="hash1" style={{fontWeight:500}}>#1</p>
                                        <p id="line-span"> |</p>
                                        <p id="no-one-co-para"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, non. </p>
                                    </div>
                                    <button id="hero-get-in-touch" onClick={() => { handleShow(); setgetQuotesInput({ ...getQuoetesInput, devCategory: `${items.title} development company` }) }}>Get a Quotes {" "} &rarr;</button>


                                </div>
                                <div className="heroslider-container-one-second">
                                    <img src={items.herosliderImage} alt="" srcset="" />
                                </div>
                            </div>
                        )
                    })}
                </Slider>
            </div>
            <Modal show={show} onHide={handleClose} centered className="custom-modal">
                <Modal.Header id="hero-slider-form-heading">
                    Get Quotes Form
                </Modal.Header>
                <Modal.Body style={{ fontSize: "10px", overflow: "auto" }}></Modal.Body>
                <form id="modal-home-page-contact-form">
                    <fieldset id='full-name-fieldset-in-heroslider' className="homepage-form-fieldset">
                        <input type="text" name="" id="full-name" placeholder='Full Name*' onChange={(e) => { setgetQuotesInput({ ...getQuoetesInput, fullName: e.target.value }) }} />
                        <input type="email" name="" id="email-input" placeholder='Email*' onChange={(e) => { setgetQuotesInput({ ...getQuoetesInput, email: e.target.value }) }} />
                    </fieldset>
                    <fieldset id='full-contact-fieldset-in-heroslider' className="homepage-form-fieldset">
                        <input type="text" name="" id="contact-no" placeholder='Contact No*' onChange={(e) => { setgetQuotesInput({ ...getQuoetesInput, contactNo: e.target.value }) }} />
                        <input type="text" name="" id="whatsapp-no" placeholder='Whatsapp No.' onChange={(e) => { setgetQuotesInput({ ...getQuoetesInput, whatsapp: e.target.value }) }} />
                    </fieldset>
                    <fieldset id='full-address-fieldset-in-heroslider' className="homepage-form-fieldset">
                        <input type="text" name="" id="" placeholder='Address/Location' onChange={(e) => { setgetQuotesInput({ ...getQuoetesInput, address: e.target.value }) }} />
                    </fieldset>
                    <fieldset id="message-textarea-fieldset-in-heroslider" className="homepage-form-fieldset">
                        <textarea name="" id="message-textarea-home-page" cols="90" rows="3" placeholder='Write a message(optional)' onChange={(e) => { setgetQuotesInput({ ...getQuoetesInput, message: e.target.value }) }}></textarea>
                    </fieldset>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={() => { handleClose(); GetQuotesFormFunc() }}>
                            Send Message
                        </Button>
                    </Modal.Footer>

                </form>

            </Modal>
        </div>

    )
}
export default HeroSlider