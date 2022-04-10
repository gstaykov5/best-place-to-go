import React, {useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Box, Button, Grid, TextField, Typography } from '@material-ui/core'

import validationChangeIfoSchema from '../validationRegistrationSchema';
import { update } from '../../../../features/actions/actionAuth';

const PersonalInfo = () => {
    const dispatch = useDispatch();
    const [putData, setPutData] = useState({});
    const [ lastModifieDate, setLastModifieDate] = useState(new Date().toDateString());
    const { user } = useSelector(state => state.registeLoginReducer);

    const { register, control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationChangeIfoSchema)
    });

    const handleChanges = name => e => {
        const value = e.target.value;
        setPutData({...putData, [name]: value});
    }

    const onSubmit = data => {
        setPutData({...putData, lastModifieDate})
        console.log(putData)
        dispatch(update(user.id, putData));
    };

  return (
    <Fragment>
    <Grid item lg={6} xs={12} md={6}>
        <Grid item lg={12} style={{ marginBottom: "50px" }}>
            <Typography variant="h4" color="error" style={{ margin: '12px', paddingBottom: '10px',  borderBottom: '1px solid #26F40A' }}>
                Personal info
            </Typography>
        </Grid>

            <Typography variant="h6" color="primary">Change username</Typography>
        <Grid item lg={12} style={{ marginBottom: '50px' }}>
            <TextField 
                label="Username"
                variant="standard"
                color='primary'
                style={{width: '75%'}}
                {...register('username')}
                error={errors.username ? true : false}
                onChange={handleChanges('username')}
                />
            <Grid item style={{ marginBottom: "20px" }}>
                <Typography variant="body1" color="textSecondary">
                    {errors.username?.message}
                </Typography>
            </Grid>
        </Grid>

            <Typography variant="h6" color="primary">Country</Typography>
        <Grid item lg={12} style={{ marginBottom: '10px' }}>
            <TextField
                helperText='e.g. Canada'
                label="Country"
                variant="standard"
                color='primary'
                onChange={handleChanges('country')}
                style={{width: '75%', marginBottom: '40px' }}
                />
        </Grid>

            <Typography variant="h6" color="primary">City</Typography>
        <Grid item lg={12} style={{ marginBottom: '10px' }}>
            <TextField
                helperText='e.g. Toronto'
                label="City"
                variant="standard"
                color='primary'
                style={{width: '75%', marginBottom: '40px' }}
                onChange={handleChanges('city')}
                />
        </Grid>

            <Typography variant="h6" color="primary">Change email</Typography>
        <Grid item lg={12} style={{ marginBottom: '10px' }}>
            <TextField
                helperText='e.g. example@example.com'
                label="Email"
                variant="standard"
                color='primary'
                style={{width: '75%'}}
                {...register('email')}
                error={errors.email ? true : false}
                onChange={handleChanges('email')}
                />
            <Grid item style={{ marginBottom: "20px" }}>
                <Typography variant="body1" color="textSecondary">
                    {errors.email?.message}
                </Typography>
            </Grid>
        </Grid>

            <Typography variant="h6" color="primary">Change avatar</Typography>
        <Grid item lg={12} style={{ marginBottom: '20px' }}>
            <TextField
                helperText='copy/paste image URL'
                label="Avatar"
                variant="standard"
                color='primary'
                style={{width: '75%', marginBottom: '20px' }}
                onChange={handleChanges('avatar')}
                />
        </Grid>

            <Typography variant="h6" color="primary">Change password</Typography>
        <Grid item lg={12}>
            <TextField
                label="Old password"
                variant="standard"
                color='primary'
                style={{width: '75%', marginBottom: '10px' }}
                />
            <TextField 
                label="New password"
                variant="standard"
                color='primary'
                style={{width: '75%', marginBottom: '10px' }}
                {...register('password')}
                error={errors.password ? true : false}
                onChange={handleChanges('password')}
                />
            <Grid item style={{ marginBottom: "20px" }}>
                <Typography variant="body1" color="textSecondary">
                    {errors.password?.message}
                </Typography>
            </Grid>
            <TextField 
                label="Confirm new password"
                variant="standard"
                color='primary'
                style={{width: '75%', marginBottom: '10px' }}
                {...register('confirmPassword')}
                error={errors.confirmPassword ? true : false}
                onChange={handleChanges('confirmPassword')}
                />
            <Grid item>
                <Typography variant="body1" color="textSecondary">
                    {errors.confirmPassword?.message}
                </Typography>
            </Grid>
        </Grid>

        <Box mt={3}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit(onSubmit)}
              >
              Edit
            </Button>
          </Box>
    </Grid>
</Fragment>
  )
}

export default PersonalInfo;