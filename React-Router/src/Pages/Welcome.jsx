import React from "react";
class Welcome extends React.Component {
    constructor(props)
        {
        super(props);
        this.state = {
            welcomeMessage:"Hello"
        };
        this.changeMessageHandler = this.changeMessageHandler.bind(this)
    }
    changeMessageHandler() {
      this.setState(prevState => ({
         welcomeMessage: prevState.welcomeMessage == "Hello" ? "Welcome" : "Hello"
      }));
   }
    render(){
        return (
            <div>
            <h1>{this.state.welcomeMessage}, {this.props.name}</h1>
            <button onClick={this.changeMessageHandler}>Change welcome Message</button>
            </div>
        )
    }
}

export default Welcome;