import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

//Create a login form that authenticated the username and password
//This one is just like the guided project

class Login extends React.Component {
    state = {
        credentials: {
            username: "",
            password: ""
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        axiosWithAuth()
            .post("http://localhost:5000/api/login", {
                username: "Lambda School",
                password:"school"
            })
            .then(res => {
                localStorage.setItem("token", JSON.stringify(res.data.payload));
                this.props.history.push("/protected");
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    <input
                        type="text" 
                        name="username"
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                        placeholder="Username..."
                    />
                    <input 
                        type="password"
                        name="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                        placeholder="Password..."
                    />
                    <button>Log In</button>
                </form>
            </div>
        );
    }    
};

export default Login;