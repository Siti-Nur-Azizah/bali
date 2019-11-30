import React, { Component } from 'react';
import logo from './logo.png';
import './Login.css';

class Login extends Component{
    render() {
        return(
            <div className="Sebuah-kotak">
                <h1>Login Page</h1>
                <form>
                    <div className="Logo">
                        <img src ={logo} alt="Gambar" className="gambar" />
                    </div>
                    <div>
                        <label>Username</label>
                        <input type="text" placeholder="Enter Username" />

                        <label>Password</label>
                        <input type="password" placeholder="Enter Password" />

                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;