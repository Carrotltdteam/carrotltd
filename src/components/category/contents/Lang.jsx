import React from 'react'
import upper from '../../../resources/images/upper.jpg'

import upper7 from '../../../resources/images/upper7.jpg'
import upper8 from '../../../resources/images/upper8.jpg'
import upper9 from '../../../resources/images/upper9.jpg'
import j from '../../../resources/images/junior.jpg'
import j2 from '../../../resources/images/junior2.jpg'
import geo from '../../../resources/images/geo.jpg'
import Fade from 'react-reveal/Fade'
function Lang() {
    window.scrollTo({
        top: 0, 
        behavior: 'smooth'
      });
    return (
        <Fade duration={2000}>
        <div className="cat-container">
            <div className="cat-content">
            <div className="cat-button"><h2>languages</h2></div>
                <div className="cat-body">
                    <div className="card">
                        <div className="image"><img src={j} alt="cat-caption" /></div>
                        <h2>Chinese Language</h2>
                        <p>Learn to speak mandarin and other chinese languages with 
                            the help of our language expert home tutors
                        </p>
                    </div>

                    <div className="card">
                        <div className="image"><img src={upper} alt="cat-caption" /></div>
                        <h2>English Language Tutor</h2>
                        <p>The importance of speaking, reading and writing properly 
                            is the essence of education. Get an English home tutor 
                            to help you build yourself on these skills.
                        </p>
                    </div>

                    <div className="card">
                        <div className="image"><img src={j2} alt="cat-caption" /></div>
                        <h2>Spanish Language Tutor</h2>
                        <p>Hire an experienced Spanish Language Tutor today.
                        </p>
                    </div>

                    <div className="card">
                        <div className="image"><img src={j} alt="cat-caption" /></div>
                        <h2>French Language Tutor</h2>
                        <p>Hire a good and experienced French Language Tutor today to help you learn French.
                        </p>
                    </div>

                    <div className="card">
                        <div className="image"><img src={upper9} alt="cat-caption" /></div>
                        <h2>Yoruba Language Tutor</h2>
                        <p>Learn to speak Yoruba fluently by getting a Professional Yoruba 
                            Language tutor from Carrot today.
                        </p>
                    </div>

                    <div className="card">
                        <div className="image"><img src={upper8} alt="cat-caption" /></div>
                        <h2>Hausa Language Tutor</h2>
                        <p>Learn to speak Hause hire a Hausa Language Tutor today.
                        </p>
                    </div>

                    <div className="card">
                        <div className="image"><img src={upper7} alt="cat-caption" /></div>
                        <h2>Igbo Language Tutor</h2>
                        <p>Hire a home tutor to teach you Igbo Language.
                        </p>
                    </div>

                    <div className="card">
                        <div className="image"><img src={upper} alt="cat-caption" /></div>
                        <h2>German Language Tutor</h2>
                        <p>Hire an experienced German Language Tutor today.
                        </p>
                    </div>

                    <div className="card">
                        <div className="image"><img src={geo} alt="cat-caption" /></div>
                        <h2>Portuguese language</h2>
                        <p>Hire an experienced Portuguese Language Tutor today.
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
        </Fade>
    )
}

export default Lang
