import { useState } from "react";
import "./friend.css"


const initialFriends =[
    {
        id:118836,
        name:"Clark",
        image:"tofika.jpg",
        balance:-7,
    },
 {   id:933372,
    name:"Tofik",
    image:"t.jpg",
    balance:20,

},
{
    id:499476,
    name:"Amanuel",
    image:"tofa1.jpg",
    balance:0,
},
]
export default function Bill(){
    const [friends, setFriends] = useState(initialFriends);
    const [showfriend, setShowFriend] = useState(true);
    const [selectedFriend, setSelectedFriend]= useState(null)
    function handleShowAddFriend()
    {
   (setShowFriend((show)=>!show))
    }

    function handleAddFriend(friend){
        setFriends((friends) => [...friends, friend])
    setShowFriend(false)    
    }
   /*updating*/
    function handleSelection(friend){

        setSelectedFriend((cur)=> (cur?.id === friend.id ? null :friend))
   setShowFriend(false)
    }
    function handleSplitBill(value){
        console.log(value)
    }
   return (<div className="app">
    <div className="sidebar">
    <FriendList friends={friends}
    selectedFriend={selectedFriend}
     onSelection={handleSelection}/>

   {showfriend && <FormAddFriend onAddFriend=
   {handleAddFriend}/>}
 
  
   <Button  onClick={handleShowAddFriend}>
    {showfriend?  "Close":"Add friend"}</Button>
  
    </div>
    {selectedFriend && <FormSplitBill 
    selectedFriend={selectedFriend}
     onSplitBill={handleSplitBill}
     key={selectedFriend.id}/>}
</div>)
}
function FriendList({friends, onSelection,selectedFriend}){
   
    return(
         <ul>
            
            {friends.map((friend)=>(
        <Friend friend={friend} key={friend.id}
        selectedFriend={selectedFriend}
        onSelection={onSelection}/>
   ) )}
   </ul> )
}

    

function Friend({friend,onSelection,selectedFriend}){
    const isSelected= selectedFriend?.id === friend.id;
    return (<li className={isSelected ? "selected": ""}>
        <img src={friend.image} alt={friend.namcde}/>
        <h3>{friend.name}</h3>


       

        {friend.balance < 0 && (
        <p className="red">
            You own {friend.name}
         ${Math.abs(friend.balance)}</p>)}


         {friend.balance > 0 && (
        <p className="green">
             {friend.name} ownes you
         ${Math.abs(friend.balance)}</p>)}

        
         {friend.balance === 0 && (
        <p>You and {friend.name}
        are even </p>)}
        <Button onClick={()=> onSelection(friend)}>{isSelected ? "Close" : "Select"}</Button>
        
            </li> 


    )
}

function FormAddFriend({onAddFriend}){
    const [name,setName] = useState("")
    const [image,setImage] = useState("https://i.pravatar.cc/48")

    function handleSubmit(e){
        e.preventDefault();

        if(!name || !image) return ;
const id =crypto.randomUUID();
        const newFriend ={
            id,
             name,
            image:`${image}?=${id}`,
            balance:0,
            
        };
        onAddFriend(newFriend)
        setName("")
        setImage("https://i.pravatar.cc/48")
    } 
 return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
        <label>👫 Friend name</label>
        <input type="text" value={name}
         onChange={(e)=>setName(e.target.value)}/>
       
        <label>  📸 Image URL</label>
        <input type="text" value={image} onChange={(e)=>setImage(e.target.value)} />
        <Button>Add</Button>
    </form>
 )
}



function Button ({children,onClick}){
    return   <button  onClick={onClick} className="btns">{children}</button>
}

function FormSplitBill({selectedFriend,onSplitBill}){
    const [bill,setBill] = useState("");
    const [paidByUser, setPaidByUser] = useState("")
    const paidByFriend = bill ? bill -paidByUser : "";
    const [whoIsPaying , setWhoIsPaying] = useState("user");
   function handleSubmit(e) {
    e.preventDefault();
    if(!bill || !paidByUser) return;
   onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser)
   }
   return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
        <h2 className="form">Split a bill with {selectedFriend.name}</h2>

        <label>💰Bill value</label>
        <input type="text" value={bill} onChange={(e)=>setBill(Number(e.target.value))}/> 
       

        <label>🧍Your expense</label>
        <input type="text" value={paidByUser} onChange={(e)=>setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value))}/>
    
        <label>👯{selectedFriend.name}s expense</label>
         <input type="text" disabled value ={paidByFriend}/>
         <label>🤑 Who is paying the bill</label>
  <select vlaue={whoIsPaying} onChange={(e)=> setWhoIsPaying(e.target.value)}>
    <option value="user">You</option>
    <option value="user">{selectedFriend.name}</option>
  </select>
        <Button>Split bill</Button>
    </form>
   ) 
}
