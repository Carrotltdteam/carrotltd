import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import app from '../../config/fire';
import {getFirestore, collection, query, where, getDocs } from "firebase/firestore";
const db=getFirestore(app)
 class AdOverview extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
            aUsers:0,
            tUsers:0,
            uUsers:0
         }
     }
     


    componentDidMount(){
        this.GetTotalUser()
        this.GetUnapprovedUser()
        this.GetApprovedUser()
     }
    
    GetTotalUser=async()=>{
    const q = query(collection(db, "users"));
    var totalUser=0
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      totalUser++
    })
    this.setState({
        tUsers:totalUser
    }) 
    }
    
    GetUnapprovedUser=async()=>{
       const q = query(collection(db, "users"), where("approved", "==", false));
       var unapprovedTutor=0
        const querySnapshot = await getDocs(q);
       querySnapshot.forEach((doc) => {
          unapprovedTutor++
       })
       this.setState({
        uUsers:unapprovedTutor
    }) 
    }
    
    GetApprovedUser=async()=>{
        const q = query(collection(db, "users"), where("approved", "==", true));
        var approvedTutor=0
         const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            approvedTutor++
        })
        this.setState({
            aUsers:approvedTutor
        })
     }
    render() {
        const userData={
            total:this.state.tUsers,
            unapproved:this.state.uUsers,
            approved:this.state.aUsers
        }
        return (
            <Fade duration={1500}>
                <div className="overview-container">
                    <h1>Overview</h1>
                    <br /><br />
                    <h2>User Info</h2>
                    <div className="details">
                    <p className="detail">Total User: {userData.total}</p>
                    <p className="detail">Total Clients: {userData.total-(userData.unapproved+userData.approved)}</p>
                    <p className="detail">Approved Tutors: {userData.approved}</p>
                    <p className="detail">Total tutors: {userData.unapproved+userData.approved}</p>
                    <p className="detail"> Unapproved Tutors: {userData.unapproved}</p>
                    
                </div>
                    
                </div>
            </Fade>
        )
    }
}

export default AdOverview
