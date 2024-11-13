// import React, { Component } from 'react'


// import FunctionClick from './functionCLick'
// import ClassClick from './classClick'
// import EventBind from './EventBind'
// import Parentcom from './parentCom'
// import UserGreeting from './UserGreeting'
// import Refdemo from './refdemo'
// import LifecycleA from './LifecycleA'
// import Training from "./split";


import myComponent from "./propsspread";
import React from "react"
import ReactDOM from 'react-dom/client'
import Portio from './porti';
import Learn from "./udemy";
import App1 from "./popcorn"
import './App.css'
import Quiz from "./step";
import All from './traing1';
import State from "./state";
import Bill from "./firend";
import Tabing from "./new1"
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(<React.StrictMode> <App/></React.StrictMode>)
const pizzaData = [
    {
        name:"Focaccia",
        ingredients:"Bread with italian olive oil and rosemary",
        price:6,
        photoName:"pizza spinaci.jpg",
        soldOut:false,

    },
    {
        name:"Pizza Margherita",
        ingredients:"Tomato and mozarella",
        price:23,
        photoName:"/pizza spinaci.jpg",
        soldOut:false,
    },
    
    {
        name:"Pizza Spinaci",
        ingredients:"Tomato, mozarella, spinach, and ricotta cheese",
        price:12,
        photoName:"pizza spinaci.jpg",
        soldOut:false,
    },
    {
        name:"Pizza Funghi",
        ingredients:"Tomato, mozarella, mushrooms, and onion",
        photoName:"pizza spinaci.jpg",
        price:32, 
        soldOut:false,
    },
    {
        name:"Pizza Salamino",
        ingredients:"Tomat, mozarella, and pepperoni",
        price:15,
        photoName:"pizza spinaci.jpg",
        soldOut:true,
    }
    ,
    {
        name:"Pizza Proscitutto",
        ingredients:"Tomato, mozarella, ham, aragula, and burrata cheese",
        price:18,
        photoName:'pizza spinaci.jpg',
        soldOut:false,
    }
];

function App(){
    return(
        <div className= "container">
          <Outcardavat/>
          <Tabing/>
          <App1 />
     
         <Learn/>
          <All/>
       
          <Bill/>
          <State/>
          
          <Quiz/>
        <Header/>
        <Portio/>
     <myComponent/>
        <Menu/>
        <Footer/>

        </div>
    )
}


function Header(){
   // const style={color:"red",fontSize:"48px",textTransform:"uppercase"};
   const style ={}
   return(
      <header className="header">
      <h1 style={style}>Fast React Pizza Co.
      </h1>
      </header>
    )
}

function other ({props}){
  return (
    <div></div>
  )
}
function Menu(){
  const pizzas = pizzaData;
  // const pizzas= [];
  const numb= pizzas.length;
    return (
        <main className = "menu">
            <h2>Our menu</h2>
  {numb > 0?(
            <ul className="pizzas">
              {pizzas.map((pizza )=>(
            <Pizza pizzaObject ={pizza} key={pizza.name}/>))}
            </ul>): <p>the is no piza right row</p>}
            {/* <Pizza name='Pizza Spinaci' ingredient='Tomato, mozarella, spinach, and ricotta cheese' 
            photoName='pizza spinaci.jpg'
            price= {10}/>
            <Pizza name = "pizza fungi" ingredient="tomato, mushrooms" price = {12}  photoName= "/pizza spinaci.jpg"/> */}
            </main>
    )
}
function Order(props){
  return(
  <div className= "order">
  <p>We're open until {props.closeHour}:00 .Come visit us or order 
  online
  </p>
  <button className="btn">Order</button>
  </div>
  )
  
}

function Pizza(props){
  console.log(props)
  if(props.pizzaObject.soldOut){
    return null;
  }
    return(
        <div className="pizza">

            <img src={props.pizzaObject.photoName} alt = {props.name}/>
          
            <video controls autoplay name="media">
              <source src="file:///home/tofik/Desktop/react%20course/18.%20Advanced%20State%20…t%20API/19.%20Adding%20Fake%20Authentication%20Setting%20Up%20Context.mp4" type="video/mp4"></source>
              </video>
           <div>
            <h3>{props.pizzaObject.name}</h3>
          <p>{props.pizzaObject.ingredients}</p>
          <span>{props.pizzaObject.price + 3}</span>
           </div>
            </div>

    )
}
function Outcardavat(){
  return <div> <img className="ava" src="tofik.jpg"></img></div>
 
}

function Footer(){
    const hour = new Date().getHours();
    const openHour= 1;
    const closeHour =22;
    const isOpen = hour >= openHour && hour <= closeHour;
    console.log(isOpen)
    // if (hour >= openHour && hour <= closeHour ) alert("We're currently open!")
    // else alert("Sorry we're closed")
  //  if(!isOpen){
  //   return <p>closed</p>
  //  }
 return(
 <footer className = "footer">
  {isOpen ? (
  <Order closeHour={closeHour}/>
  ):<p>Still working now please try wait later between {openHour}:00 and {closeHour}:00</p>}
    </footer>)
// return React.createElement("footer",null, "we're currently open!")


}      
/*general jsx rules
 jsx works essentailly like HTML,but we can enter "javaScript mode" by using {} (for text ot attributex)
we can place JavaScript expression inside {}
Examples:reference variables, creare arrays or objects, [].map(), ternary operator
statements are not allowed(if / else, for, switch)
JSX produces a JavaScript expression
const el = <h1> Hello React!</h1>
 const el = React.createElement("h1", null, "Hello React!")*
return (
//       <div className='App'>
//         <Parentcom/>
//         <Refdemo/>
//         <LifecycleA/>
//        <UserGreeting/>
//       <FunctionClick/>
//       <ClassClick/>
//    <EventBind/>
  
 
//       </div>
//     )
  
//   }

// }
// ;

/*
// export default App*
// import { useEffect, useState } from "react";
// export default function App() {
//   const [advice, setAdvice] = useState("");
//   const [count, setCount] = useState(0);

//   async function getAdvice() {
//     const res = await fetch("https://api.adviceslip.com/advice");
//     const data = await res.json();
//     setAdvice(data.slip.advice);
//     setCount((c)=> c + 1 )
//   }
// useEffect(function (){
//   getAdvice();
// },[])

  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get advice</button>
      <Message count= {count}/>
      
    </div>
  );

function Message(props){
  return(
    <p>you have read <strong>{props.count}</strong>
    pieces of advice</p>
  )
}





// React.createElement(
//   'header',
//  null,
//   React.createElement('h1',
//   {style:{color:'red'}},
//   'Hello React'
//   )
// );
{ <header>
<h1 style="color:red">
  hello React
</h1>
</header> }
React.createElement(
  'header',
  null,
  React.createElement(
    'h1',
    {style:{color:'red'}},
    'Hello React'
  )

)*/
export default App;