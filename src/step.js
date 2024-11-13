import { useState } from 'react';
import './step.css'

const messages =[
    "Learn React ",
    "Apply for jobs",
    "Invest your new income",
];
export default function Quiz(){
    return (<div>
        
   <Counter/>
    <Steps/>
    <Steps/> 
    
    </div>
    
    )
}

function Counter (){
    const [count, setCount ] = useState(0);
    const [stepn,setStepn] = useState(1);
function handleRest(){
    setCount(0)
    setStepn(1)
}
    const [text, setText] = useState(0)
    const data = new Date("june 21 2027");
    data.setDate(data.getDate() + count)
    return(
        <div>
             <div>
                <input type='range' min = '0' max = '10' value={stepn} 
                onChange={e=>setStepn(Number(e.target.value))} ></input>
           
            <span>Step:{stepn}</span>
           
        </div>
        {/* <div>
        <button value={count} onChange={e=>setCount(Number(e.target.value)) } >-</button>
            <input type="text" value={text} onChange={e => setText(Number(e.target.value))}></input>
            <button>+</button> </div> */}
        <div> 
             <button onClick={()=>setCount((c)=>c-stepn)}>-</button>
           <input type='text' value={count}
           onChange={(e) => setCount(Number(e.target.value))}></input>
            <button onClick={()=>setCount((c)=>c + stepn)}>+</button> 
        
        

        </div>
     
        <span>{count === 0 ?"Today is" : count > 0 ? `${count} from today is`:`${Math.abs(count)} day ago was `}</span>
       <span> <p>{data.toDateString( )}</p></span>
       
 {(count !== 0  || stepn !== 1)?
    <div> <button onClick={handleRest}>Rest</button> </div> : null}
 

  </div>
    )
    }

function Steps()
{
const [step, setStep]= useState(1);
//const [test, setTest] = useState({name:"tofik"})
const [isOpen, setisOpen]= useState(true);
    function handlePrevious(){
        if(step >=2) setStep((s) => s-1)
        
    }
  
    function handleNext(){
        if(step <= 2)
        {setStep((s)=> s + 1);
             // setStep((s) =>s + 1);
        }
       //test.name="myconditon"// BAD practice
     // ({ name:"Maruf"});
      }
    return(
        <div>
            <button className = "close" onClick={()=>setisOpen((is)=> !is)}>&times;</button>
       { isOpen && ( <div className="steps">
            <div className="numbers"> 
            <div className ={step>=1 ? "active":""}>1</div>
            <div className ={step>=2 ? "active":""}>2</div>
            <div className ={step>=3 ? "active":""}>3</div>
    
    </div>

    <p className="message">Step{step }:{messages[step - 1]}</p>
    <div className="buttons">  
    <button style ={{backgroudColor:"#7950f2", color:"#fff"}}  onClick={handlePrevious}>previous
    </button>
    <button style ={{backgroudColor:"#7950f2", color:"#fff"}} onClick={handleNext}>Next
    </button>


                </div>
                </div>)}
                </div>
    )
}
