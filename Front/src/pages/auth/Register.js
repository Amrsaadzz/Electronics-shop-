import React, { useState } from 'react';
import email_icon from "../../assets/mail.png";
import Passwordr_icon from "../../assets/padlock.png";
import User_icon from "../../assets/user.png";
import "../../styles/login.css";
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';
import { SetAuthUser } from '../../helper/Storge';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [register, setRegister] = useState({
        username: "",
        password: "",
        email: "",
        loading: false,
        error: null, // Rename err to error for clarity
    });

    const RegisterFun = (e) => {
        e.preventDefault();
        console.log(register);
        setRegister({...register, loading: true, error: null}); // Clear previous error
        axios.post("http://localhost:8080/api/auth/signup",{
           username: register.username,
           password: register.password,
           email: register.email,
        })
        .then((resp)=>{
            setRegister({...register, loading: false, error: null});
            SetAuthUser(resp.data);
            navigate("/");
        })
        .catch((err)=>{
            console.error("register error:", err);
            setRegister({
                ...register,
                loading: false,
                error: "Registration failed. Please try again.", // Set error message
            });
        });        
    };
    
    return (
        <form onSubmit={RegisterFun}>
            <div className="login-form-container">
                <div className="header">
                    <div className="text">Register</div>
                    <div className="underline"></div>
                </div>
                <div className="inputs">
                    <div className="input">
                        <img src={User_icon} alt='' />
                        <input type="text" placeholder='Name' value={register.username} onChange={(e)=>setRegister({...register, username: e.target.value})} />
                    </div>
                    <div className="input">
                        <img src={email_icon} alt='' />
                        <input type="email" placeholder='Email ID' value={register.email} onChange={(e)=>setRegister({...register, email: e.target.value})}  />
                    </div>
                    <div className="input">
                        <img src={Passwordr_icon} alt='' />
                        <input type="password" placeholder='Password' value={register.password} onChange={(e)=>setRegister({...register, password: e.target.value})} />
                    </div>
                </div>
                <div className="submit-container">
                    <button type="submit" className="submit gray" disabled={register.loading}>Register</button>
                </div>
                {register.error && <Alert variant="danger">{register.error}</Alert>}
            </div>
        </form>
    );
};

export default Register;
