import React, { Component } from 'react';
import './App.css';
import Chatbox from "./Chatbox";
import {NotificationContainer} from "react-notifications";
import {ControlPanel} from "./ControlPanel";

class App extends Component {
    render() {
        return (
            <div className="App">
                <NotificationContainer/>
                <ControlPanel/>
                <Chatbox/>
            </div>
        );
    }
}

export default App;
