import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Button, Grid, TextField } from '@material-ui/core';
import { Box, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ScheduleSendIcon from '@mui/icons-material/ScheduleSend';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import { SET_LOCATION } from '../../../features/actions/type';
import { updatePlace } from '../../../features/actions/actionPlace';

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

function Edit() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [date, changeDate] = useState(new Date().toLocaleString());
    const [imageField, setImageField] = useState({images: [{image: ''}]});
    const [placeForEdit, setPlaceForEdit] = useState({});
    const [editedData, setEditedData] = useState({});
    const [location, setLocation] = useState([]);
    const { places } = useSelector(state => state.placesReducer);
    const { position } = useSelector(state => state.mapLocationReducer);

    useEffect(() => {
        const place = places?.filter(pl => (pl._id === id));
        const images = place[0].images.map(img => ({image: img.image}));
        setImageField({images: images})
        setLocation(position);
        setPlaceForEdit(place[0]);
    }, [id])
    console.log(placeForEdit)
    console.log(imageField)

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
    
    const handleEdit = name => e => {
        setEditedData({...editedData, [name]: e.target.value})
        console.log(editedData)
    }
    
    const handleSubmit = (e) => {
      setEditedData({...editedData, images: imageField});
      setEditedData({...editedData, date: date });
      dispatch(updatePlace(id, editedData))
    }

  return (
    <Box>
      <Grid container >
        <Grid item lg={4} style={{marginRight: '20px', marginBottom: '10px'}}>
          <TextField
            required
            variant="standard"
            id='country'
            name='country'
            label='Country'
            fullWidth
            margin='none'
            placeholder={placeForEdit.country}
            onChange={handleEdit('country')}
            focused
            >
          </TextField>
        </Grid>
        <Grid item lg={4} style={{marginLeft: '20px', marginBottom: '10px'}}>
          <TextField
            required
            variant="standard"
            id='city'
            name='city'
            label='City'
            fullWidth
            margin='none'
            placeholder={placeForEdit.city}
            onChange={handleEdit('city')}
            focused
            >
          </TextField>
        </Grid>
        <Grid item lg={4} style={{marginLeft: '20px', marginBottom: '10px'}}>
          <TextField
            required
            variant="standard"
            id='area'
            name='area'
            label='Area'
            fullWidth
            margin='none'
            placeholder={placeForEdit.area}
            onChange={handleEdit('area')}
            focused
            >
          </TextField>
        </Grid>
        <Grid item lg={4} style={{marginLeft: '20px', marginBottom: '10px'}}>
          <TextField
            required
            variant="standard"
            id='description'
            name='description'
            label='Description'
            fullWidth
            margin='none'
            defaultValue={placeForEdit.description}
            onChange={handleEdit('description')}
            focused
            >
          </TextField>
        </Grid>
      </Grid>

          
      <Grid item lg={6} >
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
      
      <Grid item xs={12} lg={12} mb={10}>
        {imageField.images?.map((img, i) => {
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
                  onChange={e => handleInputChange(e, i)}
                  >
                </TextField>
              <Box >
                {imageField.length !== 1 &&
                <Button color='secondary' variant='contained' onClick={() => handleRemoveImageField(i)}>
                  Remove <RemoveIcon />
                </Button>}
                {imageField.length - 1 === i && 
                  <Button color='primary' variant='contained' onClick={handleAddImageField}>
                  Add new image field<AddIcon/>
                </Button>}
              </Box>
            </Box>
        )})}
        
          <Button color='primary' variant='contained' onClick={handleSubmit}>
           Edit data<ScheduleSendIcon />
          </Button>
        </Grid>
    </Box>
  )
}

export default Edit