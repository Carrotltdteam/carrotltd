import React, { Component } from 'react'
import {getFirestore,doc,updateDoc,} from 'firebase/firestore'
import { getAuth,updateProfile } from "firebase/auth";
import app from '../../config/fire';
import { getStorage,ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
const storage = getStorage(app);
const auth = getAuth(app);
const db=getFirestore(app)
 class Basic extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              selectedFile:null,
              photoURL:"",
              uploaded:false
         }
     }
     

    SubmitData=async(e)=>{
        e.preventDefault()
        const theRef = doc(db, "users", auth.currentUser.email);
    // Set the "capital" field of the city 'DC'
    await updateDoc(theRef, {
      basic: {
        bio:e.target.bio.value,
        completed:true,
        dob:e.target.date.value,
        gender:e.target.gender.value,
        lga:e.target.lga.value,
        photoUrl:this.state.photoURL,
        stateOfResidence:e.target.state.value,
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
    const storageRef = ref(storage, "profilePics/"+auth.currentUser.email+"_"+this.state.selectedFile.name);
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
          this.setState({photoURL:downloadURL})
        updateProfile(auth.currentUser, {
            photoURL: downloadURL 
          }).then( () => {
            this.setState({uploaded:true})
          }).catch((error) => {
           console.log(error.message)
          });
      });
    }
  );
}


    render() {
        return (
            <div className="basic-container">
                <h1>Basic information</h1>
                <div className="form-container">
                <div className={this.state.uploaded===false?"upload-container":"hide"}>
                            <form  >
                            <label htmlFor="">Choose Profile Picture: &nbsp;
                            <input name="upload" onChange={this.FileSelectHandler} required type="file" className="upload"/>
                            </label>
                            <div className="btn-container">
                            <input onClick={this.SubmitUploadedFile}  type="submit"className="btn-submit" value="Upload" />
                            </div>
                            </form>
                        </div>
                    <form onSubmit={this.SubmitData}>
                       
                        <div className="state-lga">
                            <select name="state" required className="state form-control" placeholder="Select state" >
                                <option value="">Select state of residence</option>
                                <option value="Abia">Abia</option>
                                <option value="">Abia</option>
                                <option value="">Abia</option>
                                <option value="">Abia</option>
                                <option value="">Abia</option>
                                <option value="">Abia</option>
                                <option value="">Abia</option>
                                <option value="">Abia</option>
                                <option value="">Abia</option>
                                <option value="">Abia</option>
                                <option value="">Abia</option>
                                <option value="">Abia</option>
                                <option value="">Abia</option>
                                <option value="">Abia</option>
                                <option value="">Abia</option>
                                <option value="">Abia</option>
                                <option value="">Abia</option>
                                <option value="">Abia</option>
                                <option value="">Abia</option>
                                <option value="">Abia</option>
                                <option value="">Abia</option>
                                <option value="">Abia</option>
                                <option value="">Abia</option>
                                <option value="">Abia</option>
                                <option value="">Abia</option>
                                <option value="">Abia</option>
                                <option value="">Abia</option>
                                <option value="">Abia</option>
                                <option value="">Abia</option>
                                <option value="">Abia</option> 
                            </select>
                            <input name="lga" required type="text" className="form-control lga" placeholder="Enter LGA of residence" />
                        </div>
                        <div className="gender-dob">
                            <select name="gender" required className="gender form-control" id="">
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            </select>

                           <span className="form-control"> DOB: <input name="date" required type="date" className="date" /></span>
                        </div>
                        <div className="bio-container">
                            <textarea name="bio" required id="bio" cols="30" rows="10" maxLength="300" placeholder="Write A Short Bio About Yourself"/>
                        </div>
                        <div className="btn-container">
                            <input type="submit"className="btn-submit" />
                        </div>
                    </form>
                </div>

                
            </div>
        )
    }
}

export default Basic
