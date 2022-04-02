import React from 'react';

import { Box, Typography } from '@material-ui/core';
import { Button, Grid, ImageList, ImageListItem } from '@mui/material';
import FollowTheSignsIcon from '@mui/icons-material/FollowTheSigns';

function Details() {
  return (
    <div>
        <Box sx={{flexGrow: 1}}>
            <Grid container style={{marginTop: '100px', justifyContent: 'center'}}>
                <Grid item lg={4} md={6} xs={12}>
                    <Box sx={{ width: 500, height: 450, overflowY: 'scroll' }}>
                        <ImageList variant="masonry" cols={3} gap={8}>
                            {itemData.map((item) => (
                                <ImageListItem key={item.img}>
                                    <img
                                        src={`${item.img}?w=248&fit=crop&auto=format`}
                                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                        alt={item.title}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </Box>
                </Grid>
                <Grid item lg={6} md={6} xs={12} style={{border: '1px solid black'}}>
                    <Typography variant="h4" style={{ marginTop: '30px',  marginBottom: '20px' }}>Canada</Typography>
                    <Typography variant="h5" style={{ marginBottom: '20px' }}>Toronto</Typography>
                    <Typography variant="h5" >djksahlsdajflj sadkj kjsahgkljsha skdljgh sdn sajhgk hsakjghlksjadhg  jakshgkahskgjh  akjshgkhsa</Typography>
                </Grid>

                <Grid item lg={8} md={6} xs={12} style={{marginTop: '100px', marginBottom: '70px'}}>
                    <Typography variant="h4">Comments</Typography>
                </Grid>

                <Grid item lg={8} md={8} xs={10} style={{ marginBottom: '50px', borderBottom: '1px solid black'}}>
                    <Typography variant="body1" align='left' ><FollowTheSignsIcon fontSize="small" />This is for username</Typography>
                    <Typography variant="body1" align='left' >leave some comment here </Typography>
                    <Button size='small' style={{ bottom: '0', right: '45%'}}>Delete</Button>
                    <Button size='small' style={{ bottom: '0', right: '45%'}}>Edit</Button>
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