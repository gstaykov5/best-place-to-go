import React, { forwardRef, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

import { Snackbar, Stack } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Home = props => {
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const { message } = useSelector(state => state.messageReducer);

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
    <div>
      <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar open={openSnackBar} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            {message}
          </Alert>
        </Snackbar>
      </Stack>
    </div>
  )
}

Home.propTypes = {}

export default Home