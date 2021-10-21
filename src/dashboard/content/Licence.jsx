import React, { Component } from 'react'
import {getFirestore,doc,updateDoc } from 'firebase/firestore'
import { getAuth } from "firebase/auth";
import app from '../../config/fire';
import { getStorage,ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
const auth = getAuth(app);
const db=getFirestore(app)
const storage = getStorage(app);
 class Licence extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             selectedFile:null,
             licenceURL:null,
             uploaded:false
        }
    }


    SubmitData=async(e)=>{
        e.preventDefault()
        const theRef = doc(db, "users", auth.currentUser.email);
    await updateDoc(theRef, {
      licence: {
        completed:true,
        idNumber:e.target.number.value,
        idType:e.target.type.value,
        licenceUrl:this.state.licenceURL
       
      }
    }).then(()=>{}).catch(error=>{
        alert(error.code)
    })
}

FileSelectHandler=(e)=>{
    this.setState({
        selectedFile:e.target.files[0]
    })
 }

SubmitUploadedFile=(e)=>{
    e.preventDefault()
    if(this.state.selectedFile===null)
    {
      alert("Please select an image")
    }
    else{

      if(this.state.selectedFile.type==="image/png"||
      this.state.selectedFile.type==="image/jpeg"){
         const storageRef = ref(storage, "Licences/"+auth.currentUser.email+"_"+this.state.selectedFile.name);
    const uploadTask = uploadBytesResumable(storageRef, this.state.selectedFile);
    uploadTask.on('state_changed', 
    (snapshot) => {
      const progress = Math.floor((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      document.getElementById("progress").innerHTML=progress+"%"
     
    }, 
    (error) => {
      alert(error.code)
    }, 
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          this.setState({
            licenceURL:downloadURL,
            uploaded:true
          })
      }).catch((error) => {
        alert(error.code)
        });
    }
  )
      }else{
        alert("Please select an image")
       
      }
      
    }
}


    render() {
        return (
            <div className="licence-container">
                 <h1>LICENCE</h1>
                 <div className="form-container">
                     <form onSubmit={this.SubmitData} >
                     <div className={this.state.uploaded===false?"licence-upload":"hide"}>
                                 <label htmlFor="">Upload ID card:&nbsp;
                                    <input onChange={this.FileSelectHandler} required type="file" className="upload" />
                                 </label>
                                 <div className="btn-container">
                            <input onClick={this.SubmitUploadedFile}  type="submit"className="btn-submit" value="Upload" />
                            <p id="progress"></p>
                            </div>
                          </div>
                         <div className="type-number">
                             <select name="type" required className="form-control type" id="">
                                 <option value="">ID CARD TYPE</option>
                                 <option defaultValue="Driver's Licence">Driver's Licence</option>
                                 <option value="National ID Card">National ID Card</option>
                                 <option value="International Passport">International Passport</option>
                                 <option value="Voter's Card">Voter's Card</option>
                             </select>
                             <input required name="number" type="text" className="form-control number" placeholder="ID Card Number" />
                         </div>

                         <div className="btn-container">
                             <input type="submit" className="btn-submit" />
                         </div>
                     </form>
                 </div>
                
            </div>
        )
    }
}

export default Licence
