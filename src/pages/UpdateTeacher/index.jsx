import React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from "react";
import axios from '../../base/axios';
import { useNavigate } from 'react-router-dom';


const SignUp = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [image, setImage] = useState("")
    const [id, setId] = useState(localStorage.kahootApp_userId);


    const changeHandler = (event) => {
		setImage(event.target.files[0]);
	};

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("email", email);
            formData.append("phone", phone);
            formData.append("address", address);
            formData.append("image", image);
            formData.append("name", name);
            const respone = await axios.put(
                `/user/update/${id}`,
                formData,
                {
                    headers: {
                        'kahootapp-access-token': localStorage.kahootApp_accessToken,
                    },
                },
            );
            if (respone) {
                alert(respone.data.message)
                navigate('/watch-room');
              }
           
        } catch (err) {
            if (err.response) {
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);
                alert(err.respone.data.message)
              } else if (err.request) {
                console.log(err.request);
              } else {
                console.log('Error', err.message);
              }
              console.log(err.config);
        }
       
    }

    useEffect(() => {
        axios.get(`/user/profile/${id}`,{
            headers: {
                'kahootapp-access-token': localStorage.kahootApp_accessToken,
            },
        })
        .then((response) => {
            console.log(response.data) 
            const data = response.data
            setEmail(data.email)
            setName(data.name)
            setPhone(data.phone)
            setAddress(data.address)

        })
    },[])

    return (
        <>
            <div>
                <div className={'Mn_hnh_ng_nhp'}>
                    <div className={'image-4'}>
                        <img src={require('./kahoot.png')} />
                    </div>
                    <div className={'Rectangle-31'}>
                        <Grid item xs={12}>
                            <h1 className={'Log_in_1'}>Information</h1>
                        </Grid>
                        <Grid item xs={12}>
                            <Box>
                                <Grid>
                                    <form onSubmit={handleSubmit}>
                                        <Grid item xs={12}>
                                            <TextField
                                                className={'Rectangle-4'}
                                                label="Email"
                                                placeholder="please enter username"
                                                type="email"
                                                disabled
                                                value={email}
                                                required
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                className={'Rectangle-4'}
                                                label="Name"
                                                placeholder="please enter full name"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                required
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                className={'Rectangle-4'}
                                                label="Phone"
                                                placeholder="please enter phone"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                className={'Rectangle-4'}
                                                label="Address"
                                                placeholder="please enter address"
                                                value={address}
                                                onChange={(e) => setAddress(e.target.value)}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                className={'Rectangle-4'}
                                                type="file"
                                                onChange={changeHandler}
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
                                            <button className={'Rectangle-6'} type="submit">
                                                Update
                                            </button>
                                        </Grid>
                                    </form>
                                </Grid>
                            </Box>
                        </Grid>
                    </div>
                </div>
            </div>
        </>
    );
};
export default SignUp