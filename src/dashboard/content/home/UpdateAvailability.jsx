import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import {getFirestore,doc,updateDoc } from 'firebase/firestore'
import { getAuth } from "firebase/auth";
import app from '../../../config/fire';
const auth = getAuth(app);
const db=getFirestore(app)
 class UpdateAvailability extends Component {
    
    SubmitData=async(e)=>{
        e.preventDefault()
        const theRef = doc(db, "users", auth.currentUser.email);
    
    // Set the "capital" field of the city 'DC'
    await updateDoc(theRef, {
        
      availability: {
        completed:true,
      sunday:{
          check:e.target.sunday.checked,
          from:e.target.sundayfrom.value,
        to:e.target.sundayto.value
      },
      monday:{
        check:e.target.monday.checked,
        from:e.target.mondayfrom.value,
        to:e.target.mondayto.value
      },
      tuesday:{
        check:e.target.tuesday.checked,
        from:e.target.tuesdayfrom.value,
        to:e.target.tuesdayto.value
      },
      wednesday:{
        check:e.target.wednesday.checked,
        from:e.target.wednesdayfrom.value,
        to:e.target.wednesdayto.value
      },
      thursday:{
        check:e.target.thursday.checked,
        from:e.target.thursdayfrom.value,
        to:e.target.thursdayto.value
      },
      friday:{
        check:e.target.friday.checked,
        from:e.target.fridayfrom.value,
        to:e.target.fridayto.value
      },
      saturday:{
        check:e.target.saturday.checked,
        from:e.target.saturdayfrom.value,
        to:e.target.saturdayto.value
      }
    }
    }).then(()=>{
        e.target.sunday.checked=false
        e.target.monday.checked=false
        e.target.tuesday.checked=false
        e.target.wednesday.checked=false
        e.target.thursday.checked=false
        e.target.friday.checked=false
       e.target.saturday.checked=false
    
        alert("Update Successfuul")

    }).catch(error=>{
        alert(error.code)
    })

} 
    render() {
        const item=[]
        for(var index=8; index<=19;index++){
            switch(index){
                case 12:
                    item.push( <option value="12 PM">12 PM</option>)
                    break;
                case 13:
                    item.push( <option value="1 PM">1 PM</option>)
                    break;
                case 14:
                    item.push( <option value="2 PM">2 PM</option>)
                    break;
                case 15:
                    item.push( <option value="3 PM">3 PM</option>)
                    break;
                case 16:
                    item.push( <option value="4 PM">4 PM</option>)
                    break;
                case 17:
                    item.push( <option value="5 PM">5 PM</option>)
                    break;
                case 18:
                    item.push( <option value="6 PM">6 PM</option>)
                    break;
                case 19:
                    item.push( <option value="7 PM">7 PM</option>)
                    break;
                default:
                    item.push( <option value={index+" AM"}>{index+" AM"}</option>)

            }
        }
        return (
            <Fade duration={1500}>
            <div className="availability-container">
                 <h1>AVAILABILITY</h1>
                 <div className="form-container">
                     <form onSubmit={this.SubmitData}>
                         <div className="heading">
                             <h3>DAYS</h3>
                             <h3>FROM</h3>
                             <h3>TO</h3>
                         </div>
                         <div className="days">
                             <label id="label" htmlFor="">SUNDAY 
                             <input type="checkbox" onClick={(e)=>{console.log(e.target.checked)}} name="sunday"    className="check" />
                             </label>

                             <select name="sundayfrom" className="form-control type" id="">
                             {item}
                                 
                             </select>
                             <select name="sundayto" className="form-control type" id="">
                             {item}
                             </select>
                         </div>

                         <div className="days">
                             <label id="label" htmlFor="">MONDAY &nbsp;
                             <input type="checkbox" name="monday" id=""  className="check" />
                             </label>

                             <select name="mondayfrom" className="form-control type" id="">
                                
                                 {item}
                                
                             </select>
                             <select name="mondayto" className="form-control type" id="">
                                 {item}
                             </select>
                         </div>

                         <div className="days">
                             <label id="label" htmlFor="">TUESDAY &nbsp;
                             <input type="checkbox" name="tuesday" id="" className="check" />
                             </label>

                             <select name="tuesdayfrom" className="form-control type" id="">
                             {item}
                               
                             </select>
                             <select name="tuesdayto" className="form-control type" id="">
                             {item}
                             </select>
                         </div>

                         <div className="days">
                             <label id="label" htmlFor="">WEDNESDAY &nbsp;
                             <input type="checkbox" name="wednesday" id="" className="check" />
                             </label>

                             <select name="wednesdayfrom" className="form-control type" id="">
                             {item}
                               
                             </select>
                             <select name="wednesdayto" className="form-control type" id="">
                             {item}
                             </select>
                         </div>

                         <div className="days">
                             <label id="label" htmlFor="">THURSDAY &nbsp;
                             <input type="checkbox" name="thursday" id="" className="check" />
                             </label>

                             <select name="thursdayfrom" className="form-control type" id="">
                             {item}
                                
                             </select>
                             <select name="thursdayto" className="form-control type" id="">
                             {item}
                             </select>
                         </div>

                         <div className="days">
                             <label id="label" htmlFor="">FRIDAY &nbsp;
                             <input type="checkbox" name="friday" id="" className="check" />
                             </label>

                             <select name="fridayfrom" className="form-control type" id="">
                             {item}
                               
                             </select>
                             <select name="fridayto" className="form-control type" id="">
                             {item}
                             </select>
                         </div>

                         <div className="days">
                             <label id="label" htmlFor="">SATURDAY &nbsp;
                             <input type="checkbox" name="saturday" id="" className="check" />
                             </label>

                             <select name="saturdayfrom" className="form-control type" id="">
                             {item}
                                
                             </select>
                             <select name="saturdayto"  className="form-control type" id="">
                                
                             {item}
                             </select>
                         </div>
                         <div className="btn-container">
                             <input type="submit" className="btn-submit" />
                         </div>
                         
                     </form>
                 </div>
                
            </div>
            </Fade>
        )
    }
}

export default UpdateAvailability
