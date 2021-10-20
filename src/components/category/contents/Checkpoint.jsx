import React from 'react'
import upper from '../../../resources/images/upper.jpg'
import j from '../../../resources/images/junior.jpg'
import j2 from '../../../resources/images/junior2.jpg'
import Fade from 'react-reveal/Fade'
function Checkpoint() {
    window.scrollTo({
        top: 0, 
        behavior: 'smooth'
      });
    return (
        <Fade duration={2000}>
        <div className="cat-container">
            <div className="cat-content">
                <div className="cat-button"><h2>Checkpoint</h2></div>
                <div className="cat-body">
                    <div className="card">
                        <div className="image"><img src={upper} alt="cat-caption" /></div>
                        <h2>Check Point Exam Maths Tutor</h2>
                        <p>Hire an experienced and professional checkpoint exam maths tutor today.
                        </p>
                    </div>

                    <div className="card">
                        <div className="image"><img src={j} alt="cat-caption" /></div>
                        <h2>Check point Exam English tutor</h2>
                        <p>Hire a professional and experienced Checkpoint exam English tutor today.
                        </p>
                    </div>

                    <div className="card">
                        <div className="image"><img src={j2} alt="cat-caption" /></div>
                        <h2>Check Point Exam Science Tutor</h2>
                        <p>Hire an experienced Check Point Exam Science Tutor to help you prepare for your upcoming exams.
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
        </Fade>
    )
}

export default Checkpoint
