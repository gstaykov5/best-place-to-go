import React, {  useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Checkbox, FormControl, FormControlLabel, Grid, Paper, Snackbar, Stack, TextField } from '@mui/material'
import MuiAlert from '@mui/material/Alert';

import { login } from '../../../features/actions/actionAuth';
import store from '../../../features/store/store';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Login = props => {
  const [checked, setChecked] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const  { isLoggedIn }  = useSelector(state => state.registeLoginReducer);
  const  { message } = useSelector(state => state.messageReducer);
  
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackBar(false);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  
  const handleChange = () => {
    setChecked(!checked);
  }
  
  const handleLogin = (e) => {
    e.preventDefault();
    
    dispatch(login(email, password))
      .then((res) => {
        if (!res) {
          setOpenSnackBar(true);
        } else {
          setOpenSnackBar(true);
          setOpenSnackBar(false);
          navigate('/BestPlaceToGo', {replace: true});
        }
      })
  };
  
  return (
    <FormControl onSubmit={handleLogin} style={{padding: 130, }}>
      <Paper sx={{elevation: 10}}>
        <Grid
        container
        spacing={3}
        direction={'column'}
        justify={'center'}
        alignItems={'center'}
        >
          <Grid item xs={12}>
            <TextField label='Email' onChange={onChangeEmail}></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField label="Password" type={'password'} onChange={onChangePassword}></TextField>
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel 
              control={
                <Checkbox
                checked={checked}
                onChange={handleChange}
                label={'Keep me logged in'}
                inputProps={{ 'aria-label': 'primary checkbox' }}
                />
              }
              label='Keep me loged in'
            />
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth onClick={handleLogin}> Login </Button>
          </Grid>
        </Grid>
      </Paper>
      
      <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar open={openSnackBar} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            {message}
          </Alert>
        </Snackbar>
      </Stack>
    </FormControl>
  )
}

Login.propTypes = {}

export default Login