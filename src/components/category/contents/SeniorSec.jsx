import React from 'react'
import upper from '../../../resources/images/upper.jpg'
import upper6 from '../../../resources/images/upper6.jpg'
import upper7 from '../../../resources/images/upper7.jpg'
import upper8 from '../../../resources/images/upper8.jpg'
import upper9 from '../../../resources/images/upper9.jpg'
import j from '../../../resources/images/junior.jpg'
import j2 from '../../../resources/images/junior2.jpg'
import Fade from 'react-reveal/Fade'
function SeniorSec() {
    window.scrollTo({
        top: 0, 
        behavior: 'smooth'
      });
    return (
        <Fade duration={2000}>
        <div className="cat-container">
            <div className="cat-content">
            <div className="cat-button"><h2>senior secondary</h2></div>
                <div className="cat-body">
                    <div className="card">
                        <div className="image"><img src={upper} alt="cat-caption" /></div>
                        <h2>Senior Secondary Economics Tutor</h2>
                        <p>Let our tutors help you unravel the secrets of economy 
                            from the basic to the advanced level.
                        </p>
                    </div>

                    <div className="card">
                        <div className="image"><img src={j} alt="cat-caption" /></div>
                        <h2>Calculus</h2>
                        <p>Fundamental theorem, inverse chain rule, differentiation, 
                            integration, are all topics that our tutors will break 
                            down to the minimal level for your understanding.
                        </p>
                    </div>

                    <div className="card">
                        <div className="image"><img src={j} alt="cat-caption" /></div>
                        <h2>Senior Secondary School Math Tutor</h2>
                        <p>Get the best tutors in senior secondary school math at your convenience.
                        </p>
                    </div>

                    <div className="card">
                        <div className="image"><img src={upper6} alt="cat-caption" /></div>
                        <h2>Senior Secondary School English Tutor</h2>
                        <p>Hire an English language tutor to help you with English grammar, 
                            diction and to aid you in passing English exams.
                        </p>
                    </div>

                    <div className="card">
                        <div className="image"><img src={upper7} alt="cat-caption" /></div>
                        <h2>Senior Secondary School Chemistry Tutor</h2>
                        <p>Hire a professional and experienced Senior Secondary 
                            School Chemistry Tutor to help you in chemistry.
                        </p>
                    </div>

                    <div className="card">
                        <div className="image"><img src={j2} alt="cat-caption" /></div>
                        <h2>Senior Secondary School Biology Tutor</h2>
                        <p>Hire a proficient and experienced Senior Secondary School 
                            Biology Tutor today to help you in Biology.
                        </p>
                    </div>

                    <div className="card">
                        <div className="image"><img src={upper8} alt="cat-caption" /></div>
                        <h2>Senior Secondary School Further Mathematics Tutor</h2>
                        <p>Hire a proficient and experienced Senior Secondary School 
                            Further Mathematics Tutor to help you in Further Maths today.
                        </p>
                    </div>

                    <div className="card">
                        <div className="image"><img src={upper} alt="cat-caption" /></div>
                        <h2>Senior Secondary School Government Tutor</h2>
                        <p>Hire a good Senior Secondary School Government Tutor to help you in government.
                        </p>
                    </div>

                    <div className="card">
                        <div className="image"><img src={j2} alt="cat-caption" /></div>
                        <h2>Senior Secondary School Agric Tutor</h2>
                        <p>Improve in agricultural science by getting an experienced Senior 
                            Secondary School Agric Tutor.
                        </p>
                    </div>

                    <div className="card">
                        <div className="image"><img src={j} alt="cat-caption" /></div>
                        <h2>Senior Secondary School Literature in English Tutor</h2>
                        <p>Get a professional Literature In English tutor. Challenge your 
                            literary skills and ability. Let our experienced tutors help y
                            ou discover and improve yourself in the world of literature.
                        </p>
                    </div>

                    <div className="card">
                        <div className="image"><img src={upper6} alt="cat-caption" /></div>
                        <h2>Senior Secondary School Physics Tutor</h2>
                        <p>Hire a professional Senior Secondary School Physics Tutor today.
                        </p>
                    </div>

                    <div className="card">
                        <div className="image"><img src={upper9} alt="cat-caption" /></div>
                        <h2>Senior Secondary School Accounting Tutor</h2>
                        <p>Hire a good Senior Secondary School AccountingTutor to help you in Account.
                        </p>
                    </div>

                    <div className="card">
                        <div className="image"><img src={j2} alt="cat-caption" /></div>
                        <h2>Senior Secondary School Technical Drawing Tutor</h2>
                        <p>Hire a professional Senior Secondary School Technical Drawing Tutor today.
                        </p>
                    </div>

                    <div className="card">
                        <div className="image"><img src={j} alt="cat-caption" /></div>
                        <h2>Senior Secondary School Commerce Tutor</h2>
                        <p>Hire a professional and experienced Senior Secondary School Commerce Tutor today.
                        </p>
                    </div>

                    <div className="card">
                        <div className="image"><img src={j} alt="cat-caption" /></div>
                        <h2>Senior Secondary School Further Mathematics Tutor</h2>
                        <p>Hire an experienced Senior Secondary School Further 
                            Mathematics Tutor to teach you with the American and british curriculum.
                        </p>
                    </div>
                    
                </div>
            </div>
            
        </div>
        </Fade>
    )
}

export default SeniorSec
