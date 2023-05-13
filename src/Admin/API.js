import axios from '../http';
import setAuthToken from './setAuthToken';


export const loginUser = (userData) => {
    axios
        .post("/login", userData)
        .then(res => {
            const { auth } = res.headers;
            localStorage.setItem("Token", auth);
            setAuthToken(auth);
            window.location.href = '/admin';
            return true;
        })
        .catch(e => {
            return false;
        });
};

export const logoutUser = () => {
    axios
        .delete("/logout")
        .then(res => {})
        .catch(e => {
            console.log(e)
        });
    localStorage.removeItem("Token");
    setAuthToken(false);
};
