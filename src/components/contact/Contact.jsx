import React from 'react'
import {GiSmartphone,GiClick} from 'react-icons/gi'
import {FiMail} from 'react-icons/fi'
import {FaMapMarkerAlt,FaInstagram,FaFacebook,FaTwitter,FaLinkedinIn,FaYoutube} from 'react-icons/fa'
import {NavLink} from 'react-router-dom'
import Fade from 'react-reveal/Fade'
import Header from '../header/Header'
import Footer from '../footer/Footer'
function Contact() {
    window.scrollTo({
        top: 0, 
        behavior: 'smooth'
      });
    return (
        <>
        <Header active="contact"/>
        <Fade duration={1500}>
        <div className="contact-container">
            <div className="contact-top">
                <div>
                <h1>CONTACT</h1>
                <p><NavLink to="/">Home</NavLink> &gt; <span>Contact</span> </p>
                </div>
                
            </div>

            <div className="contact-body-1">
                <div className="body-1-left">
                    <h1>NEED ENQUIRY?</h1>
                    <form>
                        <div className="name-email">
                            <input type="text" placeholder="Your name"  name="name" className="name form-control" required/>
                            <input type="email" placeholder="Your e-mail"  name="email" className="email form-control" required/>
                        </div>
                        <input type="text" placeholder="Subject"  name="subject" className="subject form-control" required/>
                        <textarea className="form-control"  placeholder="Message"name="message" id="message" cols="30" rows="10" required/>
                        <button className="enquiry-btn">Send Enquiry</button>
                    </form>
                   
                </div>
                <div className="body-1-right">
               
                    <p className="right-text">
                    Our head office is located at 3 William street, Sawmill road Gbagada, 
                    but we provide tutors anywhere in Lagos/Abuja. 
                    Mondays-Saturdays, 8AM-6PM
                    </p>


                    <div className="contact">
                        <div className="contact-info">
                            <div className="icon"><span><GiSmartphone/></span></div>
                            <h3>Phone Number</h3>
                            <p>07030050354</p>
                        </div>
                        <div className="contact-info">
                            <div className="icon"><span><FiMail/></span></div>
                            <h3>Email Address</h3>
                            <p>adesholaadeoye4@gmail.com</p>
                        </div>
                        <div className="contact-info">
                            <div className="icon"><span><FaMapMarkerAlt/></span></div>
                            <h3>Office Address</h3>
                            <p>3 William street, Sawmill road Gbagada</p>
                        </div>
                        <div className="contact-info">
                            <div className="icon"><span><GiClick/></span></div>
                            <h3>Follow Us On</h3>
                            <div className="social">
                                <NavLink to="#"><FaFacebook/></NavLink>
                                <NavLink to="#"><FaInstagram/></NavLink>
                                <NavLink to="#"><FaLinkedinIn/></NavLink>
                                <NavLink to="#"><FaTwitter/></NavLink>
                                <NavLink to="#"><FaYoutube/></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </div>
        </Fade>
        <Footer/>
        </>
    )
}

export default Contact
