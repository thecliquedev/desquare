import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './index.css';
import Login from './Login';
import CreateUser from './CreateUser';
import MainRoute from './AuthRoutes';
import axios from "../http";
import setAuthToken from "./setAuthToken";

export default function App() {
    const [isLoggedIn, setLogin] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('Token')
        if(token && token !== 'undefined'){
            setLogin(true);
        }
    }, [isLoggedIn]);


    function logout(){
        axios
        .delete("/logout")
        .then(res => {
            if(res.status === 200){
                localStorage.removeItem("Token");
                setAuthToken(false);
                window.location.href = `/admin`
            }
        })
        .catch(e => {
            console.log(e);
        });
    }

    return (
        <Router>
            <div>
                {
                    isLoggedIn && <div className="navbar_new">
                        <div>
                            <a href='/admin' className="nav-link">Home</a>
                            <a href='/admin/publications' className="nav-link">Publications</a>
                            <a href='/admin/awards' className="nav-link">Awards</a>
                        </div>

                        <div>
                            <a className="nav-link" onClick={logout} style={{cursor: 'pointer'}}>Logout</a>
                        </div>
                    </div>
                }

                
                <Switch>
                    {isLoggedIn && <MainRoute />}
                    <Route path="/admin" exact><Login setLogin={setLogin}  /></Route>
                    <Route path="/admin/create" exact><CreateUser /></Route>
                </Switch>
            </div>
        </Router>
    );
}

