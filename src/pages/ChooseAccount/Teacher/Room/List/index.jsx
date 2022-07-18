
import React, { useState,useEffect } from "react";
import { Button } from "@mui/material";
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
    const [data,setData] = useState({})

    useEffect(() => {
        axios.get('/room/13')
        .then((response) => {
            console.log(response.data.data)
           
            setData(response.data.data);

            console.log(data.id)

        })
    }, [])
    useEffect(() => {
      
    },  handleCreateRoom)
    const handleCreateRoom = async (e) => {
        e.preventDefault();
        try {
            const respone = await axios.post('/room/create/13',
                    {
                        headers: {
                            "Content-Type": "multipart/form-data"
                        },
                    },
                
            )
            console.log(respone.data)
        } catch (error) {
            console.log(error)
        }
    }
    return(<>
        <Grid container spacing={2}>
            <Grid item xs={6}>List Room</Grid>
            <Grid item xs={6}>
                <Button onClick={handleCreateRoom}>Create Room</Button>
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
       
            {/* data fake */}
            <TableRow>
            <TableCell align="left">1</TableCell>
              <TableCell align="center">547123</TableCell>
              <TableCell align="center">17/07/2022</TableCell>
              <TableCell align="center">20/07/2022</TableCell>
              <TableCell align="center">
               <a style={{textDecoration:'none'}} href="/watch-room"><Button>Watch</Button></a>

                <Button>Delete</Button>
              </TableCell>
            </TableRow>
         
          {/* {data.map((row) => (
            <TableRow
              key={row.key}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {}
              </TableCell>
              <TableCell align="right">{row.pin}</TableCell>
              <TableCell align="right">{row.locked}</TableCell>
              <TableCell align="right">{row.createdAt}</TableCell>
              <TableCell align="right">{row.updatedAt}</TableCell>
            </TableRow>
          ))} */}
          {
            
          }
        
        </TableBody>
      </Table>
    </TableContainer>
            </Grid> 
        </Grid>
    </>)
}

export default ListRoom