import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import app from '../../../config/fire';
import {getFirestore,doc,updateDoc,onSnapshot} from 'firebase/firestore'
import { getAuth } from "firebase/auth";
const auth = getAuth(app);
const db=getFirestore(app)
 class Plan extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              plan:""
         }
     }
     
componentDidMount(){
    onSnapshot(doc(db, "users", auth.currentUser.email), (doc) => {
        if(doc.data()!=null){
            this.setState({
                plan:doc.data().plan.name
            })
        }
            else{
                alert("Error. Reload")
            }

      
    })
        
    
}

    ChangePlan= async(e)=>{
        e.preventDefault()
        var price=""
        switch(e.target.name){
            case "Premium":
                price=5400
                break
            case "Lite":
                price=3600
                break
            case "Starter":
                price=3400
                break
            default:
                price=3400
                break

        }
        const theRef = doc(db, "users", auth.currentUser.email);
    await updateDoc(theRef, {
      plan: {
        name:e.target.name,
        price:price,
      }    
    }).then(()=>{
        alert("Update Succesful")

    }).catch((error)=>{
        alert(error.code)
    })
    
    }

    render() {
        return (
            <Fade duration={1500}>
                <div className="plan-container">
                    <div className="heading">
                        <h1>CLASS PLAN</h1>
                        <br />  
                        <p>
                            Hello , Please select your class plan in order to deduce your tuition. 
                            If you need help coming up with the appropiate plan for your budget 
                            please call 07030050354
                        </p>
                        <br />

                        <p>
                            Please note that the price shown below is for one tutor in one class. 
                            Depending on your subject selection, you might need an additional class. 
                            On such cases, prices would vary from what is displayed
                        </p>
                    </div>
                    <h1 id="current-plan">CURRENT PLAN : &nbsp;{this.state.plan}</h1>
                    <br />
                    <div className="plan">
                        <div className="card starter">
                            <div className="starter-card-heading">
                                <h1 id="starter">STARTER</h1>
                                <p>#3,400 / CLASS</p>
                            </div>
                            <div className="card-data">
                                <ul className="starter-ul">
                                    <li><span>0 - 2 years of teaching experience</span></li>
                                    <li><span>Undergraduate/NYSC corps member</span></li>
                                    <li><span>Homework Support</span></li>
                                    <li><span>18 - 25 years</span></li>
                                    <li><span>Guaranteed Subject Proficiency</span></li>
                                </ul>
                                <div className="btn-container">
                                    <input type="submit" onClick={this.ChangePlan} name="Starter" value="Go Starter" className="btn-starter" />
                                </div>
                            </div>

                        </div>
                        <div className="card lite">
                            <div className="lite-card-heading">
                                <h1 id="starter">LITE</h1>
                                <p>#3,600 / CLASS</p>
                            </div>
                            <div className="card-data">
                                <ul className="lite-ul">
                                    <li><span>3 - 5 years of teaching experience</span></li>
                                    <li><span>Home Work Support</span></li>
                                    <li><span>Class Revision</span></li>
                                    <li><span>Examination Preparation</span></li>
                                    <li><span>Guaranteed Subject Proficiency</span></li>
                                </ul>
                                <div className="btn-container">
                                    <input type="submit" onClick={this.ChangePlan} name="Lite" value="GO Lite" className="btn-lite" />
                                </div>
                            </div>
                            

                        </div>
                        <div className="card premium">
                            <div className="premium-card-heading">
                                <h1 id="premium">PREMIUM</h1>
                                <p>#5,400 / CLASS</p>
                            </div>
                            <div className="card-data">
                                <ul className="premium-ul">
                                    <li> <span>Above 5 years of teaching experience</span></li>
                                    <li><span>Carrot Dedicated Worksheets</span></li>
                                    <li><span>Homework Support</span></li>
                                    <li><span>Expert Subject Proficiency</span></li>
                                    <li><span>Examination Preparation Expert</span></li>
                                    <li><span>Class Revision</span></li>
                                    <li><span>In-person class supervision visits</span></li>
                                </ul>
                                <div className="btn-container">
                                    <input onClick={this.ChangePlan} type="submit" name="Premium" value="GO Premium" className="btn-premium" />
                                </div>
                            </div>


                        </div>

                    </div>
                   
                    
                </div>
            </Fade>
        )
    }
}

export default Plan
