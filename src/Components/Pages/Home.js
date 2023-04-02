import React from 'react'
import Grid from '@mui/material/Grid';
import TopFiveBox from '../TopFive/TopFiveBox';
import {TopFiveCard} from '../TopFive/TopFiveCard';


const Home = props => {
  console.log(props)
  return(
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
{/*          <TopFiveBox><TopFiveCard img_src = {hi[0].images[3].url} name = {props.artist.name}/></TopFiveBox>*/}
        </Grid>

        <Grid item>
          <TopFiveBox>Genres</TopFiveBox>
        </Grid>
      
      </Grid>

  );
}

export default Home