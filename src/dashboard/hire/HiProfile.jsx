import React, { PureComponent } from 'react'
import { getAuth, signOut } from "firebase/auth";
import {getFirestore, onSnapshot,doc } from 'firebase/firestore'
import app from '../../config/fire';
import Fade from 'react-reveal/Fade'
import {FiArrowUpCircle} from 'react-icons/fi'
import HiBasic from './hirecontent/HiBasic';
const auth = getAuth(app);
const db=getFirestore(app)
class HiProfile extends PureComponent {
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
            console.log("Error Getting data")
        }

        
    });
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
        return (
            <Fade>
                <div className="hiprofile-container">
                    <div className="sidebar">
                        <div className="logout-container">
                            <button className="btn-logout" onClick={this.LogOut}>Log Out</button>
                        </div>
                        <Fade duration={1000} cascade when={this.state.toTop}>
                            <div className={this.state.toTop?"uparrow show":"uparrow hide"}>
                                <FiArrowUpCircle onClick= {this.ScrollToTop} />
                            </div>
                        </Fade>
                    </div>

                    <div className="content">

                        <h1>PROFILE</h1>
                      {this.state.data.basic.completed===false? <Fade > <HiBasic/></Fade>:null}
                      
                    </div> 
                    
                </div>
            </Fade>
        )
    }
}

export default HiProfile
