import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import {getAuth, sendPasswordResetEmail} from "firebase/auth";

const auth = getAuth();
 class ResetPassword extends Component {
    ResetPassword=(e)=>{
        e.preventDefault()
        auth.useDeviceLanguage();

        sendPasswordResetEmail(auth, e.target.email.value)
  .then(() => {
      alert("Email Sent. Please Check your Mailbox")
      window.location.assign("/signin")
      
  })
  .catch((error) => {
    const errorCode = error.code;
   alert(errorCode)
  });
}

    render() {
        return (
          
            <Fade duration={1500}>
            <div className="reset-container">
            <div className="signin">
                <div className="signin-form">
                
                    <form onSubmit={this.ResetPassword}>
                    <div className="text">
                    <h1>Reset Password</h1>
                    
                </div>
                        
                        <div className="email-number">
                            <input type="email" name="email" placeholder="Email address" 
                            className="reset form-control" required/>
                        </div>
                        <div className="btn-container">
                        <button className="btn-signin">Send</button>

                        </div>
                        
                    </form>
                </div>
               
            </div>
            
        </div>     
        </Fade>
        )
    }
}

export default ResetPassword
