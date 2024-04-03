import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasics = () => {
    // var fname="Anandakrishnan J"
    var [name,setName] = useState("Anandakrishnan J")
    var [value,setValue] = useState()
    const changeName = ()=>{
        console.log("Clicked")
        setName(value)
    }
    const inputHandler = (e)=>{
        console.log(e.target.value)
        setValue(e.target.value)
    }
  return (
    <div>
        <Typography variant='h4'>Welcome {name}</Typography>
        <TextField label="Enter a Name" variant="outlined" onChange={inputHandler}/><br/>
        <Button variant="contained" color="error" onClick={changeName}>Change</Button>
    </div>
  )
}

export default Statebasics