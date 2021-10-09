import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
 class HiOverview extends Component {
    render() {
     const data=this.props.data.subject
        return (
            <Fade duration={1500}>
            <div>
                 <div className="welcome">
                    <h1>Welcome to Carrot </h1>
                    <br />
                    <h2>BASIC INFORMATION</h2>
                </div>
                <div className="details">
                    <p className="detail name">NAME: {this.props.data.contact.name}</p>
                    <p className="detail">EMAIL: <span className="email">{this.props.data.contact.email}</span></p>
                    <p className="detail phone">PHONE NUMBER: {this.props.data.contact.phone}</p>
                    <p className="detail dob">DOB: {this.props.data.basic.dob}</p>
                    <p className="detail gender">GENDER: {this.props.data.basic.gender}</p>
                    <p className="detail gender">PLAN: {this.props.data.plan.name}</p>
                </div>
                <h2>BIO</h2>
                <div className="bio">
                {this.props.data.basic.bio}
                </div>
                
                <h2>SUBJECTS</h2>
             <br />
                    <div className="overview-subject">
                    { 
                    Object.entries(data).map((value) =>
                    (
                    <div key={value[0]} className="overview">
                        <h2 key={value[0]}>{value[0]==="subject_1"?"subject 1":
                        value[0]==="subject_2"?"subject 2":
                        value[0]==="subject_3"?"subject 3":
                        value[0]==="subject_4"?"subject 4":
                        value[0]==="subject_5"?"subject 5":value[0]}</h2>
                        {Object.entries(value[1]).map((subject) =>(
                        <p key={subject[0]}>
                            {
                            subject[0]==="perweek"?"Classes Per Week":
                            subject[0]==="subject_name"?"subject name":
                            subject[0]==="hours"?"hour(s) per class":subject[0]}:&nbsp;&nbsp;
                            {subject[0]==="duration"?subject[1]+" week(s)":
                            subject[0]==="completed"&&subject[1]===false?"No":subject[0]==="completed"&&subject[1]===true?"yes":
                            subject[1]
                            }
                        </p>
                        ))}
                    </div>))
                    }
                    </div>
                   
                
                
            </div>
            </Fade>
        )
    }
}

export default HiOverview
