import React, { PureComponent } from 'react'
import Fade from 'react-reveal/Fade'
import app from '../../config/fire';
import {getFirestore, doc, getDoc } from "firebase/firestore";
const db=getFirestore(app)
class AdviewClient extends PureComponent {

    constructor(props) {
        super(props)
    
        this.state = {
             userData:null
        }
    }
    


GetData=async(e)=>{
e.preventDefault()

const docRef = doc(db, "users", e.target.children.search.value);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
    if(docSnap.data().contact.accountType==="Hire"){
        this.setState({userData:docSnap.data()})

    }
    else {
  
        alert("Client Not Found");
        e.target.children.search.value=""
      }
    
} 
else {
  
    alert("Client Not Found");
    e.target.children.search.value=""
  }
}

    render() {
        const subjectData=[]
        const subject=[]
        if (this.state.userData!==null&&this.state.userData.subject.subject_1) {
            subjectData.push(this.state.userData.subject.subject_1?this.state.userData.subject.subject_1:"")
            subjectData.push(this.state.userData.subject.subject_2?this.state.userData.subject.subject_2:"")
            subjectData.push(this.state.userData.subject.subject_3?this.state.userData.subject.subject_3:"")
            subjectData.push(this.state.userData.subject.subject_4?this.state.userData.subject.subject_4:"")
            
            for (let index = 0; index < subjectData.length; index++) {
                subject.push(
                    <div key={index} className="time-slot">
                        <p>class group:&nbsp;&nbsp;{subjectData[index].group}</p>
                        <p>subject class:&nbsp;&nbsp;{subjectData[index].class}</p>
                        <p>subject name:&nbsp;&nbsp;{subjectData[index].subject_name}</p>
                    </div>
                    )
            }
        }
        return (
            <Fade duration={1500}>
            <div className="adtutorinfo" >
                <h1>VIEW CLIENT INFO</h1>
                <div className="viewcontent">
                    <div className="searchbar">
                        <form onSubmit={this.GetData}>
                            <input type="search"  id="search" required className="form-control search" name="search" placeholder="Enter Tutor Email"/>
                            <input type="submit" className="btn-search" name="search" valueer="Search"/>
                        </form>
                    </div>

                    {this.state.userData!==null?
                        <Fade duration={1500} >
                        <div className="search-result">
                            <div className="contact details">
                                <h2>Contact Details</h2>
                                <br />
                                <p>NAME:&nbsp;&nbsp;{this.state.userData!==null?this.state.userData.contact.name:""}</p>
                                <p>PHONE:&nbsp;&nbsp;{this.state.userData!==null?this.state.userData.contact.phone:""}</p>
                                <p>EMAIL:&nbsp;&nbsp;{this.state.userData!==null?this.state.userData.contact.email:""}</p>
                                
                            </div>
                            <div className="basic details">
                                <h2>Basic Details</h2>
                                <br />
                                <p>GENDER:&nbsp;&nbsp;{this.state.userData!==null?this.state.userData.basic.gender:""}</p>
                                <p>DOB:&nbsp;&nbsp;{this.state.userData!==null?this.state.userData.basic.dob:""}</p>
                                <p>STATE:&nbsp;&nbsp;{this.state.userData!==null?this.state.userData.basic.stateOfResidence:""}</p>
                                <p>CITY:&nbsp;&nbsp;{this.state.userData!==null?this.state.userData.basic.city:""}</p>
                                <p>LGA:&nbsp;&nbsp;{this.state.userData!==null?this.state.userData.basic.lga:""}</p>
                                <p>PHOTO:&nbsp;&nbsp;{this.state.userData!==null?<a target="_blank" rel="noreferrer" href={this.state.userData.basic.photoUrl}>view</a> :""}</p>
                                
                            </div>

                            <div className="availability">
                                <h2>Subject Details</h2>
                                <br />
                                {subject}
                            </div>
                        </div>
                    </Fade>:null}
                    
                </div>
                
            </div>
        </Fade>
        )
    }
}

export default AdviewClient
