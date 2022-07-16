import React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'
import styles from './style.module.css'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';

const Student = () => {
    return (
        <Box sx={{ background: '#17a2b8', justifyContent: 'center', height: '1000px' }}>
             <Grid  container spacing={2}>
                <Grid item xs={12}> 
                        <img src={require('./image/kahoot_logo.svg')} />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="User Name"
                        placeholder="please enter username"
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained">Submit</Button>
                </Grid>
            </Grid>
        </Box>
           
    )
}
export default Student