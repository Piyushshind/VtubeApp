import React from 'react';
import Navbar from './component/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import About from './component/About';
import Home from './component/Home';
import Signup from './Signup';
import Login from './Login';



const App = () => {
  
  return(
  <>
  <Navbar/>
   <Routes>
   
    <Route path='/home' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/signup' element={<Signup/>} />
    <Route path='/login' element={<Login/>} />

  </Routes>

  </>

)}

export default App;