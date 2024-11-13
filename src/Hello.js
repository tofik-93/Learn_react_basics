import React from 'react'

const Greet = props => {
    console.log(props)
    props.name =  'tofik'
    return(
        <div>

            
        
        <h1>
            Hello  {props.name}<br></br> your id number is: {props.id_num} <br></br>to Wolkite universty'</h1>
   
        {props.children}
        </div>
    )
} 

  
export default Greet;