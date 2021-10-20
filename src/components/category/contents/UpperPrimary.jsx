import React from 'react'
import upper from '../../../resources/images/upper.jpg'
import upper1 from '../../../resources/images/upper1.jpg'
import upper13 from '../../../resources/images/upper13.jpg'
import upper2 from '../../../resources/images/upper2.jpg'
import upper5 from '../../../resources/images/upper5.jpg'
import upper6 from '../../../resources/images/upper6.jpg'
import upper7 from '../../../resources/images/upper7.jpg'
import upper8 from '../../../resources/images/upper8.jpg'
import upper9 from '../../../resources/images/upper9.jpg'
import Fade from 'react-reveal/Fade'
function UpperPrimary() {
    window.scrollTo({
        top: 0, 
        behavior: 'smooth'
      });
    return (
        <Fade duration={2000}>
        <div className="cat-container">
            <div className="cat-content">
            <div className="cat-button"><h2>upper primary</h2></div>
                <div className="cat-body">
                    <div className="card">
                        <div className="image"><img src={upper} alt="cat-caption" /></div>
                        <h2>Upper Primary Math Tuto</h2>
                        <p>Get a professional upper primary maths tutor 
                            to help increase your mathematics grades.
                        </p>
                    </div>

                    <div className="card">
                        <div className="image"><img src={upper1} alt="cat-caption" /></div>
                        <h2>Common Entrance Math Tutor</h2>
                        <p>Get an experienced professional common entrance 
                            mathematics tutor to prepare for common entrance 
                            exams.
                        </p>
                    </div>

                    <div className="card">
                        <div className="image"><img src={upper13} alt="cat-caption" /></div>
                        <h2>Upper Primary English Tutor</h2>
                        <p>Get a professional English Language home tutor to help 
                            your child in his reading, grammar, and speaking 
                            English fluently.
                        </p>
                    </div>

                    <div className="card">
                        <div className="image"><img src={upper2} alt="cat-caption" /></div>
                        <h2>Common Entrance English Tutor</h2>
                        <p>Get a professional common entrance English tutor 
                            today to help prepare your child for the upcoming 
                            common entrance exam.
                        </p>
                    </div>

                    <div className="card">
                        <div className="image"><img src={upper2} alt="cat-caption" /></div>
                        <h2>Upper Primary Enrichment Subjects Tutor</h2>
                        <p>Hire tutors that are proficient in teaching social 
                            studies, physical education, vocational studies, art and crafts
                        </p>
                    </div>

                    <div className="card">
                        <div className="image"><img src={upper} alt="cat-caption" /></div>
                        <h2>British Upper Primary Math Tutor</h2>
                        <p>Hire an experienced Upper Primary Math Tutor to teach 
                            you with the British curriculum at your convenience.
                        </p>
                    </div>

                    <div className="card">
                        <div className="image"><img src={upper5} alt="cat-caption" /></div>
                        <h2>British Common Entrance Math Tutor</h2>
                        <p>Hire a professional home tutor that would help you 
                            in preparation for Common Entrance Math exams today.
                        </p>
                    </div>

                    <div className="card">
                        <div className="image"><img src={upper6} alt="cat-caption" /></div>
                        <h2>American Common Entrance Math Tutor</h2>
                        <p>Hire a professional home tutor that would help you 
                            in preparation for Common Entrance Math using the 
                            American curriculum.
                        </p>
                    </div>

                    <div className="card">
                        <div className="image"><img src={upper2} alt="cat-caption" /></div>
                        <h2>British Upper Primary English Tutor</h2>
                        <p>Hire an experienced Upper Primary English Tutor to 
                            teach you, vocabulary, reading, literacy, grammar, 
                            verbal reasoning, writing and speaking with the British curriculum.
                        </p>
                    </div>

                    <div className="card">
                        <div className="image"><img src={upper7} alt="cat-caption" /></div>
                        <h2>American Upper Primary English Tutor</h2>
                        <p>Hire an experienced Upper Primary English Tutor to teach you, 
                            vocabulary, reading, literacy, grammar, verbal reasoning, 
                            writing and speaking with the American curriculum.
                        </p>
                    </div>

                    <div className="card">
                        <div className="image"><img src={upper8} alt="cat-caption" /></div>
                        <h2>British Upper Primary Creative Writing Tutor</h2>
                        <p>Hire a professional and experienced Upper Primary 
                            Creative Writing Tutor to help you in difficult 
                            areas of your creative compositions.
                        </p>
                    </div>

                    <div className="card">
                        <div className="image"><img src={upper9} alt="cat-caption" /></div>
                        <h2>British Common Entrance English Tutor</h2>
                        <p>Get a professional common entrance English tutor 
                            today to help prepare your child for the upcoming 
                            common entrance exam.
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
        </Fade>
    )
}

export default UpperPrimary
