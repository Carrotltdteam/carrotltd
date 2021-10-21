import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Slider1 from'../../../resources/images/s1.jpg'
import Slider2 from'../../../resources/images/s2.jpg'
import Slider3 from'../../../resources/images/s3.jpg'
import {BsArrowRight,BsArrowLeft} from 'react-icons/bs'
import {NavLink} from 'react-router-dom'

const fadeProperties = {
    duration: 3000,
    transitionDuration: 400,
    infinite: true,
    indicators: false,
    ease:'ease-in',
    prevArrow: <div className='left-arrow-container'  ><BsArrowLeft className="left-arrow"/></div> ,
   nextArrow: <div className='right-arrow-container' ><BsArrowRight className="right-arrow"/></div>
  }

function Slider() {
    return (
      <div className='slide'>
        
        <Fade className="fade" {...fadeProperties}>
       
     <div className="each-fade ">
            <div className="slide-content" style={{'backgroundImage': `url(${Slider1})`}}>
            
            <div className="slide-body">
            <h1 id="get">GET A TUTOR</h1>
              <p className='top'>Are you satisfied with your child's 
              academic performance? Do you think he / she can do better 
              academically if assisted? Do you need a competent and 
              professional home tutor in Nigeria to help shape the 
              academic performance of your child?</p>
              <NavLink className="btn-slide-get" to="/signup">Get a Tutor</NavLink>
            </div>
           
              
            </div>
          </div>
          <div className="each-fade ">
            <div className="slide-content" style={{'backgroundImage': `url(${Slider2})`}}>
            <div className="slide-body">
            <h1 id="get">BECOME A TUTOR</h1>
              <p className='top'>Carrot Tutors provides an avenue for 
              experienced teachers to manage and grow their home tutoring 
              business. Did you know that there are over 500,000 parents 
              in Nigeria willing to pay a premium (probably equal to or 
              more than your regular school salary) to teach their kids or 
              even them according to a professional standard</p>
              <NavLink className="btn-slide-get" to="/signup">Become a Tutor</NavLink>
            </div>
            </div>
            
          </div>
          <div className="each-fade ">
         
            <div className="slide-content" style={{'backgroundImage': `url(${Slider3})`}}>
            <div className="slide-body">
              <h1 id="become">ABOUT CARROT</h1>
              <p className='top'>Carrot is a Nigeria base tutoring 
              company with a presence in United Kingdom that 
              specializes in connecting you with professional 
              home tutors near you. Our interest is to break from 
              the norm of formal education by providing Tutors for 
              basically anything a client may wish to learn.</p>
              <NavLink className="btn-slide-about" to="/about">About Us</NavLink>
            </div>
            </div>
          </div>

        
       
       
          
    </Fade>
    </div>
       
      
    
    )
}

export default Slider


 