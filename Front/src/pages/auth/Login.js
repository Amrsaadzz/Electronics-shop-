import React, { useState } from 'react';
import email_icon from "../../assets/mail.png";
import Passwordr_icon from "../../assets/padlock.png";
import "../../styles/login.css";
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';
import { SetAuthUser } from '../../helper/Storge';
import { Navigate, useNavigate } from 'react-router-dom';
const  Login = () => {
    const navigate = useNavigate();
    const [login, setLogin] = useState({
        username: "",
        password: "",
        loading: false,
        error: null, // Rename err to error for clarity
    });

    const loginFun = (e) => {
        e.preventDefault();
        console.log(login);
        setLogin({...login, loading: true, error: null}); // Clear previous error
        axios.post("http://localhost:8080/api/auth/signin",{
           username: login.username,
           password: login.password,
        })
        .then((resp)=>{
            setLogin({...login, loading: false, error: null});
            SetAuthUser(resp.data);
            navigate("/");
        })
        .catch((err)=>{
            console.error("Login error:", err);
            setLogin({
                ...login,
                loading: false,
                error: "Login failed", // Set error message
            });
        });        
    };
    
    return (
        <form onSubmit={loginFun}>
            <div>
                <div className="login-form-container">
                <div className="header">
                        <div className="text">Login</div>
                        <div className="underline"></div>
                    </div>
                    <div className="inputs">
                        <div className="input">
                            <img src={email_icon} alt='' />
                            <input type="text" placeholder='username' required value={login.username} onChange={(e)=>setLogin({...login, username: e.target.value})}/>
                        </div>
                        <div className="input">
                            <img src={Passwordr_icon} alt='' />
                            <input type="password" placeholder='Password' required value={login.password} onChange={(e)=>setLogin({...login, password: e.target.value})}/>
                        </div>
                    </div>
                    <div className="submit-container">
                        <button type="submit" className="submit gray" disabled={login.loading===true}>Login</button>
                    </div>
                    {login.error && <Alert variant="danger">{login.error}</Alert>} {/* Display error message if login fails */}
                </div>
            </div>
        </form>
    );
};


export default Login;
