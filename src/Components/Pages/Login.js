import Button from '@mui/material/Button'
import React from 'react'
import Box from '@mui/system/Box'

const CLIENT_ID = '697ea8093f43477390c5899d73c98331'
const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize'
const RESPONSE_TYPE = 'code'
const REDIRECT_URI = 'http://localhost:3000/home'
const SCOPES = 'user-read-playback-state%20user-read-currently-playing%20user-top-read%20user-read-recently-played%20user-read-email%20user-read-private'

export default function Login() {
  return (
    <Box textAlign = 'center' alignItems = 'center'
        sx = {{
            backgroundColor: 'primary.main',
            height: '100vh',
        }}
    >
        <Button
            variant= 'contained'
            color = 'secondary'
            size = 'large'
            sx = {{
                margin: '37vh',
                height: '10vh',
                width: '40vh',
                fontWeight: 'bold',
            }}
            href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&response_type=${RESPONSE_TYPE}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES}`}
            >
            Login to Spotify
        </Button>
    </Box>
    )
}
