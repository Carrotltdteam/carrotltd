import React from 'react'
import {NavLink} from 'react-router-dom'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Fade from 'react-reveal/Fade'
function Privacy() {
    window.scrollTo({
        top: 0, 
        behavior: 'smooth'
      });
    return (
        
        <>
        <Header active="privacy"/>
            <Fade duration={1500}>
                <div className="privacy-container">
                    <div className="privacy-top">
                        <div>
                            <h1>PRIVACY</h1>
                            <p><NavLink to="/">Home</NavLink> &gt; <span>Privacy</span> </p>
                        </div>
                    </div>  
                </div>
            </Fade>
        <Footer/>
        </>
    )
}

export default Privacy
