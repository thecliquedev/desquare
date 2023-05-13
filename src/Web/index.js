import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import './index.css';

import Nav from './Navbar';
import Home from './Landing';
import About from './About';
import Work from './Work';
import Publication from './Publication';
import Contact from './Contact';
import SingleWork from './Singlework';
import Footer from './Footer';


export default function App() {
    return (
        <Router>
            <div>
                <Nav />
                <Switch>
                    <Route path="/about"><About/></Route>
                    <Route path="/our-work" exact ><Work/></Route>
                    <Route path="/our-work/:id"><SingleWork/></Route>
                    <Route path="/publications"><Publication/></Route>
                    <Route path="/contact-us"><Contact/></Route>
                    <Route path="/"><Home/></Route>
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

