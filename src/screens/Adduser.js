import { Button, Container, Typography } from '@mui/material'
import React from 'react'

const Adduser = () => {
    
  return (
    <>
    <Container>
        <Typography variant='body1'>Add User</Typography>   
        <div>
        <label>Name</label>
        <input type='text'></input>
        </div>
        <Button>Submit</Button>
    </Container>
    </>
  )
}

export default Adduser