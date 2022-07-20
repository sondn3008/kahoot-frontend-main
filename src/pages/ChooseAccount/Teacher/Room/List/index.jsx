
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
import CreateRoom from "../Create";
// import CreateRoom from "../Create";


const ListRoom = () => {
    const [data,setData] = useState([])
    const [code,setCode] = useState('')
    const [id,setId] = useState(localStorage.kahootApp_userId)
    // console.log(id)
    useEffect(() => {
        axios.get(`/room/${id}`)
        .then((response) => {
            const roomData = Object.values(response.data.data)
              setData(roomData)
              
        })
    },[])
  //   const handleCreateRoom = async (e) => {
  //     console.log(id)
  //     try {
  //        const response = await  axios.post(`/room/create/${id}`,
  //                 {
  //                     headers: {
  //                         "Content-Type": "multipart/form-data"
  //                     },
  //                 },
              
  //         )
  //         console.log(response.data)
  //         // const newroomData = Object.values(response.data.data)
  //         // console.log(newroomData)
  //         // setData(data.push(newroomData))
  //         // console.log(data.push(newroomData))
  //     } catch (error) {
  //         console.log(error)
  //     }
  // }
  // const onDelete = (pin) => {
  //   axios.delete(`/room/${pin}`)
  // }

    return(<>
        <Grid container spacing={2}>
            <Grid item xs={6}>List Room</Grid>
            <Grid item xs={6}>
            {/* <Button onClick={handleCreateRoom}>Create Room</Button> */}
            <CreateRoom/>
            </Grid>
        </Grid>
        <Grid container spacing={2}>
            <Grid item xs={12}>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID Room</TableCell>
            {/* <TableCell align="right">Name Room</TableCell> */}
            <TableCell align="center">PIN</TableCell>
            <TableCell align="center">Date-Start</TableCell>
            <TableCell align="center">Date-End</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data ? data.map((row) => (
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
              <a style={{textDecoration:'none'}} href="/watch-room"><Button>Watch</Button></a>
                {/* <Button  onClick={onDelete(`${row.pin}`)}>Delete</Button>  */}
            </TableRow>
          )) : null }
        </TableBody>
      </Table>
    </TableContainer>
            </Grid> 
        </Grid>
    </>)
}

export default ListRoom