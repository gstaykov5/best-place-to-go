import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Box, Button, Checkbox, FormControlLabel, Grid, Paper, TextField, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ScheduleSendIcon from '@mui/icons-material/ScheduleSend';
import RemoveIcon from '@mui/icons-material/Remove';
import styled from '@emotion/styled';

import validationWhereHaveYouBeenSchema from './validationWhereHaveYouBeenSchema';
import { ErrorRounded } from '@mui/icons-material';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

function WhereHaveYouBeen() {
  const [imageField, setImageField] = useState([{image: ''}]);

  const { register, control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationWhereHaveYouBeenSchema)
  });

  const handleAddImageField = () => {
    setImageField([...imageField, {image: ''}]);
  };

  const handleRemoveImageField = () => {
    const length = imageField.length - 1;
    length > 0 && setImageField(imageField.filter((img, i) => i !== length));
  };

  const handleInputChange = e => {
    console.log(e)
    const { name, value } = e.target;
    console.log(name)
    console.log(imageField.length)
    const i = imageField.length - 1;
    // const list = {image:};


    setImageField([...imageField, imageField[i].image = value]);
    console.log(imageField)
  };
  console.log(imageField)

  const onSubmit = data => {
    console.log(imageField)
    console.log(JSON.stringify(data, null, 2));
  }

  return (
    <Paper>
      <Box p={15}>
        <Grid container spacing={10} mb={20} mt={1} justify="center">
          <Grid item xs={12} lg={12}>
            <TextField
              required
              // sx={{boxShadow: 3}}
              variant="standard"
              id='country'
              name='country'
              label='Country'
              fullWidth
              margin='none'
              {...register('country')}
              error={errors.country ? true : false}
              >
              <Typography variant="inherit" color="textSecondary">{errors.country?.message}</Typography>
            </TextField>
          </Grid>

          <Grid item xs={12} lg={12}>
            <TextField
              required
              // sx={{boxShadow: 3}}
              variant="standard"
              id='city'
              name='city'
              label='City'
              fullWidth
              margin='none'
              {...register('city')}
              error={errors.country ? true : false}
              >
              <Typography variant="inherit" color="textSecondary">{errors.city?.message}</Typography>
            </TextField>
          </Grid>

          <Grid item xs={12} lg={12}>
            <TextField
              // required
              // sx={{boxShadow: 3}}
              variant="standard"
              id='area'
              name='area'
              label='Area'
              fullWidth
              margin='none'
              {...register('area')}
              error={errors.are ? true : false}
              >
              <Typography variant="inherit" color="textSecondary">{errors.area?.message}</Typography>
            </TextField>
          </Grid>

          <Grid item xs={12} lg={12}>
            <TextField
              required
              // sx={{boxShadow: 3}}
              variant="standard"
              id='description'
              name='description'
              label='Description'
              fullWidth
              margin='none'
              {...register('description')}
              error={errors.description ? true : false}
              >
              <Typography variant="inherit" color="textSecondary">{errors.description?.message}</Typography>
            </TextField>
          </Grid>

          <Grid item xs={12} lg={12} mb={10} onChange={handleInputChange}>
            {imageField.map((img, i) => {
              return (
              <TextField
                required
                key={i}
                sx={{marginBottom: 5}}
                variant="standard"
                id='image'
                name='image'
                label='Image'
                fullWidth
                // value={img.image}
                {...register('image')}
                error={errors.image ? true : false}
                >
              <Typography variant="inherit" color="textSecondary">{errors.image?.message}</Typography>
            </TextField>
            )})}
            
              <Button color='primary' variant='contained' onClick={handleAddImageField}>
                Add new image field<AddIcon/>
              </Button>
              <Button color='error' variant='contained' onClick={handleRemoveImageField}>
                Remove <RemoveIcon />
              </Button>
              <Button color='warning' variant='contained' onClick={handleSubmit(onSubmit)}>
                Submit your new place<ScheduleSendIcon />
              </Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  )
}

export default WhereHaveYouBeen