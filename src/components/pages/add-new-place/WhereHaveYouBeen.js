import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';

import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ScheduleSendIcon from '@mui/icons-material/ScheduleSend';
import RemoveIcon from '@mui/icons-material/Remove';
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

import validationWhereHaveYouBeenSchema from './validationWhereHaveYouBeenSchema';
import { useDispatch, useSelector } from 'react-redux';
import { postNewPlace } from '../../../features/actions/actionPlace';
import { SET_LOCATION } from '../../../features/actions/type';

function LocationMarker() {
  const [position, setPosition] = useState([]);
  const dispatch = useDispatch();
  useMapEvents({
    click(e) {
      setPosition([e.latlng.lat, e.latlng.lng])
      dispatch({
        type: SET_LOCATION,
        payload: position
      })
      console.log(position)
    },
    locationfound(e) {
      
    },
  })


  return position.length > 0 && (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  )
}

const WhereHaveYouBeen = ({ action }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [imageField, setImageField] = useState([{image: ''}]);
  const [date, changeDate] = useState(new Date().toLocaleString());
  const [area, setArea] = useState('');
  const [location, setLocation] = useState([]);

  const { user } = useSelector(state => state.registeLoginReducer);
  const { position } = useSelector(state => state.mapLocationReducer);

  useEffect(() => {
    setLocation(position);
  }, [])

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
    delete data.image;
    data.date = date;
    data.area = area;
    data.images = imageField;
    data.authorId = user.id;
    data.location = position ? position : ['8.624472107633936', '-83.4280627865926'];
    dispatch(postNewPlace(data));
    navigate('/BestPlaceToGo', {replace: true});
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

            <Grid item xs={12} lg={4}>
              <MuiPickersUtilsProvider utils={DateFnsUtils} >
                <DatePicker
                  autoOk
                  orientation="landscape"
                  variant="static"
                  openTo="date"
                  value={date}
                  onChange={changeDate}
                  />
              </MuiPickersUtilsProvider>
            </Grid>

            <Grid item xs={12} lg={8}>
              <MapContainer center={[43.777702, -79.233238]} zoom={10} style={{width: '100%', height: '50vh'}}>
                <TileLayer
                
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                <LocationMarker />
              </MapContainer>
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