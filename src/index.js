import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import './Web/index.css';


import Admin from './Admin/index';
import Web from './Web/index';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/admin"><Admin/></Route>
                <Route path="/"><Web/></Route>
            </Switch>
        </Router>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
