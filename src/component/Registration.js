import React, { useState } from 'react'

import { Link } from 'react-router-dom';

function Registration() {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');
  const [message1, setMessage1] = useState('');
  const [uMessage, setUMessage] = useState('')

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
  const handleUsername = (event) => {
    setUsername(event.target.value);
  };
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (uMessage !== "Invalid username! Your username must contain alteast 1 capital letter, a number and should meet the 7 - 29 character length.") {
      localStorage.setItem("username", username)
    }
    if (message1 !== "Invalid password! Your password must contain at least 1 uppercase alphabet, 1 lowercase alphabet, number values between 0-9, 1 special character, and minimum 8 characters.") {
      localStorage.setItem("password", password)
    }
    if (message !== "Invalid email! Your email ID must contain all domain requirements.") {
      localStorage.setItem("email", email)
    }
    if ((uMessage !== "Invalid username! Your username must contain alteast 1 capital letter, a number and should meet the 7 - 29 character length.") && (message1 !== "Invalid password! Your password must contain at least 1 uppercase alphabet, 1 lowercase alphabet, number values between 0-9, 1 special character, and minimum 8 characters.") && (message !== "Invalid email! Your email ID must contain all domain requirements.")) {
      alert("Congratulations! You are signed up!")
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
  function Checkemail() {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g
    if (!regEx.test(email) && email !== "") {
      setMessage("Invalid email! Your email ID must contain all domain requirements.");
    } else if (email === "") {
      setMessage("Enter Email")
    } else {
      setMessage("")
    }
  }

  return (
    <>
      <div className='signupcss'>
        <form onSubmit={handleSubmit}>
          <input
            className='usernames'
            type="text"
            placeholder='Username'
            value={username}
            onChange={handleUsername} required
          />
          <span style={{ color: 'red' }}>{uMessage}</span>
          <input className='usernames'
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleEmailChange} required
          />
          <span style={{ color: 'red' }}>{message}</span>
          <input className='usernames'
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange} required
          />
          <span style={{ color: 'red' }}>{message1}</span>
          <br />
          <button className="ShowPasswordButton" type="button" onClick={toggleShowPassword}>
            {showPassword ? 'Hide Password' : 'Show Password'}
          </button>
          <button onClick={() => { Checkpassword(); Checkemail(); usernameValidation(); handleSubmit(); }} className="SignUpButton" type="submit">Sign Up</button>
          <div className="CheckAccountDiv">
            <span style={{ color: "black" }} className="CheckAccountButton" > Already have an account? <Link style={{ color: "green" }} className="nav-link active" aria-current="page" to="/login">Login</Link> </span>
          </div>
        </form>


      </div>

    </>
  );
}


export default Registration;