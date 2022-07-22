import React, {useEffect, useState} from "react";
import { Grid ,Button} from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from '../../../../../base/axios';
import { useNavigate } from 'react-router-dom';
import { ReplayOutlined } from "@mui/icons-material";

const ViewRoom = () => {
    const navigate = useNavigate();
    const [data,setData] = useState([])
    const [pinAccess, setPinAccess] = useState(localStorage.kahootApp_pinAccess);
    const [idRoomAccess, setIdRoomAccess] = useState(localStorage.kahootApp_idRoomAccess);

    useEffect(() => {
        axios.get(`/question/all/${idRoomAccess}`,{
            headers: {
                'kahootapp-access-token': localStorage.kahootApp_accessToken,
            },
        })
        .then((response) => {
            const roomData = Object.values(response.data.data)
            setData(roomData)   
        })
    },[])

    const handleDeleteQuestion = async (e, id) => {
        e.preventDefault();
        try {
            const respone = await axios.delete(`/question/${id}`,                 
            {
                headers: {
                    'kahootapp-access-token': localStorage.kahootApp_accessToken,
                },
            })
            if (respone) {
                alert(respone.data.message)
                window.location.reload()
            }
        } catch (err) {
            if (err.response) {
                alert(err.response.data.message)
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);
              } else if (err.request) {
                console.log(err.request);
              } else {
                console.log('Error', err.message);
              }
              console.log(err.config);
        }
    };

    const handleLogout = async (e) => {
        e.preventDefault();
        localStorage.kahootApp_accessToken = ''
        localStorage.kahootApp_rfToken = ''
        localStorage.kahootApp_userId = ''
        navigate("/login")
    };

    const handleUpdateQuestion = async (e, id) => {
        e.preventDefault();
        localStorage.kahootApp_idQuestionAccess = id
        navigate("/update-question")
    };


    return (
        <>
            <Grid container spacing={2}>
                <Grid sx={{ justtifyContent: 'right' }} item xs={12}>
                    <Grid container spacing={2}>
                        <Grid sx={{justifyContent:'left'}} item xs={2}>Room: {idRoomAccess}</Grid>
                        <Grid sx={{justifyContent:'center'}} item xs={2}> <Button>START</Button></Grid>
                        <Grid sx={{justifyContent:'center'}} item xs={3}> <Button onClick={(e)=>{navigate('/create-question')}}>Create question</Button></Grid>
                        <Grid sx={{justifyContent:'center'}} item xs={3}> <Button onClick={(e)=>{navigate('/teacher/update')}}>Update Information</Button></Grid>
                        <Grid sx={{justifyContent:'right'}} item xs={2}> <Button onClick={handleLogout}>Logout</Button></Grid>
                    </Grid>
                   
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>ID</TableCell>
                                            <TableCell align="center">Room Id</TableCell>
                                            <TableCell align="center">Question</TableCell>
                                            <TableCell align="center">A</TableCell>
                                            <TableCell align="center">B</TableCell>
                                            <TableCell align="center">C</TableCell>
                                            <TableCell align="center">D</TableCell>
                                            <TableCell align="center">Image</TableCell>
                                            <TableCell align="center">Time</TableCell>
                                            <TableCell align="center">Action</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {data
                                        ? data.map((row) => (
                                          <TableRow
                                              key={row.id}
                                              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                          >
                                              <TableCell component="th" scope="row">
                                                  {row.id}
                                              </TableCell>
                                              <TableCell align="center">{row.room_id}</TableCell>
                                              <TableCell align="center">{row.question}</TableCell>
                                              <TableCell align="center">{row.answer_A}</TableCell>
                                              <TableCell align="center">{row.answer_B}</TableCell>
                                              <TableCell align="center">{row.answer_C}</TableCell>
                                              <TableCell align="center">{row.answer_D}</TableCell>
                                              <TableCell> <img className="Image-question" src={row.image} /></TableCell>
                                              <TableCell align="center">{row.time}</TableCell>
                                              <TableCell align="center">
                                                <Button onClick={(e) => handleUpdateQuestion(e, row.id)}>Update</Button>
                                                <Button onClick={(e) => handleDeleteQuestion(e, row.id)}>Delete</Button>
                                            </TableCell>
                                          </TableRow>
                                      ))
                                    : null}
                            </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}
export default ViewRoom