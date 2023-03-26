import React from 'react'

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Outlet } from 'react-router-dom';

import Sidebar from './Sidebar';

const Body = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid item xs={1}><Sidebar /></Grid>
        <Grid item xs={11}><Outlet /></Grid>
      </Grid>
    </Box>
  )
}

export default Body
