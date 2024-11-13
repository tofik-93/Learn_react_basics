import React, { Component } from 'react'

 class LifecycleB extends Component {


constructor(props) {
  super(props)

  this.state = {
  name:'Tofik'
  }
  console.log('LifecycleB constructor')
}
static getDerivedStateFromProps(props,state){
    console.log('lifecycleB getDerivedStateFromProps')
    return null
}
componentDidMount(){
    console.log('LifecycleB componentDidMount')
}
  render() {
    console.log('lifecycleB render')
    return  <div>LifecycleB</div>
    
  }
}

export default LifecycleB