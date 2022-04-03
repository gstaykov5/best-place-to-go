import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Box, Typography } from '@material-ui/core';
import { Button, Grid, ImageList, ImageListItem, TextField } from '@mui/material';
import FollowTheSignsIcon from '@mui/icons-material/FollowTheSigns';
import SendIcon from '@mui/icons-material/Send';
import EditIcon from '@mui/icons-material/Edit';

const Details = () => {
  // const [placeDetails, setPlaceDetails] = useState();
  const { id } = useParams();
  const { places } = useSelector(state => state.placesReducer);

  // const placeDetails = places.filter(pl => (pl.id === +id))
  // useEffect(() => {
  //   setPlaceDetails([...places.filter(pl => (pl.id === +id))]);
  // }, [id])

  return (
    <div>
        <Box sx={{flexGrow: 1}}>
            <Grid container xs={12} style={{marginTop: '100px', marginLeft: '20px', justifyContent: 'center'}}>
                <Grid item lg={4} md={6} xs={12}>
                    <Box sx={{ width: 500, height: 450, overflowY: 'scroll' }}>
                        <ImageList variant="masonry" cols={3} gap={8} >
                            {places.filter(pl => (pl.id === +id))[0].images.map((item) => (
                                <ImageListItem key={item.image} >
                                    <img
                                      src={`${item.image}?w=248&fit=crop&auto=format`}
                                      srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                      alt={item.country}
                                      loading="lazy"
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </Box>
                </Grid>

                {places.filter(pl => (pl.id === +id)).map(item => (
                  <Grid container lg={6} md={6} xs={12} >
                    <Grid item>
                      <Typography variant="h4" style={{ marginTop: '30px',  marginBottom: '20px' }}>{item.country}</Typography>
                      <Typography variant="h5" style={{ marginBottom: '20px' }}>{item.city}</Typography>
                      <Typography variant="h5" >{item.description}</Typography>
                    </Grid>

                    <Grid item lg={12} sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end', p: 1, m: 1, }}>
                      <Button sx={{ height: '57px' }} size='large' variant="outlined" endIcon={<EditIcon />}>Edit</Button>
                    </Grid> 

                    <Grid item lg={12} sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end', p: 1, m: 1, }}>
                      <TextField fullWidth variant='outlined' label='Comment' color="warning" focused />
                      <Button size='large' variant="outlined" sx={{ width: '35%', ml: 5, height: '57px' }} endIcon={<SendIcon />}>Add comment</Button>
                    </Grid>
                  </Grid>
                ))}

                <Grid item lg={8} md={6} xs={12} style={{marginTop: '100px', marginBottom: '70px'}}>
                    <Typography variant="h4">Comments</Typography>
                </Grid>

                <Grid item lg={8} md={8} xs={10} style={{ marginBottom: '50px', borderBottom: '1px solid black'}}>
                    <Typography variant="body1" align='left' ><FollowTheSignsIcon fontSize="small" />This is for username</Typography>
                    <Typography variant="body1" align='left' >leave some comment here </Typography>
                    <Button size='small'>Delete</Button>
                    <Button size='small'>Edit</Button>
                </Grid>
                <Grid item lg={8} md={6} xs={12} style={{ marginBottom: '50px', borderBottom: '1px solid black' }}>
                    <Typography variant="body1" align='left' ><FollowTheSignsIcon fontSize="small" />This is for username</Typography>
                    <Typography variant="body1" align='left' >leave some comment here </Typography>
                </Grid>
                <Grid item lg={8} md={6} xs={12} style={{ marginBottom: '50px', borderBottom: '1px solid black' }}>
                    <Typography variant="body1" align='left' ><FollowTheSignsIcon fontSize="small" />This is for username</Typography>
                    <Typography variant="body1" align='left' >leave some comment here </Typography>
                </Grid>
                <Grid item lg={8} md={6} xs={12} style={{ marginBottom: '50px', borderBottom: '1px solid black' }}>
                    <Typography variant="body1" align='left' ><FollowTheSignsIcon fontSize="small" />This is for username</Typography>
                    <Typography variant="body1" align='left' >leave some comment here </Typography>
                </Grid>
            </Grid>
          </Box>
    </div>
  )
}

const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
      title: 'Bed',
    },
    {
      img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
      title: 'Books',
    },
    {
      img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
      title: 'Sink',
    },
    {
      img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
      title: 'Kitchen',
    },
    {
      img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
      title: 'Blinds',
    },
    {
      img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
      title: 'Chairs',
    },
    {
      img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
      title: 'Laptop',
    },
    {
      img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
      title: 'Doors',
    },
    {
      img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
      title: 'Coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
      title: 'Storage',
    },
    {
      img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
      title: 'Candle',
    },
    {
      img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
      title: 'Coffee table',
    },
  ];
  
export default Details