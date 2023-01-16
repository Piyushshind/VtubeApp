import React, { useState } from "react";

import { Link } from 'react-router-dom'


function Login() {
  const [username, setUsername] = useState("")
    const [uMessage, setUMessage] = useState("")

    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [message1, setMessage1] = useState("");

    const userUserName = localStorage.getItem("username")
        ? localStorage.getItem("username") : "AdminBoy8"
    const userPassword = localStorage.getItem("password")
        ? localStorage.getItem("password") : "Admin@1234567"

    const handleSubmit = (event) => {
        event.preventDefault();
        if (username === userUserName && password === userPassword) {
            alert("Login successful!")
        } else {
            alert("User not found!")
        }
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleUsername = (event) => {
        setUsername(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const usernameValidation = () => {
        const reg = /^[A-Za-z][A-Za-z0-9_]{7,29}$/
        if (username === "") {
            setUMessage("Enter Username")
        }
        else if (!reg.test(username)) {
            setUMessage("Invalid username! Your username must contain alteast 1 capital letter, a number and should meet the 7 - 29 character length.")
        }
        else {
            setUMessage("")
        }
    }

    function Checkpassword() {
        const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        if (!strongRegex.test(password) && password !== "") {
            setMessage1("Invalid password! Your password must contain at least 1 uppercase alphabet, 1 lowercase alphabet, number values between 0-9, 1 special character, and minimum 8 characters.");
        } else if (password === "") {
            setMessage1("Enter Password")
        } else {
            setMessage1("")
        }
    }

    return (
      <>
      <div className="logincss">
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                id="username"
                className="usernames"
                placeholder="Username"
                value={username}
                onChange={handleUsername} required
            />
            <span style={{ color: 'red' }}>{uMessage}</span>
            <input
            className="usernames"
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange} required
            />
            <span style={{ color: 'red' }}>{message1}</span>
            <br />
            <button className="ShowPasswordButton" type="button" onClick={toggleShowPassword}>
                {showPassword ? 'Hide Password' : 'Show Password'}
            </button>
            <button className="SignUpButton" onClick={() => { Checkpassword(); usernameValidation(); handleSubmit(); }}>Login</button>
            <span style={{ color: "black" }} className="span-handle" > Don't have an account? <Link style={{ color: "green" }} className="nav-link active" aria-current="page" to="/signup">Sign Up</Link> </span>
        </form>
        </div>
        </>
    );
}

export default Login;