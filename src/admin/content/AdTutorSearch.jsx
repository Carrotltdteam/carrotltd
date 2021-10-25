import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import app from '../../config/fire';
import {getFirestore, collection,  getDocs } from "firebase/firestore"
const db=getFirestore(app)
 class AdTutorSearch extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            tutors:[]
        }
    }

Search=async(e)=>{
    e.preventDefault()
var count=0
    const selected=e.target.searchselect.value
    var value=e.target.searchvalue.value
   if (selected==="state") {
const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
  
    if (doc.data().contact.accountType==="Become"&&doc.data().basic.stateOfResidence===value.toUpperCase()) {
        count++
       var newDoc=[...this.state.tutors]
       newDoc.push(doc.data())
        this.setState({tutors:newDoc})
    }
})
if (count===0) {
    alert("No Data Found!!!")
    this.clear()
}
}
else if(selected==="lga"){
    
    const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
    
    if (doc.data().contact.accountType==="Become"&&doc.data().basic.lga ===value.toUpperCase()) {
        count++
        var newDoc=[...this.state.tutors]
        newDoc.push(doc.data())
         this.setState({tutors:newDoc})
    }
})
if (count===0) {
    alert("No Data Found!!!")
    this.clear()
}
}
else if(selected==="amount"){
    
    const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
    if (doc.data().contact.accountType==="Become"&&doc.data().bankReferee.amount===value) {
        count++
        var newDoc=[...this.state.tutors]
        newDoc.push(doc.data())
         this.setState({tutors:newDoc})
    }
})
if (count===0) {
    alert("No Data Found!!!")
    this.clear()
}
}

else if(selected==="city"){
    
    const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
    if (doc.data().contact.accountType==="Become"&&doc.data().basic.city===value.toUpperCase()) {
        count++
        var newDoc=[...this.state.tutors]
        newDoc.push(doc.data())
         this.setState({tutors:newDoc})
    }
})
if (count===0) {
    alert("No Data Found!!!")
    this.clear()
    
}
}

   
    

}
clear=()=>{
  
    document.getElementById("value").value=""
    document.getElementById("select").value="--Select Search option--"
    this.setState({tutors:[]})

}


    
    render() {
        const item=[]
        if (this.state.tutors!==null) {
            this.state.tutors.forEach(element => {
                item.push(<Fade key={element.contact.email}><div className="tutor-card">
                <div className="tutor-image">
                    <img src={element.basic.photoUrl} alt="tutor-face" />
                </div>
                <div className="tutor-detail">
                    <p className="name">NAME:&nbsp;{element.contact.name}</p>
                    <p className="name">GENDER:&nbsp;{element.basic.gender}</p>
                    <p className="name">STATE:&nbsp;{element.basic.stateOfResidence}</p>
                    <p className="name">CITY:&nbsp;{element.basic.city}</p>
                    <p className="name">LGA:&nbsp;{element.basic.lga}</p>
                    <p className="email" id={element.contact.email} onClick={(e) => 
                {navigator.clipboard.writeText(e.target.id)}
                }>Email:&nbsp;{element.contact.email}</p>
                <p className="phone" id={element.contact.phone}  onClick={(e) => 
                {navigator.clipboard.writeText(e.target.id)}
                }>PHONE:&nbsp;{element.contact.phone}</p>
                </div>
            </div></Fade>)
                  
              });
            
        }
      
        return (
            <Fade durattion={1500}>
                <div className="adtutorsearch-container">
                    <h1>TUTOR SEARCH</h1>
                    <br />
                    
                        <form onSubmit={this.Search} >
                            <div className="search-option">
                                <select className="form-control" required name="searchselect" id="select">
                                    <option defaultValue="">--Select Search option--</option>
                                    <option value="state">STATE</option>
                                    <option value="city">CITY</option>
                                    <option value="lga">LGA</option>
                                    <option value="amount">PRICE</option>
                                </select>
                                <input  required id="value" type="text" name="searchvalue" className="form-control" placeholder="Enter Search Value" />
                            </div>
                            <div className="btn-container">
                                <input type="submit" className="btn-search" value="Search" />
                                <span className="clear" onClick={this.clear}>Clear</span>
                            </div>
                        </form>
                        
                   
                    
                    <div className="search-result">
                        {item}
                    </div>
                </div>
            </Fade>
        )
    }
}

export default AdTutorSearch
