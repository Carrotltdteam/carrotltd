import React from 'react'
import music1 from '../../../resources/images/music1.jpg'
import music2 from '../../../resources/images/music2.jpg'
import upper8 from '../../../resources/images/upper8.jpg'
import upper9 from '../../../resources/images/upper9.jpg'
import j from '../../../resources/images/junior.jpg'
import j2 from '../../../resources/images/junior2.jpg'

import Fade from 'react-reveal/Fade'
function Music() {
    window.scrollTo({
        top: 0, 
        behavior: 'smooth'
      });
    return (
        <Fade duration={2000}>
        <div className="cat-container">
            <div className="cat-content">
            <div className="cat-button"><h2>music</h2></div>
                <div className="cat-body">
                    <div className="card">
                        <div className="image"><img src={music2} alt="cat-caption" /></div>
                        <h2>Violin</h2>
                        <p>Learn to play the violin by getting a Professional violin 
                            tutor to teach you and help with your learning process.
                        </p>
                    </div>

                    <div className="card">
                        <div className="image"><img src={j} alt="cat-caption" /></div>
                        <h2>Voice Training</h2>
                        <p>Hire a vocal training home tutor to help you train 
                            and shape you voice to achieve your music goals.
                        </p>
                    </div>

                    <div className="card">
                        <div className="image"><img src={j2} alt="cat-caption" /></div>
                        <h2>Piano Tutor</h2>
                        <p>Hire a home tutor to teach you Piano
                        </p>
                    </div>

                    <div className="card">
                        <div className="image"><img src={music1} alt="cat-caption" /></div>
                        <h2>Guitar Tutor</h2>
                        <p>Hire a good and experienced Guitar Tutor today.
                        </p>
                    </div>

                    <div className="card">
                        <div className="image"><img src={upper9} alt="cat-caption" /></div>
                        <h2>Basic Music test Tutor</h2>
                        <p>Hire an experienced music tutor to help you learn music.
                        </p>
                    </div>

                    <div className="card">
                        <div className="image"><img src={upper8} alt="cat-caption" /></div>
                        <h2>Drums Tutor</h2>
                        <p>Hire a good and experienced Drums Tutor today.
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
        </Fade>
    )
}

export default Music
