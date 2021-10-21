import React, { PureComponent } from 'react'
import { getAuth, signOut } from "firebase/auth";
import {getFirestore, onSnapshot,doc } from 'firebase/firestore'
import app from '../config/fire';
import Fade from 'react-reveal/Fade'
import Basic from './content/Basic';
import Education from './content/Education';
import Licence from './content/Licence';
import Bank from './content/Bank';
import Availability from './content/Availability';
import Subject from './content/Subject';
import {FiArrowUpCircle} from 'react-icons/fi'
import {FaAlignJustify} from 'react-icons/fa'
const auth = getAuth(app);
const db=getFirestore(app)
class Profile extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
             accountType:"",
             data:{
                bankReferee:{
                    completed:false
                },
                availability:{
                    completed:false
                },
                basic:{
                    completed:false
                },
                education:{
                    completed:false
                },
                licence:{
                    completed:false
                },
                subject:{
                    completed:false
                }
             },
             toTop:false,
            //  completed:false
        }
    }
  
    componentDidMount(){
        this.GetDetails()

    }
GetDetails=()=>{
    onSnapshot(doc(db, "users", auth.currentUser.email), (doc) => {
        if(doc.data()!=null){
            const data=doc.data()
            this.setState({
                accountType:data.contact.accountType,
                data:data,
                // completed:data.completed
            })

        }else{
           alert("Error Reload")
        }

        
    });
}  

handleToggle=()=>{
    const offset=window.innerWidth;
    if(offset<=740){
    if (!this.state.toggle) {
        if(offset<=400){
            document.getElementById("sidebar").style.width = "60%"
            }else{
                document.getElementById("sidebar").style.width = "40%"
            }
       
        this.setState({toggle:true})

    }else{
        document.getElementById("sidebar").style.width = "0%"
       
        this.setState({toggle:false})

    }
}
    
}



  SetToTop=()=>{
    const offset=document.documentElement.scrollTop;
    if (offset > 300){
        this.setState({toTop:true});
      } 
      else if (offset <= 300){
        this.setState({toTop:false});
      }
  }
    ScrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
        });
      };
    LogOut=()=>{
        signOut(auth).then(() =>{}).catch((error) => {alert(error.code)});
        }  
  
    render() {
        window.addEventListener('scroll', this.SetToTop);
        return (
            <>
          <Fade>
                <div className="profile-container">
                    <div className="mobile">
                        <FaAlignJustify onClick={this.handleToggle}  className='nav-icon'/>
                    </div>
                    <div id="sidebar" className="sidebar">
                        <p className="closebtn" onClick={this.handleToggle}>&times;</p>
                        <div className="logout-container">
                            <button className="btn-logout" onClick={this.LogOut}>Log Out</button>
                        </div>
                        <Fade duration={1000} cascade when={this.state.toTop}>
                            <div className={this.state.toTop?"uparrow show":"uparrow hide"}>
                                <FiArrowUpCircle onClick= {this.ScrollToTop} />
                            </div>
                        </Fade>
                    </div>

                    <div id="content" className="content">
                        <h1>PROFILE</h1>
                      {this.state.data.basic.completed===false? <Fade > <Basic/></Fade>:null}
                       {this.state.data.education.completed===false?<Fade> <Education/> </Fade>:null}
                       {this.state.data.licence.completed===false?<Fade> <Licence/></Fade>:null}
                     {this.state.data.bankReferee.completed===false?<Fade> <Bank/></Fade>:null}  
                      {this.state.data.availability.completed===false?<Fade> <Availability/></Fade>:null} 
                       {this.state.data.subject.completed===false?<Fade><Subject/></Fade>:null}
                    </div> 
                    
                </div>
            </Fade>
            </>
        )
    }
}

export default Profile
