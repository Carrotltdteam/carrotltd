import React from 'react'
import home from '../../../resources/images/home.jpg'
import lang from '../../../resources/images/lang.jpg'
import exam from '../../../resources/images/exam.jpg'
import {BsArrowRight,} from 'react-icons/bs'
import {NavLink} from 'react-router-dom'
function Category() {
    return (
        <div className="category_container">
            
            <h1>Popular Category</h1>
            <p>Our categories include but not limited to:</p>
            <div className="category">
                <div className="card">
                <div className="card-img"><img src={home} alt="card-imgage" /></div>
                        <div className="card-link" href="#">Home Tutor</div>
                </div> 

                <div className="card">
                <div className="card-img"><img src={lang} alt="card-imgage" /></div>
                        <div className="card-link" href="#">Language</div>
                </div> 

                <div className="card">
                        <div className="card-img"><img src={exam} alt="card-imgage" /></div>
                        <div className="card-link" href="#">Exam Prep</div>
                </div> 
            </div>
            <div className="more-container">
                <NavLink className="more" to="/category">More Category <span className="line"> <BsArrowRight/></span></NavLink>
            </div>
           
            
        </div>
    )
}

export default Category
