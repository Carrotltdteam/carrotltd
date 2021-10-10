import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
 class AdOverview extends Component {
    render() {
        return (
            <Fade duration={1500}>
                <div className="overview-container">
                    <h1>Overview</h1>

                    <br /><br />
                    <h2>User Info</h2>
                    <div className="details">
                    <p className="detail">Total User: {this.props.userData.total}</p>
                    <p className="detail">Approved Tutors: {this.props.userData.approved}</p>
                    <p className="detail">Total tutors: {this.props.userData.unapproved+this.props.userData.approved}</p>
                    <p className="detail"> Unapproved Tutors: {this.props.userData.unapproved}</p>
                    
                </div>
                    
                </div>
            </Fade>
        )
    }
}

export default AdOverview
