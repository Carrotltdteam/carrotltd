import React, { PureComponent } from 'react'
import Fade from 'react-reveal/Fade'
import app from '../../config/fire';
import {getFirestore, doc, getDoc,updateDoc } from "firebase/firestore";
const db=getFirestore(app)
 class AdViewInfo extends PureComponent {
     constructor(props) {
         super(props)
     
         this.state = {
              userData:null
         }
     }
     


Approve=async()=>{
   const email= this.state.userData.contact.email

   
const theRef = doc(db, "users", email);

await updateDoc(theRef, {
  approved: true
}).then(()=>{
    alert("User Approved")
    document.getElementById("search").value=""
    this.setState({userData:null})
}).catch(error=>{
    alert(error.code)
})

}
GetData=async(e)=>{
e.preventDefault()

const docRef = doc(db, "users", e.target.children.search.value);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
    if(docSnap.data().contact.accountType==="Become"){
        this.setState({userData:docSnap.data()})

    }
    else {
  
        alert("Tutor Not Found");
        e.target.children.search.value=""
      }
    
} 
}
    render() {
       
        const item=[]
        const data=[]
        const subjectData=[]
        const subject=[]
        
        if (this.state.userData!==null&&this.state.userData.availability.sunday) {
            data.push(this.state.userData.availability.monday!==null?this.state.userData.availability.monday:"")
            data.push(this.state.userData.availability.tuesday!==null?this.state.userData.availability.tuesday:"")
            data.push(this.state.userData.availability.wednesday!==null?this.state.userData.availability.wednesday:"")
            data.push(this.state.userData.availability.thursday!==null?this.state.userData.availability.thursday:"")
            data.push(this.state.userData.availability.friday!==null?this.state.userData.availability.friday:"")
            data.push(this.state.userData.availability.saturday!==null?this.state.userData.availability.saturday:"")
            data.push(this.state.userData.availability.sunday!==null?this.state.userData.availability.sunday:"")

            for (let index = 0; index < data.length; index++) {
                switch(index){
                    case 0:
                        item.push(
                        <div key={index} className="time-slot">
                            <p>Monday:&nbsp;&nbsp;{data[index].check===false?"NO":"YES"}</p>
                            <p>from:&nbsp;&nbsp;{data[index].from}</p>
                            <p>to:&nbsp;&nbsp;{data[index].to}</p>
                            
                        </div>
                        )
                        break
                        case 1:
                            item.push(
                            <div key={index} className="time-slot">
                                <p>Tuesday:&nbsp;&nbsp;{data[index].check===false?"NO":"YES"}</p>
                                <p>from:&nbsp;&nbsp;{data[index].from}</p>
                                <p>to:&nbsp;&nbsp;{data[index].to}</p>
                                
                            </div>
                            )
                            break
    
                            case 2:
                        item.push(
                        <div key={index} className="time-slot">
                            <p>Wednesday:&nbsp;&nbsp;{data[index].check===false?"NO":"YES"}</p>
                            <p>from:&nbsp;&nbsp;{data[index].from}</p>
                            <p>to:&nbsp;&nbsp;{data[index].to}</p>
                            
                        </div>
                        )
                        break
    
                        case 3:
                        item.push(
                        <div key={index} className="time-slot">
                            <p>Thursday:&nbsp;&nbsp;{data[index].check===false?"NO":"YES"}</p>
                            <p>from:&nbsp;&nbsp;{data[index].from}</p>
                            <p>to:&nbsp;&nbsp;{data[index].to}</p>
                            
                        </div>
                        )
                        break
    
                        case 4:
                        item.push(
                        <div key={index} className="time-slot">
                            <p>Friday:&nbsp;&nbsp;{data[index].check===false?"NO":"YES"}</p>
                            <p>from:&nbsp;&nbsp;{data[index].from}</p>
                            <p>to:&nbsp;&nbsp;{data[index].to}</p>
                            
                        </div>
                        )
                        break
    
                        case 5:
                        item.push(
                        <div key={index} className="time-slot">
                            <p>Saturday:&nbsp;&nbsp;{data[index].check===false?"NO":"YES"}</p>
                            <p>from:&nbsp;&nbsp;{data[index].from}</p>
                            <p>to:&nbsp;&nbsp;{data[index].to}</p>
                            
                        </div>
                        )
                        break
    
                         default:
                        item.push(
                        <div key={index} className="time-slot">
                            <p>Sunday:&nbsp;&nbsp;{data[index].check===false?"NO":"YES"}</p>
                            <p>from:&nbsp;&nbsp;{data[index].from}</p>
                            <p>to:&nbsp;&nbsp;{data[index].to}</p>
                            
                        </div>
                        )
                        break
    
                }
                
                
            }
        }

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
                    <h1>VIEW TUTOR INFO</h1>
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

                                <div className="basic details">
                                    <h2>educational Details</h2>
                                    <br />
                                 
                                    <p>School:&nbsp;&nbsp;{this.state.userData!==null?this.state.userData.education.school:""}</p>
                                    <p>dept:&nbsp;&nbsp;{this.state.userData!==null?this.state.userData.education.dept:""}</p>
                                    <p>degree:&nbsp;&nbsp;{this.state.userData!==null?this.state.userData.education.degree:""}</p>
                                    <p>grade:&nbsp;&nbsp;{this.state.userData!==null?this.state.userData.education.grade:""}</p>
                                    <p>start year:&nbsp;&nbsp;{this.state.userData!==null?this.state.userData.education.startYear:""}</p>
                                    <p>end year:&nbsp;&nbsp;{this.state.userData!==null?this.state.userData.education.endYear:""}</p>
                                    <p>Certificate:&nbsp;&nbsp;{this.state.userData!==null?<a target="_blank" rel="noreferrer" href={this.state.userData.education.certUrl}>view</a> :""}</p>
                                    
                                </div>

                                <div className="basic details">
                                    <h2>licence Details</h2>
                                    <br />
                                
                                    <p>School:&nbsp;&nbsp;{this.state.userData!==null?this.state.userData.licence.idNumber:""}</p>
                                    <p>dept:&nbsp;&nbsp;{this.state.userData!==null?this.state.userData.licence.idType:""}</p>
                                    <p>Licence:&nbsp;&nbsp;{this.state.userData!==null?<a target="_blank" rel="noreferrer" href={this.state.userData.licence.licenceUrl}>view</a> :""}</p>
                                    
                                </div>

                                <div className="basic details">
                                    <h2>bank &amp; referee Details</h2>
                                    <br />
                                    <h3>Bank</h3>
                                    <br />
                                    <p>account name:&nbsp;&nbsp;{this.state.userData!==null?this.state.userData.bankReferee.accountName:""}</p>
                                    <p>account number:&nbsp;&nbsp;{this.state.userData!==null?this.state.userData.bankReferee.accountNumber:""}</p>
                                    <p>bank name:&nbsp;&nbsp;{this.state.userData!==null?this.state.userData.bankReferee.bankName:""}</p>
                                    <p>account type:&nbsp;&nbsp;{this.state.userData!==null?this.state.userData.bankReferee.bankType:""}</p>
                                    <p>amount:&nbsp;&nbsp;{this.state.userData!==null?this.state.userData.bankReferee.amount:""}</p>
                                    <br />
                                    <h3>Referee</h3>
                                    <br />
                                    <p>Ref Name:&nbsp;&nbsp;{this.state.userData!==null?this.state.userData.bankReferee.refName:""}</p>
                                    <p>Ref email:&nbsp;&nbsp;{this.state.userData!==null?this.state.userData.bankReferee.refEmail:""}</p>
                                    <p>Ref Address:&nbsp;&nbsp;{this.state.userData!==null?this.state.userData.bankReferee.refAddress:""}</p>
                                    <p>Ref Occupation:&nbsp;&nbsp;{this.state.userData!==null?this.state.userData.bankReferee.refOccupation:""}</p>
                                    <p>Ref Phone:&nbsp;&nbsp;{this.state.userData!==null?this.state.userData.bankReferee.refPhone:""}</p>
                                    <p>Relationship:&nbsp;&nbsp;{this.state.userData!==null?this.state.userData.bankReferee.refRelationship:""}</p> 
                                </div>
                                <div className="availability">
                                    <h2>Availability Details</h2>
                                    <br />
                                    {item}
                                </div>

                                <div className="availability">
                                    <h2>Subject Details</h2>
                                    <br />
                                    {subject}
                                </div>
                                {(this.state.userData.contact.accountType==="Become"&&this.state.userData.approved===false)?
                                <div className="btn-container">
                                    <input onClick={this.Approve} type="submit" className="btn-submit" Value="Approve"/>
                                </div>:null
                                }
                                

                            </div>
                        </Fade>:null}
                        
                    </div>
                    
                </div>
            </Fade>
        )
    }
}

export default AdViewInfo
