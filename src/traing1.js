import React, { useState } from "react";
import "./traing.css"
 const initialItems = [
    {id:1, des: "passports",quantity:2,packed:true},
    {id:2, des: "Socks",quantity:12,packed:true},
    {id:2, des: "Socks",quantity:1,packed:false},

];
export default function All() {
    return (
    <div className="app1">
        <Logo/>
        <Form/>
        <PackingList/>
     
        <Stats/>
        
    </div>
    );
}
    function Logo(){
return <div><h1 className="hed">🌴FareAway👜</h1></div> 
    }
    function Form(){

        const [description, setDescription]= useState("");   
        const [quantity, setQuantitiy] = useState(1)
        
        function handleSubmit(e){
            e.preventDefault();
            if(!description) return;
            const newItem ={description,quantity,packed:false,id:Date.now()};
            console.log(newItem)
setDescription('')
setQuantitiy(1)
        }
return (
<form className="add-form" onSubmit={handleSubmit}>
    <h3>What do you need for your 😍 trip?</h3>
    <select value={quantity} onChange={(e)=>setQuantitiy(Number(e.target.value))}>{
    
    Array.from({length:20}, (_, i) => i + 1).map((num) =>(
        <option value={num} key={num}>
            {num}
        </option>
    ))
    }</select>
    <input type="text" placeholder="Item.." value={description} onChange={(e)=>  
        setDescription((e.target.value))}/>
    <button>Add</button>
</form>
)
    }
    function PackingList(){
return( 
<div className="list">
    <ul>
{initialItems.map((item) =>
(
<Item item={item} key ={item.key}/>
))}
</ul>
</div>
)
    
    }
    function Item({ item }){
return (<li>
   
    <span style={item.packed ? { textDecoration:"line-through"} : {}}>
    {item.quantity}   {item.des} 
    </span>
    <button>❌</button>
</li>)
    }


function Stats(){
    return (
    <footer className="stats">
        <em> 💼 You have X item on your, and already packed X (X%)</em>
    </footer>
    )

}