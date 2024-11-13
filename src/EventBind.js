import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
     

      this.state = {
       message:'Hello user'
         
      }
    }
    clickHandler(){
       this.setState(
         {message:'GoodBye'}
       )
      console.log(this)

    }


 

    render(){
  return (
    <div>
    
        <div>{this.state.message}</div>
       { /*<button onClick={this.clickHandler.bind(this)}>click</button>*/}
      <button onClick={() => this.clickHandler()}>Click</button>
        </div>
  )
}}

export default EventBind