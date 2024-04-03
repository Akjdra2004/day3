import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Registration = () => {
  return (
    <div><br></br>

  <Typography variant='h5'>Registration</Typography>
  <TextField label="Enter a Name" variant="outlined"/>
  <TextField label="Enter a password" variant="filled"/>
  <TextField label="Enter a Email" variant="standard"/><br></br>
  <Button variant="text" color="primary">Click Here</Button>
  <Button variant="contained" color="error">Button Here</Button>
  <Button variant="outlined" color="success">Submit Here</Button>
    </div>
    
  )
}

export default Registration