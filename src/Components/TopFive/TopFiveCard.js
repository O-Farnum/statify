import { Grid } from '@mui/material'
import React from 'react'
import Image from 'mui-image'

export const TopFiveCard = (props) => {
  
    const img_src = props.img_src
    const name = props.name

    return (
    <Grid container>
        <Grid item>
            <Image src = {img_src}/>
        </Grid>
        <Grid item color = 'primary.main'>
            {name}
        </Grid>
    </Grid>
  )
}
