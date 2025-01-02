import { Button, Container } from '@mui/material'
import React from 'react'
import { Navigate, useNavigate  } from 'react-router-dom'

const Userlist = () => {
    const navigate=useNavigate();
    const handlClick=()=> {
     navigate('/adduser')
    }
  return (
    <Container>
    <div style={{display:'flex', justifyContent:'space-between', marginTop:'10px'}}>Userlist
    <Button variant="contained" onClick={handlClick}>Add User</Button>
    </div>
    </Container>
  )
}

export default Userlist