import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Grid, IconButton, ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';

import { update } from '../../../features/actions/actionAuth';

const Favorite = () => {
  const dispatch = useDispatch();
  const { places }  = useSelector(state => state.placesReducer);
  const { user } = useSelector(state => state.registeLoginReducer);
  const [favorites, setFavorites] = useState();

  useEffect(() => {
    const favoritePlaces = user.favorites.map(favorite => {
      return places.filter(place => {
        console.log(place._id === favorite)
        return place._id === favorite;
      })
    }).flat()
    setFavorites(favoritePlaces)
  }, [])

  const handleFavorite = placeId => {
    user.favorites.includes(placeId)
      ? dispatch(update(user.id, placeId, true, 'pull'))
      : dispatch(update(user.id, placeId, true, 'push'))
  }

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
        {favorites && favorites?.map((place) => (
          <ImageListItem key={place._id}>
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
                  onClick={() => handleFavorite(place._id)} 
                  // aria-label={`star ${item.title}`}
                >
                  {!user.favorites.includes(place._id) ? <FavoriteBorderSharpIcon /> :
                  <FavoriteRoundedIcon />}
                </IconButton>
              }
              actionPosition="left"
            />

            <ImageListItemBar
              title={place.city}
              subtitle={place.id}
              actionIcon={
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label={`info about ${place.country}`}
                  // onClick={() => handleComments(place._id)}
                >
                  <Link to={`/Favorite/details/${place._id}`}><InfoIcon /></Link>
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Grid>
  )
}

export default Favorite