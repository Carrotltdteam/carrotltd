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
        console.log()
        const theRef = doc(db, "users", auth.currentUser.email);
    
    // Set the "capital" field of the city 'DC'
    await updateDoc(theRef, {
      licence: {
        completed:true,
        idNumber:e.target.number.value,
        idType:e.target.type.value,
        licenceUrl:this.state.licenceURL
       
      }
    });
}

FileSelectHandler=(e)=>{
    this.setState({
        selectedFile:e.target.files[0]
    })
 }

SubmitUploadedFile=(e)=>{
    e.preventDefault()
    const storageRef = ref(storage, "Licences/"+auth.currentUser.email+"_"+this.state.selectedFile.name);
    const uploadTask = uploadBytesResumable(storageRef, this.state.selectedFile);
    uploadTask.on('state_changed', 
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
    }, 
    (error) => {
    }, 
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          this.setState({licenceURL:downloadURL,uploaded:true})
      });
    }
  );
}


    render() {
        return (
            <div className="licence-container">
                 <h1>LICENCE</h1>
                 <div className="form-container">
                     <form onSubmit={this.SubmitData} >
                         <div className="type-number">
                             <select name="type" required className="form-control type" id="">
                                 <option value="">ID CARD TYPE</option>
                                 <option value="Driver's Licence">Driver's Licence</option>
                                 <option value="National ID Card">National ID Card</option>
                                 <option value="International Passport">International Passport</option>
                                 <option value="Voter's Card">Voter's Card</option>
                             </select>
                             <input required name="number" type="text" className="form-control number" placeholder="ID Card Number" />
                         </div>
                         <div className={this.state.uploaded===false?"licence-upload":"hide"}>
                                 <label htmlFor="">Upload ID card:&nbsp;
                                    <input onChange={this.FileSelectHandler} required type="file" className="upload" />
                                 </label>
                                 <div className="btn-container">
                            <input onClick={this.SubmitUploadedFile}  type="submit"className="btn-submit" value="Upload" />
                            </div>
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
