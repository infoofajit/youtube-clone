import React from 'react'

import { Grid } from '@mui/material'

const WatchContainer = () => {
  return (
    <Grid container sx={{mt: 2}}>
      <Grid item xs={9}>
      <iframe width="660" height="315" src="https://www.youtube.com/embed/dRr_eF3YifA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </Grid>
      <Grid item xs={3}>Comments</Grid>
    </Grid>
  )
}

export default WatchContainer
