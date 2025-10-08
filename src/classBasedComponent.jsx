import React, { Component } from "react";

class Greeting extends Component {
    render() {
        return <h2>Hello {this.props.name}</h2>
    }
}

class App extends Component {
    render() {

        return (
            <div>
                <Greeting name="dipto" />
                <Greeting name="Alex" />
            </div>
        )

    }
}

export default App;
