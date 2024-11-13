import React from 'react'

function ChildComp(props) {
  return (
    <div>
        <button onClick= {() => props.greetHandler('child')}>greet Parent</button>
    </div>
  )
}

export default ChildComp