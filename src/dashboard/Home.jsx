import React, { Component } from 'react'
import {FiArrowUpCircle} from 'react-icons/fi'
import {FaAlignJustify} from 'react-icons/fa'
import app from '../config/fire';
import Fade from 'react-reveal/Fade'
import { getAuth, signOut } from "firebase/auth";
import UpdateAvailability from './content/home/UpdateAvailability';
import UpdateSubject from './content/home/UpdateSubject';
import UpdateInfo from './content/home/UpdateInfo';
import Overview from './content/home/Overview';

// import {getFirestore, onSnapshot,doc } from 'firebase/firestore'
const auth = getAuth(app);
// const db=getFirestore(app)
class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             accountType:"",
             data:{},
             toTop:false,
             toRender:"home",
             toggle:false
        }
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
SetToRender=(e)=>{
    const offset=window.innerWidth;
    if(offset<=740){
        this.handleToggle()
    }
    this.setState({toRender:e.target.name,})

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
                <div className="home-container">
                <div className="mobile">
                    <FaAlignJustify onClick={this.handleToggle}  className='nav-icon'/>
                    </div>
                    <div id="sidebar" className="sidebar">
                    <p  className="closebtn" onClick={this.handleToggle}>&times;</p>
                    
                        <div className="profile-pic">
                            <img onClick={this.SetToRender} id="home" src={this.props.data!=null?this.props.data.basic.photoUrl:""} alt="profile" />
                        </div>
                        <div className="nav-links">
                           
                            <button onClick={this.SetToRender} name="updateAvailability"  id={this.props.active==="about"?"active":null} className="nav_link" >Update Availability</button>
                            <button onClick={this.SetToRender} name="updateSubject" id={this.props.active==="about"?"active":null} className="nav_link" >Update Subject</button>
                            <button onClick={this.SetToRender} name="updateInfo" id={this.props.active==="about"?"active":null} className="nav_link" >Update Info</button>
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

                    <div id="content" className="content">
                       
                        {this.state.toRender==="updateAvailability"?<UpdateAvailability  data={this.props.data}/>:
                        this.state.toRender==="updateSubject"?<UpdateSubject data={this.props.data}/>:
                        this.state.toRender==="updateInfo"?<UpdateInfo data={this.props.data}/>:
                        <Overview data={this.props.data}/>
                        
                        
                        }
                    </div>
                 
                    
                </div>
            </Fade>
            </>
        )
    }
}

export default Home
