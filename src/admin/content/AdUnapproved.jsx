import React, { PureComponent } from 'react'
import  Fade from 'react-reveal/Fade'
import app from '../../config/fire';
import {getFirestore, collection, query, where, getDocs } from "firebase/firestore";
const db=getFirestore(app)
 class AdUnapproved extends PureComponent {
     constructor(props) {
         super(props)
     
         this.state = {
              tutors:[]
             
         }
     }
     

  componentDidMount(){
      this.GetApprovedUser()
  }  
GetApprovedUser=async()=>{
    
    const q = query(collection(db, "users"), where("approved", "==", false));
     const querySnapshot = await getDocs(q);
     var newTutor=[...this.state.tutors]
    querySnapshot.forEach((doc) => {
        
        newTutor.push( {contact:
            doc.data().contact,
            basic:doc.data().basic
        } );
        
        
    })
    this.setState({
        tutors:newTutor
    })
    
 }



    render() {
    const item=[]
      this.state.tutors.forEach(element => {
        item.push(<Fade key={element.contact.email}><div className="tutor-card">
        <div className="tutor-image">
            <img src={element.basic.photoUrl} alt="tutor-face" />
        </div>
        <div className="tutor-detail">
            <p className="name">NAME:&nbsp;{element.contact.name}</p>
            <p className="name">GENDER:&nbsp;{element.basic.gender}</p>
            <p className="name">STATE:&nbsp;{element.basic.stateOfResidence}</p>
            <p className="name">LGA:&nbsp;{element.basic.lga}</p>
            <p className="email" id={element.contact.email} onClick={(e) => 
        {navigator.clipboard.writeText(e.target.id)}
        }>Email:&nbsp;{element.contact.email}</p>

        <p className="phone" id={element.contact.phone}  onClick={(e) => 
        {navigator.clipboard.writeText(e.target.id)}
        }>PHONE:&nbsp;{element.contact.phone}</p>
        </div>
    </div></Fade>)
          
      });
        
        return (
            <Fade duration={1500}>
        
                <div className="adapproved-container">
                    <h1>UNAPPROVED TUTORS</h1>
                        {item}
                </div>
            </Fade>
        )
    }
}

export default AdUnapproved
