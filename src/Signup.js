import React from 'react';
import './Signup.css';
import Registration from './component/Registration'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { useState, useEffect } from 'react';

const Signup = () => {
  const [file, setFile] = useState();
  function handleChange(e) {
      console.log(e.target.files);
      setFile(URL.createObjectURL(e.target.files[0]));
  }
  useEffect(()=>{},[])
  return (
    <>
    
       
    <div>
      <div className='imageupload'>
    <img className='ProfileImg' src={file}
         style={{height:'100px',width:'100px',borderRadius:'80px'}}/>
    <input className='inputImg' type="file" onChange={handleChange} />
    </div>

      <Registration/>
    </div>

   </>
  )
}

export default Signup