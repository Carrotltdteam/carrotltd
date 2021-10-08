import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import {getFirestore,doc,updateDoc,onSnapshot } from 'firebase/firestore'
import { getAuth } from "firebase/auth";
import app from '../../config/fire';
const auth = getAuth(app);
const db=getFirestore(app)
 class Subject extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              show:1,
              subject:null
              
         }
     }

     componentDidMount=async()=>{
        onSnapshot(doc(db, "users", auth.currentUser.email), (doc) => {
            if(doc.data()!=null){
                this.setState({subject:doc.data().subject});         
            }   
      else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
     })
    }
     SetSelect=(e)=>{
         this.setState({
             show:e.target.value
         })
     }  


     SubmitData=async(e)=>{
        e.preventDefault()
        const theRef = doc(db, "users", auth.currentUser.email);
            await updateDoc(theRef, {
                subject:{
                    ...this.state.subject,
                    [e.target.name]:{
                        group:e.target.group.value,
                        class:e.target.class.value,
                        subject_name:e.target.subject_name.value  
                       }
                } 
             }).then(()=>{
                document.getElementById([e.target.name]).style.display = "none";
                alert("Update Sucessful")

             }).catch(error=>{
                 alert(error.code)
             })
             
             
            
} 

SetSubject=async(e)=>{
    e.preventDefault()
    const theRef = doc(db, "users", auth.currentUser.email);
        await updateDoc(theRef, {
           subject:{
            ...this.state.subject,
             completed:true
            }
         }).then(()=>{
             
         }).catch(error=>{
             alert(error.code)
         })

}


    render() {
        const length=this.state.show
        const items = []
        for (var index=1; index<=length;index++) {
            items.push( <Fade  key={index} duration={1500} ><form id={`subject_`+index} name={`subject_`+index}  onSubmit={this.SubmitData} className="subjects">
            <h2>Subject {index}</h2>
            <div  className="group-class">
               <select required name="group" className="form-control" >
                   <option value="">Subject Group</option>
                   <option value="Academic">Academic</option>
                   <option value="Music">Music</option>
                   <option value="Languages">Languages</option>
                   <option value="Others">Others</option>
               </select>
               <select required name="class"  className="form-control" id="">
                   <option value="">Subject Class</option>
                   <option value="Nursery">Nursery</option>
                   <option value="Upper Primary">Upper Primary</option>
                   <option value="Lower Primary">Lower Primary</option>
                   <option value="Junior Secondary">Junior Secondary</option>
                   <option value="Senior Secondary">Senior Secondary</option>
                   <option value="WAEC">WAEC</option>
                   <option value="JAMB/UTME">JAMB/UTME</option>
                   <option value="SAT">SAT</option>
                   <option value="TOEFL">TOEFL</option>
                   <option value="IELTS">IELTS</option>
                   <option value="GRE">GRE</option>
                   <option value="Checkpoint Exam">Checkpoint Exam</option>
                   <option value="A-Level">A-Level</option>
                   <option value="Undergrauates">Undergrauates</option>
                   <option value="IGCSE">IGCSE</option>
                   <option value="OTHERS">OTHERS</option>
               </select>
            </div>
            <div className="input-subject">
                <input required type="text"placeholder="Subject Name" name="subject_name" className="form-control subject-name" />
            </div>
            <div className="btn-container">
                <input type="submit" value="Submit" className="btn-submit " />
            </div>   
        </form></Fade>)
          }
        return (
            <div className="subject-container">
                 <h1>SUBJECTS TO TAKE</h1>
                 <div className="form-conatiner">
                    <div className="subject">
                            
                        <select required name="subject" onChange={this.SetSelect} className="form-control" id="">
                            <option value="1">How Many Subject Are you Teaching</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                          
                        </div>
                        <div  className="subjects">
                           
                            {items}
                            <div className="btn-right">
                                <input onClick={this.SetSubject} type="submit" value="Subject Complete" className="btn-submit " />
                            </div>
                           
                           
                        </div>
                        
                     
                 </div>
                
            </div>
        )
    }
}

export default Subject
