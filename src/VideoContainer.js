import React, {useEffect, useState} from 'react'

import { Grid } from '@mui/material'

import VideoCard, {AdVideoCard} from './VideoCard';
import { YOUTUBE_VIDEOS_API } from './utils/constants';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json?.items)
  }

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <Grid container spacing={2} sx={{mt: 2}}>
      {videos[0] && (
        <Grid item xs={3} key={videos[0]?.id}>
          <AdVideoCard item={videos[0]} />
        </Grid>
      )}
      {videos.map((row) => {
        return (
          <Grid item xs={3} key={row?.id}>
            <VideoCard item={row} />
          </Grid>
        )
      })}
    </Grid>
  )
}

export default VideoContainer
