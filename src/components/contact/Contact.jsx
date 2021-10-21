import React, { Component } from 'react'
import emailjs from 'emailjs-com'
import {GiSmartphone,GiClick} from 'react-icons/gi'
import {FiMail} from 'react-icons/fi'
import {FaMapMarkerAlt,FaInstagram,FaFacebook,FaTwitter,FaLinkedinIn,FaYoutube} from 'react-icons/fa'
import {NavLink} from 'react-router-dom'
import Fade from 'react-reveal/Fade'
import Header from '../header/Header'
import Footer from '../footer/Footer'

 class Contact extends Component {

    SubmitQuery=(e)=>{
        e.preventDefault()
    
        emailjs.sendForm("service_nihdzjh","template_cyu8at1",e.target,"user_MQhQ6YXm3I2JEqVCsmp5T").then(res=>
            {alert("Email Sent!!!")}
        ).catch(error=>{alert(error.code)})
        e.target.name.value=""
        e.target.subject.value=""
        e.target.message.value=""
        e.target.email.value=""
    }
    render() {
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
                        <form onSubmit={this.SubmitQuery}>
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
                                <h3>UK Phone Number</h3>
                                <p>+447-405-805-483</p>
                                <h3>Nigeria Phone Number</h3>
                                <p>+234-703-005-0354, +234-808-050-7630</p>
                                <h3>Nigeria Phone Number</h3>
                                <p>+234-705-532-5747</p>
                            </div>
                            <div className="contact-info">
                                <div className="icon"><span><FiMail/></span></div>
                                <h3>Email Address</h3>
                                <p>carrotltdteam@gmail.com</p>
                            </div>
                            <div className="contact-info">
                                <div className="icon"><span><FaMapMarkerAlt/></span></div>
                                <h3>United Kingdom Address</h3>
                                <p>165 Shakespeare Road Gillingham, Kent. United Kingdom. ME7 5QB</p>
                                <h3>Nigeria Address</h3>
                                <p>3, Williams Street off Diya road, Gbagada Lagos.</p>
                                <h3>Nigeria Address</h3>
                                <p>196 Shibiri Road, Pako Bus Stop, Shibiri, Ojo, Lagos</p>
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
}

export default Contact
