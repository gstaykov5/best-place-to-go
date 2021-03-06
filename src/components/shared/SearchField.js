import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { alpha } from '@material-ui/core/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SEARCH_PLACE } from '../../features/actions/type';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
  
const SearchField = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [search, setSearch] = useState({});
  const { places }  = useSelector(state => state.placesReducer);
  

  const handleSearch = (e) => {
    const search = e.target.value;
    const searched = places.filter(place => {
      return place.country.toUpperCase().indexOf(search.toUpperCase()) >= 0;
    })
    dispatch({
      type: SEARCH_PLACE,
      payload: searched
    })
    console.log(searched)
    navigate('/Search')
  }

  return (
    <Search sx={{ marginRight: 2 }}>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search???"
        inputProps={{ 'aria-label': 'search' }}
        onChange={handleSearch}
      />
    </Search>
  )
}

Search.propTypes = {}

export default SearchField