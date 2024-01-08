import { Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios'

const App = () => {

  const [email, setEmail] = useState();

  const handleSubmit = async () => {
    const sendData = {email}
    try{
      const response = await axios.post("https://silo-server.onrender.com/join", sendData)
      console.log(response)
    }catch(error) {
      console.log(error)
    }
    setEmail("")
  } 

  useEffect(() => {
    try {
       axios.get("https://silo-server.onrender.com/")
      .then((res) => console.log(res.data))
    } catch (error) {
      console.log(error)
    }
  },[])

  return (
    <div className='home-page'>
      <h1 className='home-title'>SILO</h1>
      <p className='home-description pb-7'>The Truth Will Surface...</p>
      <TextField className='mb-5 home-input' color="warning" value={email} label='Email' onChange={(e) => setEmail(e.target.value)} variant="filled"/><br/>
      <Button className='home-btn' variant='contained' onClick={handleSubmit}  color='warning'>JOIN</Button>
    </div>
  );
}

export default App;
