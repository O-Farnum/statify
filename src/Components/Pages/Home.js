import React from 'react'
import Grid from '@mui/material/Grid';
import TopFiveBox from '../TopFive/TopFiveBox';

const Home = () => {
  return (
    <Grid item xs = {10.22} sx = {{height: '100vh'}}>
      
      <Grid container 
        xs = {9} 
        spacing = {6} 
        margin = {2} 
        direction = 'column'
        >

        <Grid item >
          <TopFiveBox>Songs</TopFiveBox>
        </Grid>

        <Grid item>
          <TopFiveBox>Artists</TopFiveBox>
        </Grid>

        <Grid item>
          <TopFiveBox>Genres</TopFiveBox>
        </Grid>
      
      </Grid>

    </Grid>




     /*<Paper 
     sx={{
       backgroundColor: 'primary.main',
      }}>
        Home
    </Paper> */

  )
}

export default Home