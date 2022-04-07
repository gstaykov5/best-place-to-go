import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ScheduleSendIcon from '@mui/icons-material/ScheduleSend';
import RemoveIcon from '@mui/icons-material/Remove';

import validationWhereHaveYouBeenSchema from './validationWhereHaveYouBeenSchema';
import StaticDatePicker from './DatePicker';
import { useDispatch, useSelector } from 'react-redux';
import { place } from '../../../features/actions/actionPlace';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

function WhereHaveYouBeen() {
  const [imageField, setImageField] = useState([{image: ''}]);
  const [date, changeDate] = useState(new Date().toLocaleString());
  const [newPlace, setNewPlace] = useState({});
  const [area, setArea] = useState('');
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.registeLoginReducer);

  const { register, control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationWhereHaveYouBeenSchema)
  });

  const handleAddImageField = () => {
    setImageField([...imageField, {image: ''}]);
  };
  
  const handleRemoveImageField = (i) => {
    const list = [...imageField];
    list.splice(i, 1);
    setImageField(list);
  };
  
  const handleInputChange = (e, i)=> {
    const { name, value } = e.target;
    const list = [...imageField];
    list[i][name] = value;
    setImageField(list);
  };
  
  const onSubmit = data => {
    console.log(imageField)
    delete data.image;
    console.log('data',data)
    setNewPlace({ ...data, date: date, area: area, images: imageField, authorID: user.id });
    dispatch(place(newPlace));
    console.log('new place:',newPlace);
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
            </TextField>
              <Typography variant="inherit" color="textSecondary">{errors.country?.message}</Typography>
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
            </TextField>
              <Typography variant="inherit" color="textSecondary">{errors.city?.message}</Typography>
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
              onChange={e => {setArea(e.target.value)}}
              >
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
            </TextField>
              <Typography variant="inherit" color="textSecondary">{errors.description?.message}</Typography>
          </Grid>

          <Grid item xs={12} lg={12}>
            <StaticDatePicker />
          </Grid>

          <Grid item xs={12} lg={12} mb={10}>
            {imageField.map((img, i) => {
              return (
                <Box key={i}>
                  <TextField
                    required                    
                    sx={{marginBottom: 5}}
                    variant="standard"
                    id='image'
                    name='image'
                    label='Image'
                    value={img.image}
                    fullWidth
                    // value={img.image}
                    {...register('image')}
                    error={errors.image ? true : false}
                    onChange={e => handleInputChange(e, i)}
                    >
                  </TextField>
                  <Box >
                    {imageField.length !== 1 &&
                    <Button color='error' variant='contained' onClick={() => handleRemoveImageField(i)}>
                      Remove <RemoveIcon />
                    </Button>}
                    {imageField.length - 1 === i && 
                      <Button color='primary' variant='contained' onClick={handleAddImageField}>
                      Add new image field<AddIcon/>
                    </Button>}
                  </Box>
                </Box>
            )})}
              <Typography variant="inherit" color="textSecondary">{errors.image?.message}</Typography>
            
              <Button color='warning' variant='contained' onClick={handleSubmit(onSubmit)}>
                Submit your new place<ScheduleSendIcon />
              </Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  )
}

export default WhereHaveYouBeen;