import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'

import {getAuth, setPersistence, signInWithEmailAndPassword, browserSessionPersistence } from "firebase/auth";
const auth = getAuth();
 class AdminSignIn extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              loggedIn:false
         }
     }
     



SignIn=(e)=>{     
    e.preventDefault()  
    setPersistence(auth, browserSessionPersistence )
    .then(() => {
        // Signed in 
        return signInWithEmailAndPassword(auth, e.target.email.value, e.target.password.value)
        // ...
    })
    .catch((error) => {
       console.log(error.code)
    });
}


    render() {
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
          });
        return  (
            <>
          
            <Fade duration={1500}>
            <div className="adminsignin-container">
            <div className="signin">
               
                <div className="signin-form">
                <div className="text">
                    <h1>Admin Account</h1>
                    
                </div>
                    <form onSubmit={this.SignIn}>
                        
                        <div className="email-number">
                            <input type="email" name="email" placeholder="Email address" 
                            className="email form-control" required/>
                            
                            <input type="password" name="password" placeholder="Password" 
                            className="password form-control"  required/>
                        </div>
                        <button className="btn-signin">Login In</button>
                    </form>
                </div>
               
            </div>
            
        </div>
        </Fade>
        
        </>
        )
    }
}

export default AdminSignIn
