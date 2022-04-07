import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Paper, Box, Grid, TextField, Typography, FormControlLabel, Checkbox, Button } from '@material-ui/core';
import { FormControl, InputLabel, NativeSelect } from '@mui/material';

import  validationRegistrationSchema  from './validationRegistrationSchema';
import { registration } from '../../../features/actions/actionAuth';

const Register = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
    
  const { register, control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationRegistrationSchema)
  });

  const onSubmit = data => {
    data.role = 'explorer';
    data.country = '';
    data.city = '';
    data.favorites = [];
    data.avatar = '';
    data.registrationDate = new Date().toDateString();
    
    dispatch(registration(data));
    navigate('/Home', {replace: true});
  };

  return (
    <Fragment>
      <Paper>
        <Box px={50} py={15}>
          <Typography variant="h5" align="center" margin="dense">
            Best place to go registration form!
          </Typography>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="fullname"
                name="fullname"
                label="Full Name"
                fullWidth
                margin="none"
                {...register('fullname')}
                error={errors.fullname ? true : false}
              />
              <Typography variant="inherit" color="textSecondary">
                {errors.fullname?.message}
              </Typography>
            </Grid>
            <Grid item sx={12} sm={6}>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Gender
                  </InputLabel>
                <NativeSelect
                  margin='dense'
                  required
                  defaultValue={'empty'}
                  inputProps={{
                    name: 'gender',
                    id: 'uncontrolled-native',
                  }}
                  // {...register('gender')}
                  // error={errors.gender ? true : false}
                >
                  <option value={'empty'}></option>
                  <option value={'male'}>Male</option>
                  <option value={'female'}>Female</option>
                </NativeSelect>
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="username"
                name="username"
                label="Username"
                fullWidth
                margin="dense"
                {...register('username')}
                error={errors.username ? true : false}
              />
              <Typography variant="inherit" color="textSecondary">
                {errors.username?.message}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="email"
                name="email"
                label="Email"
                fullWidth
                margin="dense"
                {...register('email')}
                error={errors.email ? true : false}
              />
              <Typography variant="inherit" color="textSecondary">
                {errors.email?.message}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="password"
                name="password"
                label="Password"
                type="password"
                fullWidth
                margin="dense"
                {...register('password')}
                error={errors.password ? true : false}
              />
              <Typography variant="inherit" color="textSecondary">
                {errors.password?.message}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="confirmPassword"
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                fullWidth
                margin="dense"
                {...register('confirmPassword')}
                error={errors.confirmPassword ? true : false}
              />
              <Typography variant="inherit" color="textSecondary">
                {errors.confirmPassword?.message}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Controller
                    control={control}
                    name="acceptTerms"
                    defaultValue="false"
                    inputRef={register()}
                    render={({ field: { onChange } }) => (
                      <Checkbox
                        color="primary"
                        onChange={e => onChange(e.target.checked)}
                      />
                    )}
                  />
                }
                label={
                  <Typography color={errors.acceptTerms ? 'error' : 'inherit'}>
                    I have read and agree to the Terms *
                  </Typography>
                }
              />
              <br />
              <Typography variant="inherit" color="textSecondary">
                {errors.acceptTerms
                  ? '(' + errors.acceptTerms.message + ')'
                  : ''}
              </Typography>
            </Grid>
          </Grid>
          <Box mt={3}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit(onSubmit)}
            >
              Register
            </Button>
          </Box>
        </Box>
      </Paper>
    </Fragment>
  )
}

export default Register;