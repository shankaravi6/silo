import React from "react";
import { Button, TextField, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setMode } from "../State";

const HomePage = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState();

  const handleSubmit = async () => {
    const sendData = { email };
    try {
      const response = await axios.post(
        "https://silo-server.onrender.com/join",
        sendData
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    setEmail("");
  };

  useEffect(() => {
    try {
      axios
        .get("https://silo-server.onrender.com/")
        .then((res) => console.log(res.data));
    } catch (error) {
      console.log(error);
    }
  }, []);

  const { palette } = useTheme();

  return (
    <div
      className="home-page"
      style={{ background: palette.background.default }}
    >
      <h1 className="home-title" style={{ color: palette.primary.main }}>
        SILO
      </h1>
      <p
        className="home-description pb-7"
        style={{ color: palette.primary.sub }}
      >
        The Truth Will Surface
      </p>
      <Button variant="contained" onClick={() => dispatch(setMode())}>
        Dark
      </Button>
      {/* <TextField className='mb-5 home-input' color="warning" value={email} label='Email' onChange={(e) => setEmail(e.target.value)} variant="filled"/><br/>
      <Button className='home-btn' variant='contained' onClick={handleSubmit}  color='warning'>JOIN</Button> */}
    </div>
  );
};

export default HomePage;
