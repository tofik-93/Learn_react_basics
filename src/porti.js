import React from "react";
import { ReactDOM } from "react";
import "./prto.css"
function Portio(){
    return(
        <div className="card">
            <Avatar/>
            <Addtional/>
<div className ="data">
    <Intro/>
    {}
    <SkillList/>
 
</div>

</div>
)
}

function Avatar(){
    return <div> <img className="avatar" src="welcome1.jpg" alt="Tofik Mifta"/>
    
</div>
}
function Addtional(){
    return <div className="add">
       <input className='inp' placeholder="write comment for tofik"></input>
        <button className="btn">submit</button>
    </div>
}

function Intro(){
    return <div>
        <h1>Tofik Mifta</h1>
        <p>full-stack web developer and student at ASTU,
            I like to GYM and playing football , to 
            just enjoy the Gurage kitfo .
        </p>
    </div>
}

function SkillList(){
    return <div className="skill-list">
        <Skill skill='React' emoji="$" color="#123456"/>
        <Skill skill='  HTML &CSS' emoji='#' color="orangered"/>
        <Skill skill='JavaScript' emoji='@'color="yellow"/>
        <Skill skill='node js' emoji='$' color="orange"/>
    </div>
}

function Skill(props){
    return <div className = 'skill' style={{backgroundColor:props.color}}>
        <span>{props.skill}</span>
        <span>{props.emoji}</span>
      

        
         </div>
}
const rootElement = document.getElementById("root");
//const root= createRoot(rootElement)
export default Portio;
