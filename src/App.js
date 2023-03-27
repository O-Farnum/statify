import React from 'react';
import { Outlet } from 'react-router-dom';
import './Components/Navbar/Navbar'
import Navbar from './Components/Navbar/Navbar';
import Grid from '@mui/material/Grid';

function App() {
  return (
      <Grid container spacing={0}
        style = {{
          backgroundColor: '#1E1E1E',
          height: '100vh,'
        }}
      >
        <Navbar /> 
        <Outlet />
      </Grid>
  );
}

export default App;
