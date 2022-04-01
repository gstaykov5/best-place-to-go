import { Grid, Typography } from '@material-ui/core';
import { Button, ImageList, ImageListItem } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useSelector } from 'react-redux';
import PersonalInfo from '../right-side-content/PersonalInfo';
// import { useForm, Controller } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import validationChangeIfoSchema from '../validationRegistrationSchema';

const Account = () => {
    const { user } = useSelector(state => state.registeLoginReducer);

  return (
    <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} style={{marginTop: '100px', marginBottom: '160px', justifyContent: 'center'}}>

            {/* Left side */}
            <Grid item lg={4} xs={12} md={6}>
                <Typography variant='h5'>{user.username}</Typography>
                <ImageList sx={{ width: 'auto', height: 250, marginLeft: '170px' }} >
                    <ImageListItem key={1} sx={{width: 220}}>
                        <img
                          src={'https://thumbs.dreamstime.com/b/aerial-view-lago-antorno-dolomites-lake-mountain-landscape-alps-peak-misurina-cortina-di-ampezzo-italy-reflected-103752677.jpg'}
                        //   srcSet={}
                          alt={'kek'}
                        />
                    </ImageListItem>
                </ImageList>
                <Grid item lg={6} style={{ marginLeft: "130px" }}>
                    <Button>Change personal info</Button>
                </Grid>
                <Grid item lg={6} style={{ marginLeft: "100px" }}> 
                    <Button>Prifile</Button>
                </Grid>
                <Grid item lg={6} style={{ marginLeft: "100px" }}> 
                    <Button>My places</Button>
                </Grid>
                <Grid item lg={6} style={{ marginLeft: "100px" }}> 
                    <Button>Friends</Button>
                </Grid>
            </Grid>

            {/* Right side */}
            <PersonalInfo />
        </Grid>
    </Box>
  )
}

export default Account;