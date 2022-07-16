import React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useRef, useState, useEffect } from "react";
import axios from '../../base/axios'
// import http from '../../base/http'


const SignUp = () => {
    const REGISTER_URL = "/user/register";
    const USER_REGEX = /^\[A-z\][A-z0-9-_]{3,23}$/;
    const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
    const userRef = useRef();
    const errRef = useRef();
    const [email, setEmail] = useState("");
    // const [validName, setValidName] = useState(false);
    // const [userFocus, setUserFocus] = useState(false);
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    // const [validPwd, setValidPwd] = useState(false);
    // const [pwdFocus, setPwdFocus] = useState(false);
    // const [matchFocus, setMatchFocus] = useState(false);
    // const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);

    // useEffect(() => {
    //     userRef.current.focus();
    // }, []);
    // useEffect(() => {
    //     setValidName(USER_REGEX.test(user));
    // }, [user]);
    // useEffect(() => {
    //     setValidPwd(PWD_REGEX.test(pwd));
    // }, [pwd]);
    // useEffect(() => {
    //     setErrMsg("");
    // }, [user, pwd]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // validate làm sau
        // const v1 = USER_REGEX.test(user);
        // const v2 = PWD_REGEX.test(pwd);
        // if (!v1 || !v2) {
        //     setErrMsg("Invalid Entry");
        //     return;
        // }
        try {
            const respone = await axios.post(
                REGISTER_URL,
                JSON.stringify({ email, password, phone, address,name }),
                {
                    headers: {
                        "Content-Type": "application/json" },
                },
            );
            console.log (respone)
            setSuccess(true);
            //clear state and controlled inputs
            setEmail("");
            setPassword("");
           
        } catch (err) {
            console.log(err)
        }
       
    }
    return (
        <>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <h1>Sign Up</h1>
                </Grid>
                <Grid item xs={12}>
                    <Box>
                        <Grid >
                            <form onSubmit={handleSubmit}>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Email"
                                        placeholder="please enter username"
                                        type="text"
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Password"
                                        onChange={(e) => setPassword(e.target.value)}
                                        value={password}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Name"
                                        placeholder="please enter full name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Phone"
                                        placeholder="please enter phone"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}

                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Address"
                                        placeholder="please enter address"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}

                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    {/* <button
                                        disabled={
                                            !validName || !validPwd
                                                ? true
                                                : false
                                        }
                                    >
                                        Sign Up
                                    </button> */}
                                    <button type="submit">Sign Up</button>
                                </Grid>
                            </form>
                        </Grid>
                    </Box>

                </Grid>
            </Grid>
        </>
    )

}
export default SignUp