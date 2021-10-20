import React from 'react'
import upper10 from '../../../resources/images/upper10.jpg'
import upper12 from '../../../resources/images/upper12.jpg'
import Fade from 'react-reveal/Fade'
function Ielts() {
    window.scrollTo({
        top: 0, 
        behavior: 'smooth'
      });
    return (
        <Fade duration={2000}>
        <div className="cat-container">
            <div className="cat-content">
                <div className="cat-button"><h2>ielts/toefl</h2></div>
                <div className="cat-body">
                    <div className="card">
                        <div className="image"><img src={upper10} alt="cat-caption" /></div>
                        <h2>IELTS Tutor</h2>
                        <p>Hire an experienced and professional IELTS tutor to 
                            help you get band 7.0 and above in your exams.
                        </p>
                    </div>

                    <div className="card">
                        <div className="image"><img src={upper12} alt="cat-caption" /></div>
                        <h2>TOEFL Tutor</h2>
                        <p>Hire proficient and experienced Toefl home tutors to 
                            help you prepare for your upcoming exams.
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
        </Fade>
    )
}

export default Ielts
