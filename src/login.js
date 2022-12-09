import React, { useState } from 'react';

import { firebase, auth } from './firebase';
import "./style.css";
import {useRef} from 'react';
import Appbar from './Appbar';
import { Button } from '@material-ui/core';
import { Alert, TextField } from '@mui/material';
import Snackbar from '@mui/material';



const Login = () => {
    // Inputs
    const [mynumber, setnumber] = useState("");
    const [otp, setotp] = useState('');
    const [show, setshow] = useState(false);
    const [final, setfinal] = useState('');
    let btnRef = useRef();

    // Sent OTP
    const signin = () => {

        if (mynumber === "" || mynumber.length < 10) return;

        let verify = new firebase.auth.RecaptchaVerifier('recaptcha-container');
        let v=new firebase.auth.RecaptchaVerifier('recaptcha-container-resend');
        auth.signInWithPhoneNumber(mynumber, v).then((result) => {
            setfinal(result);
           
            alert("code sent")
            setshow(true);
            
        })
            .catch((err) => {
                alert(err);
                window.location.reload()
            });
    }

    // Validate OTP
    const ValidateOtp = () => {
        if (otp === null || final === null)
            return;
        final.confirm(otp).then((result) => {
            
        }).catch((err) => {
            alert("Wrong code");
        })
    }

    return (
        
       
        <div style={{ "marginTop": "200px" }}>
            <center>
                <div style={{ display: !show ? "block" : "none" }}>
                
                        <TextField id="standard-basic" prefix='+91'  value={mynumber} onChange={(e) => { 
                       setnumber(e.target.value) }}
                        placeholder="+91 and phoneNumber"  variant="standard" />
                    <br /><br />
                    <div id="recaptcha-container"></div>
                    <div id="recaptcha-container-resend"></div>
                    <Button variant="contained" style={{"color":"blue"}} onClick={signin}>Send OTP</Button>
                 
                </div>
                <div style={{ display: show ? "block" : "none" }}>
                   
                        <TextField id="standard-basic" type="text" placeholder={"Enter your OTP"}
                        onChange={(e) => { setotp(e.target.value) }} variant="standard" />
                    <br/><br />
                    <Button variant="contained" onClick={ValidateOtp}>Verify</Button>
                   
                </div>
            </center>
        </div>
        
    );
}

export default Login;
/*
   <button onClick={signin}>Send OTP</button>
   <input value={mynumber} onChange={(e) => { 
                       setnumber(e.target.value) }}
                        placeholder="phone number" />



                         <input type="text" placeholder={"Enter your OTP"}
                        onChange={(e) => { setotp(e.target.value) }}></input>
   */