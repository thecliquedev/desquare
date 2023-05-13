import React, {useEffect}  from 'react';
import axios from '../../http';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Projects from './Projects';
import Portfolio from './ProjectGallery';
import Publication from './Publication';
import Awards from './Awards';

export default function App() {

    useEffect(() => {
        let token = localStorage.getItem('Token');

        if(localStorage.getItem('Token')){
            axios.defaults.headers.common["auth"] = token;
        }else{
            window.location.href = '/admin';
            delete axios.defaults.headers.common["auth"];
        }

    }, []);
    

    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/admin" exact><Projects /></Route>
                    <Route path="/admin/publications" ><Publication /></Route>
                    <Route path="/admin/awards" ><Awards /></Route>
                    <Route path="/admin/:id" exact><Portfolio /></Route>
                </Switch>
            </div>
        </Router>
    );
}

