import { useState } from "react";
import "./styles.css";
export default function State(){
    return(
        <div className="App">
<FlashCards/>
        </div>
    )
}

const questions = [{
    id:3457,
    question:"what language is React based on",
    answer:"JavaScript"
},
{
    id:7336,
    question:"what are the building blocks of React apps?",
    answer:"components"
},
{
    id:8832,
    question:"what's the name of the syntax we use to describe a UI in React ?",
    answer:"JSX"
},
{
    id:1297,
    question:"How to pass data from parent to child components ? ",
    answer:"Props"
},
{
    id:9103,
    question:"How to give compoents memory ?",
    answer:"useState hook"
},

{
    id:2002,
    question:"what do we call an input element that is completely synchronise with react?",
    answer:"Controlled element"

}
]

function FlashCards(){
    const [selectedId , setSelectedId] = useState(null);
  
  function  handleClick(id){
    setSelectedId(id);
  }
    return (
    <div className="flashcards">
       {questions.map((question)=>(
        <div
         key={question.id}
         onClick={() => handleClick(question.id)}
         className={question.id ===  selectedId ? "selected": ""}>
    
            <p>
{question.id === selectedId ? question.answer : question.question}
            </p>
       </div>
     )) }
    </div>
    )
}