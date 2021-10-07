import React from 'react'
import {BsCheck} from 'react-icons/bs'
import about_1 from '../../resources/images/about-1-right.jpg'
import about_2 from '../../resources/images/about-2-left.jpg'
import about_3 from '../../resources/images/about-3-left.jpg'
import {NavLink} from 'react-router-dom'
import Fade from 'react-reveal/Fade'
import Header from '../header/Header'
import Footer from '../footer/Footer'
function About() {
    window.scrollTo({
        top: 0, 
        behavior: 'smooth'
      });
    return (
        <>
        <Header active="about"/>
        <Fade duration={1500}>
        <div className="about-container">
            <div className="about-top">
                <h1>ABOUT US</h1>
                <p><NavLink to="/">Home</NavLink> &gt; <span>About us</span> </p>
            </div>

            <div className="about-body-1">
                <div className="body-1-left">
                    <h1>About Carrot</h1>
                    <p>
                    Carrot is a Nigeria base tutoring company with a 
                    presence in United Kingdom that specializes in connecting 
                    you with professional home tutors near you. Our interest 
                    is to break from the norm of formal education by providing 
                    Tutors for basically anything a client may wish to learn. 
                    From English language and grammar structuring to phonetics, 
                    sounds, and pronunciation, learners from the age of 4 can 
                    easily be signed up by their parents or wards online for 
                    classes that will take place either physically or online 
                    at the comfort of the child/learner.
                    </p>
                    <h3>Give your child the educational benefit of competing in today's globe</h3>
                    <p>
                    Here in Carrot, We believe that real learning requires 
                    a private strategy because no two learners are precisely 
                    the same. Therefore, through our various tutorial packages, 
                    which include one-on-one tutorial sessions, group learners 
                    tutorial sessions, and adult group tutorial sessions, 
                    we strive to provide our customers with very engaging 
                    teaching procedures.
                    </p>
                </div>
                <div className="body-1-right">
                    <img src={about_1} alt="right-caption" />

                </div>
            </div>
            

            <div className="about-body-2-container">
            <div className="about-body-2">
                <div className="body-2-left">
                    <img src={about_2} alt="left-caption" />

                </div>
                <div className="body-2-right">
                    <h1>Our Approach to Learning</h1>                 
                    <div>
                        <span><BsCheck/></span>
                        <p>Learning should be 1 to 1 and personalized for optimal support
                        </p>
                    </div>
                   <div>
                        <span><BsCheck/></span>
                        <p>Our tutors always ensure that they have a deep 
                        understanding of the strengths and weakness of the learner, 
                        which serves as a guide to the flow of sessions
                        </p>
                    </div>
                    <div>
                        <span><BsCheck/></span>
                        <p>We also ensure that there is a very clear way to 
                        track the learner's performance and the Report Progress made 
                        by the learner to the parent/client.
                        </p>
                    </div>
                   
                    <h3>We manage nearly every range of exams</h3>
                    <p>
                    Our tutors have the capacity to academically equip learners 
                    with the capacity to excel. We have tutors who can prepare 
                    students for various tests ranging from the National Common 
                    Entrance exams to JAMB, SSAT, SSCE, GCE, NECO, IGCSE, SAT, 
                    GMAT / GRE, IELTS, TOEFL, PTE, ACCA, ICAN, and many more. 
                    For whatever reasons the learner may need to involve a tutor 
                    we have ensured that the selected tutor for that learner has 
                    an intense knowledge of the necessary curriculum as well as 
                    concentrating on significant areas of concentration that enable 
                    ideal comprehension before starting the exam.
                    </p>
                </div>
            </div>
            </div>


            <div className="about-body-3">
            
                <div className="body-3-left">
                    <h3>Give your child the educational benefit of competing in today's globe</h3>
                    <p>
                    Here in Carrot, We believe that real learning requires 
                    a private strategy because no two learners are precisely 
                    the same. Therefore, through our various tutorial packages, 
                    which include one-on-one tutorial sessions, group learners 
                    tutorial sessions, and adult group tutorial sessions, 
                    we strive to provide our customers with very engaging 
                    teaching procedures.
                    </p>
                </div>
                <div className="body-3-right">
                    <img src={about_3} alt="right-caption" />

                </div>
            </div>
            
            
        </div>
        </Fade>
        <Footer/>
        </>
    )
}

export default About
