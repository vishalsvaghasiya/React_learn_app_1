import React, {Component} from "react";
import Ninjas from "./Ninjas";

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>My First React Class base code</h1>
                <h1>Welcome :)</h1>
                <Ninjas/>
            </div>
        )
    }
}

export default App;