const express = require('express')
const cors = require('cors')
//const bodyParser = require('body-parser')
//const dotenv = require('dotenv')
const SpotifyWebApi = require('spotify-web-api-node')

const app = express()
app.use(cors())

//dotenv.config()
const port = process.env.PORT
const clientId = process.env.CLIENTID
const clientSecret = process.env.CLIENTSECRET




app.post('/login', (req, res) => {
    
    const _code = req.body.code
    const spotify = new SpotifyWebApi({
        clientId: clientId,
        clientSecret: clientSecret,
        redirectUri: 'http://localhost:3000/home',
    })
    
    spotify.authorizationCodeGrant(_code)
    .then((data) => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expireTime: data.body.expires_in,
        })

        return data;
    }
    ).catch((err) => {
        console.log(err)
    })
});

app.post('/refresh', (req, res) => {
    
    {/*const spotify = new SpotifyWebApi({
        clientId: clientId,
        clientSecret: clientSecret,
        redirectUri: 'http://localhost:3000/home',
        
    })*/}
    spotify.refreshAccessToken()
    .then((data) => {
        res.send.json({
            accessToken: data.body.access_token,
        })
        
        return data;
    }
    ).catch((err) => {
        console.log(err)
    })
});

app.listen(port, () => {
    console.log('listening on 3000')
});



/*
spotify.clientCredentialsGrant().then({
      setToken(data) {
        spotify.setAccessToken(data.body['access_token'])
        spotify.setRefreshToken(data.body['refresh_token']);
      },
      err_catch(err){
        console.log('token err', err.message)
      }

    })
    window.location.hash = ''
*/