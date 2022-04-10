import React, { forwardRef, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

import { Grid, ImageList, ImageListItem, ImageListItemBar, Snackbar, Stack, Typography } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { Box } from '@mui/system';

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Home = props => {
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const { message } = useSelector(state => state.messageReducer);
  const { isLoggedIn } = useSelector(state => state.registeLoginReducer);


  useEffect(() => {
    setOpenSnackBar(true);
  }, []);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackBar(false);
  };

  return (
    <Box>
      <Typography
      variant="h4"
      style={{ marginLeft: '100px', marginTop: '50px', justifyContent: 'center',  }}
      >
        Places you must visit
      </Typography>

      <Grid
      container 
      style={{marginTop: '100px', 
      justifyContent: 'center', 
      marginBottom: '50px' }}
    >

      <Grid item lg={4} md={6} xs={12} sx={{ml: 10, borderBottom: '1px solid black' }} >
        <Box sx={{ width: 1000, height: 450, ml: 30 }}>
              <ImageList key={1} variant="masonry" cols={3} gap={8} >
                  <ImageListItem key={1} sx={{boxShadow: '2px 2px 10px black'}}>
                    <img
                      src={`${'https://ak-d.tripcdn.com/images/1i6662224o9x2mixtCAE1.jpg?proc=source/trip'}?w=248&fit=crop&auto=format`}
                      srcSet={`${'https://www.easytourchina.com/images/Photo/blog/p657_d20180418161342.jpg'}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      alt={'country'}
                      loading="lazy"
                    />
                  </ImageListItem>
              </ImageList>
        </Box>
      </Grid>
      <Grid item lg={6} md={6} xs={12} sx={{borderBottom: '1px solid black', color: 'white'}}>
          <Box key={1}>
            <Grid item sx={{ml: 10}} >
              <Typography variant="h4" style={{ marginTop: '30px',  marginBottom: '50px' }}>Zhangye Danxia Geopark, China</Typography>
              <Typography variant="h5" style={{ marginBottom: '50px' }}>Geology lovers and avid Instagrammers alike will be drawn to the otherworldly hues of the "Rainbow Mountains." The colors were formed by the layering of sedimentary mineral deposits over millions of years, but it's hard to look at the flowing reds, yellows, and oranges and not feel like you're witnessing magic.</Typography>
            </Grid>
          </Box>
      </Grid>
      
      <Grid item lg={4} md={6} xs={12} sx={{ml: 10,borderBottom: '1px solid black' }} >
        <Box sx={{ width: 1000, height: 450, ml: 30}}>
              <ImageList key={1} variant="masonry" cols={3} gap={8} >
                  <ImageListItem key={1} sx={{boxShadow: '2px 2px 10px black'}} >
                    <img
                      src={`${'https://static0.thetravelimages.com/wordpress/wp-content/uploads/2018/07/200158e0f6bb62c9e77a5b9402309951-venice-italy-gondola.jpg?q=50&fit=crop&w=737&h=903&dpr=1.5'}?w=248&fit=crop&auto=format`}
                      srcSet={`${'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg'}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      alt={'country'}
                      loading="lazy"
                    />
                  </ImageListItem>
              </ImageList>
        </Box>
      </Grid>
      <Grid item lg={6} md={6} xs={12} sx={{borderBottom: '1px solid black', color: 'white'}}>
          <Box key={1}>
            <Grid item sx={{ml: 10}} >
              <Typography variant="h4" style={{ marginTop: '30px',  marginBottom: '50px' }}>Venice, Italy</Typography>
              <Typography variant="h5" style={{ marginBottom: '50px' }}>If traversing the canals with a be-striped gondolier sounds unbearably touristy, stick to the sidewalks and spectacular arched bridges to get your fill of this truly unique, wildly romantic floating city.</Typography>
            </Grid>
          </Box>
      </Grid>

      <Grid item lg={4} md={6} xs={12} sx={{ml: 10,borderBottom: '1px solid black' }} >
        <Box sx={{ width: 1000, height: 450, ml: 30}}>
              <ImageList key={1} variant="masonry" cols={3} gap={8} >
                  <ImageListItem key={1} sx={{boxShadow: '2px 2px 10px black'}}>
                    <img
                      src={`${'https://img.static-kl.com/images/media/08A05587-5E09-42AD-8C867C15BB437DAE?aspect_ratio=1:1&min_width=912'}?w=248&fit=crop&auto=format`}
                      srcSet={`${'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg'}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      alt={'country'}
                      loading="lazy"
                    />
                  </ImageListItem>
              </ImageList>
        </Box>
      </Grid>
      <Grid item lg={6} md={6} xs={12} sx={{borderBottom: '1px solid black', color: 'white'}}>
          <Box key={1}>
            <Grid item sx={{ml: 10}} >
              <Typography variant="h4" style={{ marginTop: '30px',  marginBottom: '50px' }}>Banff National Park, Canada</Typography>
              <Typography variant="h5" style={{ marginBottom: '50px' }}>The glacial lakes in Canada's first national park have some of the bluest water you've ever seen. Even if you're not particularly outdoorsy, you can still admire the views from one of the cozy and luxurious lakeside lodges throughout the park, like the Fairmont Chateau Lake Louise.</Typography>
            </Grid>
          </Box>
      </Grid>

      <Grid item lg={4} md={6} xs={12} sx={{ml: 10,borderBottom: '1px solid black' }} >
        <Box sx={{ width: 1000, height: 450, ml: 30}}>
              <ImageList key={1} variant="masonry" cols={3} gap={8} >
                  <ImageListItem key={1} sx={{boxShadow: '2px 2px 10px black'}}>
                    <img
                      src={`${'https://media.cntraveler.com/photos/5bce196031019f0885f7cbc9/3:4/w_1998,h_2664,c_limit/Machu-Picchu_GettyImages-109401484.jpg'}?w=248&fit=crop&auto=format`}
                      srcSet={`${'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg'}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      alt={'country'}
                      loading="lazy"
                    />
                  </ImageListItem>
              </ImageList>
        </Box>
      </Grid>
      <Grid item lg={6} md={6} xs={12} sx={{borderBottom: '1px solid black', color: 'white'}}>
          <Box key={1}>
            <Grid item sx={{ml: 10}} >
              <Typography variant="h4" style={{ marginTop: '30px',  marginBottom: '50px' }}>Machu Picchu</Typography>
              <Typography variant="h5" style={{ marginBottom: '50px' }}>This World Heritage site is easily the most famous spot in Peru, and for good reason. The ancient terraced city’s astounding architecture and sweeping views of the surrounding mountains will leave you breathless (as might the nearly 8,000 foot elevation.)</Typography>
            </Grid>
          </Box>
      </Grid>

      
      <Grid item lg={4} md={6} xs={12} sx={{ml: 10, borderBottom: '1px solid black' }} >
        <Box sx={{ width: 1000, height: 450, ml: 30}}>
              <ImageList key={1} variant="masonry" cols={3} gap={8} >
                  <ImageListItem key={1} sx={{boxShadow: '2px 2px 10px black'}} >
                    <img
                      src={`${'https://i.pinimg.com/originals/f8/c1/93/f8c193b958a4f0ae0bbe8840cd871388.jpg'}?w=248&fit=crop&auto=format`}
                      srcSet={`${'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg'}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      alt={'country'}
                      loading="lazy"
                    />
                  </ImageListItem>
              </ImageList>
        </Box>
      </Grid>
      <Grid item lg={6} md={6} xs={12} sx={{ borderBottom: '1px solid black', color: '#888988'}}>
          <Box key={1}>
            <Grid item sx={{ml: 10}} >
              <Typography variant="h4" style={{ marginTop: '30px',  marginBottom: '50px' }}>Pitons, St Lucia</Typography>
              <Typography variant="h5" style={{ marginBottom: '50px' }}>This World Heritage site is easily the most famous spot in Peru, and for good reason. The ancient terraced city’s astounding architecture and sweeping views of the surrounding mountains will leave you breathless (as might the nearly 8,000 foot elevation.)These two volcanic mountains are one of the most recognizable—not to mention beautiful—features on this Caribbean island. Enjoy the Pitons from the pristine white sand beach at Sugar Beach, A Viceroy Resort.</Typography>
            </Grid>
          </Box>
      </Grid>
      
      {isLoggedIn && <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar open={openSnackBar} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            {message}
          </Alert>
        </Snackbar>
      </Stack>}
    </Grid>
    </Box>
  )
}

export default Home