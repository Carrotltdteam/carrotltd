import React, {PureComponent } from 'react'
import {FiArrowUpCircle} from 'react-icons/fi'
import {FaAlignJustify} from 'react-icons/fa'
import app from '../../config/fire';
import Fade from 'react-reveal/Fade'
import { getAuth, signOut } from "firebase/auth";
import {getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import AdOverview from './AdOverview';
import AdUnapproved from './AdUnapproved';
import AdApproved from './AdApproved';
const auth = getAuth(app);
const db=getFirestore(app)
class AdHome extends PureComponent {
    constructor(props) {
        super(props)
    
        this.state = {
            accountType:"",
            data:{},
            toTop:false,
            toRender:"home",
            toggle:false,
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
  }


LogOut=()=>{
    signOut(auth).then(() =>{}).catch((error) => {alert(error.code)});
}  
  
    render() {
        window.addEventListener('scroll', this.SetToTop);
       const userData={
           total:this.state.tUsers,
           unapproved:this.state.uUsers,
           approved:this.state.aUsers
       }
        return (
            <>
            <Fade>
                <div className="hihome-container">
                <div className="mobile">
                <FaAlignJustify onClick={this.handleToggle}  className='nav-icon'/>
                </div>
                    <div id="sidebar" className="sidebar">
                    <p  className="closebtn" onClick={this.handleToggle}>&times;</p>
                        <div className="profile-pic">
                            <img onClick={this.SetToRender} id="home" src={`https://firebasestorage.googleapis.com/v0/b/carrotltd-da799.appspot.com/o/logo.png?alt=media&token=6252cd56-3d00-4ecb-93ec-a90649e96587`} alt="profile" />
                        </div>
                        <div className="nav-links">
                            <button onClick={this.SetToRender} name="unapproved"  id={this.props.active==="about"?"active":null} className="nav_link" >Unapproved Tutors</button>
                            <button onClick={this.SetToRender} name="approved" id={this.props.active==="about"?"active":null} className="nav_link" >Approved Tutors</button>
                            <button onClick={this.SetToRender} name="updateInfo" id={this.props.active==="about"?"active":null} className="nav_link" >Update Info</button>
                        </div>
    
                        <Fade duration={1000} cascade when={this.state.toTop}>
                            <div className={this.state.toTop?"uparrow show":"uparrow hide"}>
                                <FiArrowUpCircle onClick= {this.ScrollToTop} />
                            </div>
                        </Fade>
                      
                        <button className="btn-logout" onClick={this.LogOut}>Log Out</button>
                    </div>

                    <div id="content" className="content">
                        { 
                        // this.state.toRender==="changePlan"?<Plan  data={this.props.data}/>:
                        this.state.toRender==="approved"?<AdApproved />:
                        this.state.toRender==="unapproved"?<AdUnapproved/>:
                        <AdOverview userData={userData}/>
                        
                        
                        }
                    </div>
                 
                    
                </div>
            </Fade>
            </>
        )
    }
}

export default AdHome
