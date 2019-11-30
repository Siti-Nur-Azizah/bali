import React, {Component} from 'react';
import{
    BrowserRouter,
    Route,
    Switch
} from "react-router-dom"
import Landing from "./landing";

class App extends Component{
    render(){
        return(
            <BrowserRouter>
            <Switch>
                <Landing></Landing>
            </Switch>
            </BrowserRouter>
        )
    }
}

export default App;

