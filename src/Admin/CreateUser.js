import React, { useEffect }  from 'react';
import axios from '../http';

export default function App() {
    useEffect(() => {
        axios
            .post("/addnewadmin", {
                "email": "info@desquare.net",
                "password": "@desquare#321"
            })
            .then(res => {
                if(res.status === 200){
                    window.location.href = `/admin`
                }
            })
            .catch(e => {
                console.log(e);
            });
    }, []);

    return <div>
        Redirecting...
    </div>;
}

