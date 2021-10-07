import React from 'react'
import nursery1 from '../../../resources/images/nursery1.jpg'
import nursery2 from '../../../resources/images/nursery2.jpg'
import Fade from 'react-reveal/Fade'
function Sat() {
    window.scrollTo({
        top: 0, 
        behavior: 'smooth'
      });
    return (
        <Fade duration={2000}>
        <div className="cat-container">
            <div className="cat-content">
            <div className="cat-button"><h2>sat</h2></div>
                <div className="cat-body">
                    <div className="card">
                        <div className="image"><img src={nursery1} alt="cat-caption" /></div>
                        <h2>Pre-Primary &amp; Lower Primary Tutor</h2>
                        <p>Hire experienced tutors in phonics, maths, 
                            handwriting and tutors that would help in 
                            homework support.
                        </p>
                    </div>

                    <div className="card">
                        <div className="image"><img src={nursery2} alt="cat-caption" /></div>
                        <h2>Upper Nursery</h2>
                        <p>Hire experienced tutors in phonics, maths, 
                            handwriting and tutors that would help in 
                            homework support.
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
        </Fade>
    )
}

export default Sat
