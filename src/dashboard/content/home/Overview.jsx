import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
 class Overview extends Component {
    render() {
     
        return (
            <Fade duration={1500}>
            <div>
                 <div className="welcome">
                    <h1>Welcome to Carrot </h1>
                    <h2>BASIC INFORMATION</h2>
                </div>
                <div className="details">
                    <p className="detail name">NAME: {this.props.data.contact.name}</p>
                    <p className="detail">EMAIL: <span className="email">{this.props.data.contact.email}</span></p>
                    <p className="detail phone">PHONE NUMBER: {this.props.data.contact.phone}</p>
                    <p className="detail dob">DOB: {this.props.data.basic.dob}</p>
                    <p className="detail gender">GENDER: {this.props.data.basic.gender}</p>
                    <p className="detail gender">APPROVED: {this.props.data.approved===false?"NO":"YES"}</p>
                </div>
                <h2>BIO</h2>
                <div className="bio">
                {this.props.data.basic.bio}
                </div>
                
            </div>
            </Fade>
        )
    }
}

export default Overview
