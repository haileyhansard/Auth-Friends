import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

//Create a login form that authenticated the username and password
//This one is just like the guided project but i'm using function component instead of class component here, using react hook useState
//training kit has good example of functional component login page

const initialCredentials = {
    username: "",
    password: ""
}

const Login = (props) => {
    const [ isLoading, setIsLoading ] = useState(false)
    const [ credentials, setCredentials ] = useState(initialCredentials)
    //const [ error, setError ] = useState("")

    const handleChange = e => {
       setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    const login = e => {
        e.preventDefault();
        setIsLoading(true);
        axiosWithAuth()
            .post("/api/login", credentials)
            .then(res => {
                //console.log("Response from login", res)
                localStorage.setItem("token", (res.data.payload));
                props.history.push("/protected");
            })
            .catch(err => {
                console.log(err)
                //setError(err.message);
            })
            .finally(() => {
                setIsLoading(false)
            })
    };
        console.log("Loading", isLoading)
    return (
        <div>
            <form onSubmit={login}>
                <input
                    type="text" 
                    name="username"
                    value={credentials.username}
                    onChange={handleChange}
                    placeholder="Username..."
                />
                <input 
                    type="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                    placeholder="Password..."
                />
                <button>Log In</button>
            </form>
        </div>
    );
};

export default Login;