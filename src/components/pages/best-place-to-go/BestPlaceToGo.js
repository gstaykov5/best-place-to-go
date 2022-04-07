import React, { forwardRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import MuiAlert from '@mui/material/Alert';
import { Grid, IconButton, ImageList, ImageListItem, ImageListItemBar, Snackbar, Stack } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
// import { getAllPlaces } from '../../../features/actions/actionPlace';
// import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
// import {getPlaces} from '../../../features/actions/actionPlace'

import { update } from '../../../features/actions/actionAuth';

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const BestPlaceToGo = props => {
  const dispatch = useDispatch();
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [favorite, setFavorite] = useState([]);
  const { places }  = useSelector(state => state.placesReducer);
  const { message } = useSelector(state => state.messageReducer);
  const { user } = useSelector(state => state.registeLoginReducer);
  
  console.log(places);
  // dispatch(getAllPlaces());
  // setPlace(places);

  useEffect(() => {
    setOpenSnackBar(true);
  }, []);

  const handleFavorite = (id) => {
    setFavorite([...favorite, id]);
    console.log('id', id)
    console.log(favorite)
    dispatch(update(favorite));
  }
  
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackBar(false);
  };

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      marginTop={10}
      justify="center"
    >
      <ImageList sx={{ width: 1000 }}>
        {places.map((place) => (
          <ImageListItem key={place.id}>
            <img
              src={`${place.images[0].image}?w=248&fit=crop&auto=format`}
              // srcSet={`${places.images}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={place.country}
              loading="lazy"
            />

            <ImageListItemBar
              sx={{
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                  'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
              }}
              title={place.country}
              position="top"
              actionIcon={
                <IconButton
                  sx={{ color: 'pink' }}
                  // aria-label={`star ${item.title}`}
                >
                  <FavoriteBorderSharpIcon onClick={() => handleFavorite(place._id)} />
                  {/* <FavoriteSharpIcon /> */}
                </IconButton>
              }
              actionPosition="left"
            />

            <ImageListItemBar
              title={place.country}
              subtitle={place.id}
              actionIcon={
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label={`info about ${place.country}`}
                >
                  <Link to={`/details/${place._id}`}><InfoIcon /></Link>
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>

      <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar open={openSnackBar} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            {message}
          </Alert>
        </Snackbar>
      </Stack>
    </Grid>
  )
}

export default BestPlaceToGo;