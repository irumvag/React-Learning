import React from "react";
import ThemeContext from "./ThemeContext";

class Helloword extends React.Component{
    render(){
        return (
            <ThemeContext.Consumer >
                {
                ({color,backgroundColor})=>(
                <div style={{
                    color,
                    backgroundColor
                }}>Hello world</div>
                )
                }
            </ThemeContext.Consumer>
        )
    }

}

export default Helloword