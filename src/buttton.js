import React from 'react';


class Button extends React.Component{
    constructor(props){
        super(props);
        this.state={
            clicked:false
        }
    };
    handleclick =() => {
        this.setState({clicked:true});
    };
    render(){
        return(
            <button onClick={this.handleclick}>
                {this.props.label}
            </button>
        )
    }
}

export default Button;