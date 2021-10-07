import React, { Component } from 'react'
import {FiArrowUpCircle} from 'react-icons/fi'
import app from '../../config/fire';
import Fade from 'react-reveal/Fade'
import { getAuth, signOut } from "firebase/auth";

// import {getFirestore, onSnapshot,doc } from 'firebase/firestore'
const auth = getAuth(app);
// const db=getFirestore(app)
class AdHome extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             accountType:"",
             data:{},
             toTop:false,
             toRender:"home"
        }
    }
  

SetToRender=(e)=>{
    this.setState({toRender:e.target.name})

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
        signOut(auth).then(() => {}).catch((error) => {});
        }  
  
    render() {
        window.addEventListener('scroll', this.SetToTop);
        console.log(this.state.toRender)
        return (
            <>
            <Fade>
                <div className="adhome-container">
                    <div className="sidebar">
                        <div className="profile-pic">
                            <img onClick={this.SetToRender} id="home" src={this.props.data!=null?this.props.data.basic.photoUrl:""} alt="profile" />
                        </div>
                        <div className="nav-links">
                        <button onClick={this.SetToRender} name="updateAvailability"  id={this.props.active==="about"?"active":null} className="nav_link" >Update Availability</button>
                        <button onClick={this.SetToRender} name="updateSubject" id={this.props.active==="about"?"active":null} className="nav_link" >Update Subject</button>
                        <button onClick={this.SetToRender} name="updateInfo" id={this.props.active==="about"?"active":null} className="nav_link" >Update Info</button>
                        {/* <button onClick={this.SetToRender} name="activeJobs" id={this.props.active==="about"?"active":null} className="nav_link" >Active Jobs</button> */}
                        </div>
                   
                        <Fade duration={1000} cascade when={this.state.toTop}>
                        <div className={this.state.toTop?"uparrow show":"uparrow hide"}>
                        <FiArrowUpCircle onClick= {this.ScrollToTop} />
                        </div>
                        </Fade>
                        {/* <div className="logout-container"> */}
                        <button className="btn-logout" onClick={this.LogOut}>Log Out</button>

                        {/* </div> */}
                        
                    </div>

                    <div className="content">
                        <h1>contents</h1>
                       
                        {/* {this.state.toRender==="updateAvailability"?<UpdateAvailability  data={this.props.data}/>:
                        this.state.toRender==="updateSubject"?<UpdateSubject data={this.props.data}/>:
                        this.state.toRender==="updateInfo"?<UpdateInfo data={this.props.data}/>:
                        // this.state.toRender==="activeJobs"?<UpdateAvailability data={this.props.data}/>:
                        <Overview data={this.props.data}/>
                        
                        
                        } */}
                    </div>
                 
                    
                </div>
            </Fade>
            </>
        )
    }
}

export default AdHome
