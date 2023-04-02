import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import './Components/Navbar/Navbar'
import Navbar from './Components/Navbar/Navbar';
import Grid from '@mui/material/Grid';
import { getTokenUrl } from './Components/getTokenUrl';
import SpotifyWebApi from 'spotify-web-api-node';
import axios from 'axios';
import Authorization from './Components/Authorization';


function App() {
  
  //Grab URL code and send to Authorization Component to get credentials from server
  const code = new URLSearchParams(window.location.search).get("code")
  const spotifyToken = Authorization({code})
  const spotify = new SpotifyWebApi()

  const [topArtist, setTopArtist] = useState('')
  const [topTracks, setTopTracks] = useState('')

  useEffect(() => {
      //Grab Top Artists
   
       spotify.getMyTopArtists()
      .then((data) => {
        setTopArtist(data.body.items)
        console.log(topArtist)
      })
      .catch((err) => {
        console.log(err)
      })

     //Grab Top Songs
     spotify.getMyTopTracks()
     .then((data) => {
       setTopTracks(data.body.items)
       console.log(topTracks)
     })
     .catch((err) => {
      console.log(err)
    })

  }), [spotify.clientId, spotify.clientSecret]
  

  return (
      <Grid container spacing={0}
        style = {{
          backgroundColor: '#1E1E1E',
          height: '100vh,'
        }}
      >
        <Navbar /> 
        <Outlet artist = {topArtist}/>
      </Grid>
  )

}
export default App;
