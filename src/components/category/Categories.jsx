import React, { useState } from 'react'
import Checkpoint from './contents/Checkpoint'
import Ielts from './contents/Ielts'
import Igcse from './contents/Igcse'
import Jamb from './contents/Jamb'
import JuniorSec from './contents/JuniorSec'
import Lang from './contents/Lang'
import LowerPrimary from './contents/LowerPrimary'
import Music from './contents/Music'
import Nursery from './contents/Nursery'
import ProfExam from './contents/ProfExam'
import Sat from './contents/Sat'
import SeniorSec from './contents/SeniorSec'
import Undergraduate from './contents/Undergraduate'
import UpperPrimary from './contents/UpperPrimary'
import Waec from './contents/Waec'
import Fade from 'react-reveal/Fade'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import {NavLink} from 'react-router-dom'

const Categories=()=> {
    window.scrollTo({
        top: 0, 
        behavior: 'smooth'
      });
    const [content,setContent]=useState("nursery");
return(
    <>
    <Header active="category"/>
    <Fade duration={1500}>
        <div className="category-container">
                <div className="top">
                    <h1>Category</h1>
                    <p><NavLink to="/">Home</NavLink> &gt; <span>Category</span> </p>
                </div>
                <div className="outer-body">
                    <div className="body">
                        <div className="buttons">
                            <input type="button" className={content==="nursery"?"btn-category active":"btn-category"} onClick={()=>setContent("nursery")} value="nursery" />
                            <input type="button" className={content==="lower primary"?"btn-category active":"btn-category"}  onClick={()=>setContent("lower primary")} value="lower primary"  />
                            <input type="button" className={content==="upper primary"?"btn-category active":"btn-category"}  onClick={()=>setContent("upper primary")} value="upper primary" />
                            <input type="button" className={content==="junior secondary"?"btn-category active":"btn-category"}  onClick={()=>setContent("junior secondary")} value="junior secondary" />
                            <input type="button" className={content==="senoir secondary"?"btn-category active":"btn-category"}  onClick={()=>setContent("senoir secondary")} value="senoir secondary" />
                            <input type="button" className={content==="igcse"?"btn-category active":"btn-category"}  onClick={()=>setContent("igcse")} value="igcse" />
                            <input type="button" className={content==="jamb/utme"?"btn-category active":"btn-category"}  onClick={()=>setContent("jamb/utme")} value="jamb/utme" />
                            <input type="button" className={content==="waec"?"btn-category active":"btn-category"}  onClick={()=>setContent("waec")} value="waec" />
                            <input type="button" className={content==="sat"?"btn-category active":"btn-category"}  onClick={()=>setContent("sat")} value="sat" />
                            <input type="button" className={content==="ielts/toefl"?"btn-category active":"btn-category"}  onClick={()=>setContent("ielts/toefl")} value="ielts/toefl" />
                            <input type="button" className={content==="languages"?"btn-category active":"btn-category"}  onClick={()=>setContent("languages")} value="languages" />
                            <input type="button" className={content==="music"?"btn-category active":"btn-category"}  onClick={()=>setContent("music")} value="music" />
                            <input type="button" className={content==="undergraduate"?"btn-category active":"btn-category"}  onClick={()=>setContent("undergraduate")} value="undergraduate" />
                            <input type="button" className={content==="professional exams"?"btn-category active":"btn-category"}  onClick={()=>setContent("professional exams")} value="professional exams" />
                            <input type="button" className={content==="checkpoint exam"?"btn-category active":"btn-category"}  onClick={()=>setContent("checkpoint exam")} value="checkpoint exam" />
                        </div>

                        <div className="content">
                            {content==="nursery"?<Nursery/>:
                            content==="lower primary"?<LowerPrimary/>:
                            content==="upper primary"?<UpperPrimary/>:
                            content==="junior secondary"?<JuniorSec/>:
                            content==="senoir secondary"?<SeniorSec/>:
                            content==="igcse"?<Igcse/>:
                            content==="jamb/utme"?<Jamb/>:
                            content==="waec"?<Waec/>:
                            content==="sat"?<Sat/>:
                            content==="ielts/toefl"?<Ielts/>:
                            content==="languages"?<Lang/>:
                            content==="music"?<Music/>:
                            content==="undergraduate"?<Undergraduate/>:
                            content==="professional exams"?<ProfExam/>:<Checkpoint/>                             
                            }
                        </div>
                    </div>

                </div>

                
            </div>
            </Fade>
            <Footer/>
            </>
    )

}
export default Categories
