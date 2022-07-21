import React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

// import http from '../../base/http'


const Create_question = () => {
    // const navigate = useNavigate();
    // const REGISTER_URL = "/user/register";
    // const USER_REGEX = /^\[A-z\][A-z0-9-_]{3,23}$/;
    // const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
    // const userRef = useRef();
    // const errRef = useRef();
    // const [email, setEmail] = useState("");
    // // const [validName, setValidName] = useState(false);
    // // const [userFocus, setUserFocus] = useState(false);
    // const [password, setPassword] = useState("");
    // const [name, setName] = useState("");
    // const [phone, setPhone] = useState("")
    // const [address, setAddress] = useState("")
    // const [image, setImage] = useState("")
    // // const [validPwd, setValidPwd] = useState(false);
    // // const [pwdFocus, setPwdFocus] = useState(false);
    // // const [matchFocus, setMatchFocus] = useState(false);
    // // const [errMsg, setErrMsg] = useState("");
    // const [success, setSuccess] = useState(false);

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

    // const changeHandler = (event) => {
	// 	setImage(event.target.files[0]);
	// };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     // validate làm sau
    //     // const v1 = USER_REGEX.test(user);
    //     // const v2 = PWD_REGEX.test(pwd);
    //     // if (!v1 || !v2) {
    //     //     setErrMsg("Invalid Entry");
    //     //     return;
    //     // }
    //     try {
    //         const formData = new FormData();
    //         formData.append("email", email);
    //         formData.append("password", password);
    //         formData.append("phone", phone);
    //         formData.append("address", address);
    //         formData.append("image", image);
    //         formData.append("name", name);
    //         const respone = await axios.post(
    //             REGISTER_URL,
    //             formData,
    //             {
    //                 headers: {
    //                     "Content-Type": "application/json" },
    //             },
    //         );
    //         if (respone.status === 200) {
    //             navigate('/login');
    //           } else {
    //             alert(respone.data.message);
    //           }
    //         setSuccess(true);
    //         //clear state and controlled inputs
    //         // setEmail("");
    //         // setPassword("");
           
    //     } catch (err) {
    //         if (err.response) {
    //             console.log(err.response.data);
    //             console.log(err.response.status);
    //             console.log(err.response.headers);
    //           } else if (err.request) {
    //             console.log(err.request);
    //           } else {
    //             console.log('Error', err.message);
    //           }
    //           console.log(err.config);
    //     }
       
    // }
    return (
        <>
            <div>
                <div className={'Mn_hnh_ng_nhp'}>
                    <div className={"image-6"}>
                        <img src={require('./kahoot.png')} />
                    </div>
                    <div className={'Rectangle-34'}>
                        <Grid item xs={12}>
                            <h1 className={'Log_in_2'}>Create_question</h1>
                        </Grid>
                        <Grid item xs={12}>
                            <Box>
                                <Grid>
                                    <form onSubmit>
                                        <Grid item xs={12}>
                                            <TextField
                                                className={'Rectangle-4'}
                                                label="Room ID"
                                                placeholder="Please room id"
                                                // type="email"
                                                // onChange={(e) => setEmail(e.target.value)}
                                                // value={email}
                                                required
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                className={'Rectangle-4'}
                                                label="Question"
                                                placeholder="Please question"
                                                // type="password"
                                                // onChange={(e) => setPassword(e.target.value)}
                                                // value={password}
                                                required
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                className={'Rectangle-4'}
                                                label="Answer A"
                                                placeholder="Please Answer A"
                                                // value={name}
                                                // onChange={(e) => setName(e.target.value)}
                                                required
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                className={'Rectangle-4'}
                                                label="Answer B"
                                                placeholder="Please Answer B"
                                                // value={phone}
                                                // onChange={(e) => setPhone(e.target.value)}
                                                required
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                className={'Rectangle-4'}
                                                label="Answer C"
                                                placeholder="Please Answer C"
                                                // value={address}
                                                // onChange={(e) => setAddress(e.target.value)}
                                                required
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                className={'Rectangle-4'}
                                                label="Answer D"
                                                placeholder="Please Answer D"
                                                // onChange={changeHandler}
                                                required
                                            />
                
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                    className={'Rectangle-4'}
                                                    label="Answer True"
                                                    placeholder="Please Answer True"
                                                    // onChange={changeHandler}
                                                    required
                                                />
                                            <button className={'Rectangle-6'} type="submit">
                                                Enter
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
export default Create_question