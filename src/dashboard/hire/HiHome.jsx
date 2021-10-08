import React, { Component } from 'react'
import {FiArrowUpCircle} from 'react-icons/fi'
import app from '../../config/fire';
import Fade from 'react-reveal/Fade'
import { getAuth, signOut } from "firebase/auth";
import UpdateInfo from '../content/home/UpdateInfo';
import HiOverview from './hirecontent/HiOverview';
import Plan from './hirecontent/Plan';
import HiSubject from './hirecontent/HiSubject';

// import {getFirestore, onSnapshot,doc } from 'firebase/firestore'
const auth = getAuth(app);
// const db=getFirestore(app)
class HiHome extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             accountType:"",
             data:{},
             toTop:false,
             toRender:"home"
        }
    }

// componentDidMount(){
//     onSnapshot(doc(db, "users", auth.currentUser.email), (doc) => {
//         if(doc.data()!=null){
//             const data=doc.data()
//             this.setState({
//                 accountType:data.contact.accountType,
//                 data:data,
                
//             })

//         }else{
//             console.log("Error Getting data")
//         }

        
//     });

// }  

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
    signOut(auth).then(() =>{}).catch((error) => {alert(error.code)});
}  
  
    render() {
        window.addEventListener('scroll', this.SetToTop);
      
        return (
            <>
            <Fade>
                <div className="home-container">
                    <div className="sidebar">
                        <div className="profile-pic">
                            <img onClick={this.SetToRender} id="home" src={this.props.data!=null?this.props.data.basic.photoUrl:""} alt="profile" />
                        </div>
                        <div className="nav-links">
                        <button onClick={this.SetToRender} name="changePlan"  id={this.props.active==="about"?"active":null} className="nav_link" >Change Plan</button>
                        <button onClick={this.SetToRender} name="updateSubject" id={this.props.active==="about"?"active":null} className="nav_link" >Hire Tutor</button>
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
                       
                        {
                        
                        this.state.toRender==="changePlan"?<Plan  data={this.props.data}/>:
                        this.state.toRender==="updateSubject"?<HiSubject data={this.props.data}/>:
                        this.state.toRender==="updateInfo"?<UpdateInfo data={this.props.data}/>:
                        <HiOverview data={this.props.data}/>
                        
                        
                        }
                    </div>
                 
                    
                </div>
            </Fade>
            </>
        )
    }
}

export default HiHome
