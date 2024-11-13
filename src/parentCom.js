import React, { Component } from 'react'
import ChildComp from './ChildComp';
class Parentcom extends Component{
    constructor(props) {
      super(props);
    
      this.state = {
        parentName:'Parent'
      };
      this.greetParent = this.greetParent.bind(this);
    }

    greetParent(childName){
        alert(`Hello ${this.state.parentName} ${childName}`)
    }
    render(){
  return (
     <div>
  
   <ChildComp greetHandler ={this.greetParent}/>
  </div>
  )
    }
}

export default Parentcom