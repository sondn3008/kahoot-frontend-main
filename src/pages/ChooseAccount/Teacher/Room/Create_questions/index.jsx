import React, {useState} from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from "../../../../../base/axios";

const Create_question = () => {
    const [image, setImage] = useState("")
    const [room_id, setRoomId] = useState("")
    const [question, setQuestion] = useState("")
    const [answer_A, setAnswerA] = useState("")
    const [answer_B, setAnswerB] = useState("")
    const [answer_C, setAnswerC] = useState("")
    const [answer_D, setAnswerD] = useState("")
    const [answer_true, setAnswerTrue] = useState("")
    const [time, setTime] = useState("")
    
    const changeHandler = (event) => {
		setImage(event.target.files[0]);
	};

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("room_id", room_id);
            formData.append("question", question);
            formData.append("answer_A", answer_A);
            formData.append("answer_B", answer_B);
            formData.append("answer_C", answer_C);
            formData.append("answer_D", answer_D);
            formData.append("answer_true", answer_true);
            formData.append("time", time);
            formData.append("image", image);
            const respone = await axios.post(
                '/question',
                formData,
                {
                    headers: {
                        'kahootapp-access-token': localStorage.kahootApp_accessToken,
                    },
                },
            );
            if (respone) {
                alert(respone.data.message)
            }
           
        } catch (err) {
            if (err.response) {
                alert(err.response.data['message'])
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);
              } else if (err.request) {
                alert("error request")
                console.log(err.request);
              } else {
                alert("error")
                console.log('Error', err.message);
              }
        }
       
    }

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
                                    <form onSubmit={handleSubmit}>
                                        <Grid item xs={12}>
                                            <TextField
                                                className={'Rectangle-4'}
                                                label="Room ID"
                                                placeholder="Please room id"
                                                type="number"
                                                onChange={(e) => setRoomId(e.target.value)}
                                                value={room_id}
                                                required
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                className={'Rectangle-4'}
                                                label="Question"
                                                placeholder="Please question"
                                                type="text"
                                                onChange={(e) => setQuestion(e.target.value)}
                                                value={question}
                                                required
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                className={'Rectangle-4'}
                                                label="Answer A"
                                                placeholder="Please Answer A"
                                                type="text"
                                                value={answer_A}
                                                onChange={(e) => setAnswerA(e.target.value)}
                                                required
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                className={'Rectangle-4'}
                                                label="Answer B"
                                                placeholder="Please Answer B"
                                                type="text"
                                                value={answer_B}
                                                onChange={(e) => setAnswerB(e.target.value)}
                                                required
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                className={'Rectangle-4'}
                                                label="Answer C"
                                                placeholder="Please Answer C"
                                                type="text"
                                                value={answer_C}
                                                onChange={(e) => setAnswerC(e.target.value)}
                                                required
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                className={'Rectangle-4'}
                                                label="Answer D"
                                                placeholder="Please Answer D"
                                                type="text"
                                                value={answer_D}
                                                onChange={(e) => setAnswerD(e.target.value)}
                                                required
                                            />
                
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                className={'Rectangle-4'}
                                                label="Time"
                                                placeholder="Please Time"
                                                type="number"
                                                value={time}
                                                onChange={(e) => setTime(e.target.value)}
                                                required
                                            />
                
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                className={'Rectangle-4'}
                                                type="file"
                                                onChange={changeHandler}
                                                required
                                            />
                
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                    className={'Rectangle-4'}
                                                    label="Answer True"
                                                    placeholder="Please Answer True"
                                                    type="text"
                                                    value={answer_true}
                                                    onChange={(e) => setAnswerTrue(e.target.value)}
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