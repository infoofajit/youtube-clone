import React from 'react'

import { Link as RouterLink } from 'react-router-dom';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const VideoCard = ({item}) => {
  const { id, snippet, statistics } = item;
  const { channelTitle, thumbnails, title } = snippet;

  return (
    <>
      <Card>
        <CardActionArea component={RouterLink} to={'watch?v='+id}>
          <CardMedia
            component="img"
            height="140"
            image={thumbnails?.high?.url}
            alt="green iguana"
          />
          <CardContent>
          <Typography variant="subtitle2" gutterBottom>{title}</Typography>
          <Typography variant="body1">{channelTitle}</Typography>
          <Typography variant="body2">{statistics?.viewCount}k views</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  )
}

export default VideoCard

export const AdVideoCard = ({item}) => {
  return (
    <Box sx={{border: '2px solid #ccc'}}>
      <VideoCard item={item} />
    </Box>
  );
}
