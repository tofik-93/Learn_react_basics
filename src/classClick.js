import React, {Component} from 'react'
class ClassClick extends Component {
    clickHandler()
{
3}    render(){
        return(
            <div>
    <button onClick={this.clickHandler}> clickMe</button>
            </div>
        )
    }
}
export default ClassClick

