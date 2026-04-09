import React from "react";
class Welcome extends React.Component {
    constructor(props)
        {
        super(props);
        this.state = {
            welcomeMessage:"Hello"
        };
    }
    render(){
        return (
            <h1>{this.state.welcomeMessage}, {this.props.name}</h1>
        )
    }
}

export default Welcome;