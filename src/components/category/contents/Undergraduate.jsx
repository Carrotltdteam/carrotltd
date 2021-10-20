import React from 'react'
import upper from '../../../resources/images/upper.jpg'
import upper6 from '../../../resources/images/upper6.jpg'
import upper8 from '../../../resources/images/upper8.jpg'
import upper9 from '../../../resources/images/upper9.jpg'


import Fade from 'react-reveal/Fade'
function Undergraduate() {
    window.scrollTo({
        top: 0, 
        behavior: 'smooth'
      });
    return (
        <Fade duration={2000}>
        <div className="cat-container">
            <div className="cat-content">
            <div className="cat-button"><h2>undergraduate</h2></div>
                <div className="cat-body">
                    <div className="card">
                        <div className="image"><img src={upper8} alt="cat-caption" /></div>
                        <h2>Statistics</h2>
                        <p>Memorizing formulas can be tasking. Hire our statistics 
                            home tutors to give you the secret to solving statistics 
                            and help you regain your confidence.
                        </p>
                    </div>

                    <div className="card">
                        <div className="image"><img src={upper} alt="cat-caption" /></div>
                        <h2>Calculus</h2>
                        <p>Fundamental theorem, inverse chain rule, differentiation, 
                            integration, are all topics that our tutors will break 
                            down to the minimal level for your understanding.
                        </p>
                    </div>

                    <div className="card">
                        <div className="image"><img src={upper6} alt="cat-caption" /></div>
                        <h2>Chemistry Tutor</h2>
                        <p>Memorizing formulas can be tasking. Hire our statistics 
                            home tutors to give you the secret to solving statistics 
                            and help you regain your confidence.
                        </p>
                    </div>

                    <div className="card">
                        <div className="image"><img src={upper9} alt="cat-caption" /></div>
                        <h2>Engineering Maths Tutor</h2>
                        <p>Hire a good and experienced Engineering Maths 
                            Tutor around you to take you Engineering Mathematics.
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
        </Fade>
    )
}

export default Undergraduate
