import React, { PureComponent } from 'react'
import Fade from 'react-reveal/Fade'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import app from '../../config/fire'
import { NavLink } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import {getFirestore, getDoc,setDoc,doc } from 'firebase/firestore'
const auth=getAuth(app)
const db=getFirestore(app)
 class Signup extends PureComponent {
     constructor(props) {
         super(props)
     
         this.state = {
              accountType:0,
              loggedIn:false,
         }
     }

    SignUp= async(e)=>{
        e.preventDefault()
        const docRef = doc(db, "users", e.target.email.value);
        const docSnap = await getDoc(docRef);
if (docSnap.exists()) {
    alert("User Already Exists!!!")
} else {

    if (this.state.accountType===0) {
        const type="Hire"
        await setDoc(doc(db, "users", e.target.email.value), {
            contact:{
                name: e.target.name.value,
                phone: e.target.phone.value,
                email: e.target.email.value,
                accountType: type,
                completed:true
            },
            basic:{
                completed:false
            },
            plan:{
                name:"Starter",
                price:3400
            }
            
          });
    
        createUserWithEmailAndPassword(auth, e.target.email.value, e.target.password.value)
        .then((userCredential) => {  
        const user = userCredential.user;
        updateProfile(user, {
            displayName: type,})
        .then( () => {}).catch((error) => {
            alert(error.code)});

           
        }).catch((error)=>{
            alert(error.code)
        })         
    }

    else if (this.state.accountType===1) {
        const type="Become"
        await setDoc(doc(db, "users", e.target.email.value), {
            approved:false,
            contact:{
                name: e.target.name.value,
                phone: e.target.phone.value,
                email: e.target.email.value,
                accountType: type,
                completed:true
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
            bankReferee:{
              
                completed:false
            },
            availability:{
                 completed:false
            },
            subject:{
                completed:false,
            }
          });
        createUserWithEmailAndPassword(auth, e.target.email.value, e.target.password.value)
        .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
            displayName: type,
        }).then( () => {}).catch((error) => {
            alert(error.code)
        })
       
    }).catch((error)=>{
        alert(error.code)
    })
    }
  
}

}



SetAccountType(type){
const t=type
this.setState({
    accountType:t
})

    } 
    render() {
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
          }); 
       
        return (
            <>
            <Header active="join"/>
            <Fade duration={1500}>
            <div className="signup-container">
                <div className="signup">
                   
                    <div className="signup-form">
                    <div className="text">
                        <h1>Join Carrot as a Tutor or to hire a Tutor</h1>
                        <p>Get started! Give us your personal details to 
                            request a home tutor and deduce your tuition</p>
                    </div>
                        <form onSubmit={this.SignUp}>
                            <div className="name">
                                <input type="text" name="name" 
                                placeholder="Your Full Name" 
                                className="firstname form-control" required />

                                <input type="phone" name="phone" placeholder="Your phone number" 
                                className="phone form-control" maxLength="11" required/>
                                
                            </div>
                            <div className="email-number">
                                <input type="email" name="email" placeholder="Your email address" 
                                className="email form-control" required/>
                                
                                <input type="password" name="password" 
                                placeholder="Pasword" 
                                className="password form-control" required />

                            </div>
                            
                            <div className="signup-type">
                                <div onClick={()=>this.SetAccountType(0)}  name="Hire"
                                className={this.state.accountType===0?"bb active":"bb"} 
                                >Hire a Tutor</div>
                                
                                <div onClick={()=>this.SetAccountType(1)} name="Become"
                                className={this.state.accountType===1?"bb active":"bb"} 
                                >Become a Tutor</div>
                            </div>
                            <button className="btn-signup">Sign Up</button>
                            <NavLink to="/signin" className="signin-link"> Sign In Here</NavLink>
                        </form>
                    </div>
                   
                </div>
                
            </div>
            </Fade>
            <Footer/>
            </>
        )
    }
}

export default Signup
