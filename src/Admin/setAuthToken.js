import axios from "../http";

const setAuthToken = token => {
    if (token) {
        axios.defaults.headers.common["auth"] = token;
    } else {
        delete axios.defaults.headers.common["auth"];
    }
};

export const checkLogin = () => {
    let token = localStorage.getItem('Token');

    if(localStorage.getItem('Token')){
        axios.defaults.headers.common["auth"] = token;
    }else{
        window.location.href = '/admin';
        delete axios.defaults.headers.common["auth"];
    }
};

export default setAuthToken;
