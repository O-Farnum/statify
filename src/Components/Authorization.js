import axios from 'axios'
import React, { useState, useEffect } from 'react'

const Authorization = (code) => {

    const [accessToken, setAccessToken] = useState('')
    const [refreshToken, setRefreshToken] = useState('')
    const [expireTime, setexpireTime] = useState('')

    //Grab tokens from server request by using axios to http://localhost:3000/'page'
    useEffect(() => {

        //if(expireTime && refreshToken) return
        axios.post('http://localhost:3000/login', {code})
        .then((res) =>{
            setAccessToken(res.data.accessToken)
            setRefreshToken(res.data.refreshToken)
            setexpireTime(res.data.expireTime)
            window.history.pushState({}, null, "/")
            console.log(res.data)
        })
        .catch((err) =>{
            console.log(err)
            window.location = '/'
        })

    },[code])

    useEffect(() => {
        
        axios.get('http://localhost:3000/refresh', {code}).then((res) =>{
            setAccessToken(res.data.accessToken)
            setRefreshToken(res.data.refreshToken)
            setexpireTime(res.data.expireTime)
////////////////////////LOOK INTO///////////////////////////////////////////////////////
            window.history.pushState({}, null, "/")
        })
        .catch((err) =>{
            console.log(err)
            window.location = '/'
        })

    },[code])
}

export default Authorization