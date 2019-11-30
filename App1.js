import React, { Component } from"react";

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            title: {
                text: "hallo",
                header: "text"
            }
        };
    }

handleClick() {
    console.log("click");
    console.log("click");
    console.log("click");
    console.log("click");

}

render() {
    return (
        <div>
        <p>{this.state.title.text}</p>
        <p>{this.state.title.header}</p>
        <button onClick={() => this.handleClick()}>Button</button>
        </div>
    );
  }
}

export default App;