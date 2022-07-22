import React, { useState,useEffect } from "react";
import { Button, getNativeSelectUtilityClasses } from "@mui/material";
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from "../../../../../base/axios";

const ListRoom = () => {
    const [data,setData] = useState([])
    const [code,setCode] = useState('')
    const [id,setId] = useState(localStorage.kahootApp_userId)
    // console.log(id)
    useEffect(() => {
        axios.get(`/room/${id}`,{
            headers: {
                'kahootapp-access-token': localStorage.kahootApp_accessToken,
            },
        })
        .then((response) => {
            const roomData = Object.values(response.data.data)
            setData(roomData)   
        })
    },[])

    const handleCreateRoom = async (e) => {
        try {
           const respone = await  axios.post(`/room/create/${id}`,{},
                    {
                        headers: {
                            'kahootapp-access-token': localStorage.kahootApp_accessToken,
                        },
                    }
                
            )
            if (respone) {
                alert(respone.data.message)
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
    }

    return (
        <>
            {/* <div class="Rectangle-13">
              <div className={'image-4'}>
                  <img src={require('../../../image/kahoot.png')} />
                </div> */}

           
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    List Room
                </Grid>
                <Grid item xs={6}>
                <Grid sx={{justifyContent:'center'}} item xs={3}> <Button onClick={handleCreateRoom}>Create Room</Button></Grid>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>ID Room</TableCell>
                                    <TableCell align="center">PIN</TableCell>
                                    <TableCell align="center">Date-Start</TableCell>
                                    <TableCell align="center">Date-End</TableCell>
                                    <TableCell align="center">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data
                                    ? data.map((row) => (
                                          <TableRow
                                              key={row.key}
                                              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                          >
                                              <TableCell component="th" scope="row">
                                                  {row.id}
                                              </TableCell>
                                              <TableCell align="center">{row.pin}</TableCell>
                                              <TableCell align="center">{row.createdAt}</TableCell>
                                              <TableCell align="center">{row.updatedAt}</TableCell>
                                              <a style={{ textDecoration: 'none' }} href="/watch-room">
                                                  <Button>Watch</Button>
                                              </a>
                                              {/* <Button  onClick={onDelete(`${row.pin}`)}>Delete</Button>  */}
                                          </TableRow>
                                      ))
                                    : null}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
            {/* </div> */}
        </>
    );
}

export default ListRoom