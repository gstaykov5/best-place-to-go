import React from 'react';

import { Box, Grid, Typography } from '@mui/material';

const Profile = () => {
  return (
    <Box>
      <Grid container style={{marginTop: '100px', justifyContent: 'center'}}>
        <Grid item xs={8} style={{border: '1px solid black'}}>
          <Typography>2121</Typography>
        </Grid>
        <Grid item xs={8}style={{border: '1px solid black'}}>
          <Typography>2121</Typography>

        </Grid>
        <Grid item xs={8}style={{border: '1px solid black'}}>
          <Typography>2121</Typography>

        </Grid>
        <Grid item xs={8}style={{border: '1px solid black'}}>
          <Typography>2121</Typography>

        </Grid>
      </Grid>
    </Box>
  )
}

export default Profile;