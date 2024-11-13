import React, { Component } from 'react'
 class UserGreeting extends Component {

constructor(props) {
  super(props)

 this.state ={
    user_id:'ugr/22917/13'
 }
  }


render() {
    if(this.state.user_id == 'ugr/22917/13'){
        return(
            <div>
                {alert('congration Mr Tofik you id is correct you are legal student in ASTU')}
            </div>
        )
    }
    else{
        return(
            <div>
               still you are not register please confrim correctly
            </div>
        )
    }

  

    }
// return (
//       <div>
//         <div>welcome Tofik</div>
//         <div>Welcome Guest </div>
//       </div>
 
//     )
  
 }

export default UserGreeting