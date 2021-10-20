import React from 'react'
import upper from '../../../resources/images/upper.jpg'
import upper6 from '../../../resources/images/upper6.jpg'
import upper7 from '../../../resources/images/upper7.jpg'
import upper8 from '../../../resources/images/upper8.jpg'
import j from '../../../resources/images/junior.jpg'
import j2 from '../../../resources/images/junior2.jpg'

import Fade from 'react-reveal/Fade'
function Jamb() {
    window.scrollTo({
        top: 0, 
        behavior: 'smooth'
      });
    return (
        <Fade duration={2000}>
        <div className="cat-container">
            <div className="cat-content">
            <div className="cat-button"><h2>jamb/utme</h2></div>
                <div className="cat-body">
                    <div className="card">
                        <div className="image"><img src={j} alt="cat-caption" /></div>
                        <h2>Jamb Maths Tutor</h2>
                        <p>Hire a proficient and experienced Jamb Maths Tutor to help you prepare for Jamb exams.
                        </p>
                    </div>

                    <div className="card">
                        <div className="image"><img src={upper} alt="cat-caption" /></div>
                        <h2>Jamb English Language Tutor</h2>
                        <p>Hire an experienced and professional Jamb English Language 
                            Tutor to help you prepare for your upcoming jamb exams.
                        </p>
                    </div>

                    <div className="card">
                        <div className="image"><img src={j2} alt="cat-caption" /></div>
                        <h2>Jamb Physics Tutor</h2>
                        <p>Hire a professional and experienced physics home tutor 
                            to help you in your upcoming waec exams.
                        </p>
                    </div>

                    <div className="card">
                        <div className="image"><img src={j} alt="cat-caption" /></div>
                        <h2>Jamb Chemistry Tutor</h2>
                        <p>Hire an experienced and proficient chemistry home 
                            tutor to help you prepare for Jamb exams.
                        </p>
                    </div>

                    <div className="card">
                        <div className="image"><img src={upper6} alt="cat-caption" /></div>
                        <h2>Jamb Biology Tutor</h2>
                        <p>Hire an experienced biology home tutor to help you prepare for your Jamb exams.
                        </p>
                    </div>

                    <div className="card">
                        <div className="image"><img src={upper7} alt="cat-caption" /></div>
                        <h2>Jamb Government Tutor</h2>
                        <p>Hire a professional Jamb Government Tutor for your Jamb exams.
                        </p>
                    </div>

                    <div className="card">
                        <div className="image"><img src={upper8} alt="cat-caption" /></div>
                        <h2>Jamb Literature in English Tutor</h2>
                        <p>Hire a good and experienced Jamb Literature in English Tutor for your Jamb exams.
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
        </Fade>
    )
}

export default Jamb
