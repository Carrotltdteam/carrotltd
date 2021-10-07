import React from 'react'
import Slider from './slide/Slider'
import Weare from './we/Weare'
import Category from './category/Category'
import Services from './services/Services'
import Faq from './faq/Faq'
import Fade from 'react-reveal/Fade'
import Header from '../header/Header'
import Footer from '../footer/Footer'

function Landing() {
    window.scrollTo({
        top: 0, 
        behavior: 'smooth'
      });
    return (
        <>
        <Header/>
        <Fade duration={1500}>
        <div>
            <Slider/>
            <Weare/>
            <Category/>
            <Services/>
            <Faq/>  
        </div>
        </Fade>
        <Footer/>
        </>
    )
}

export default Landing
