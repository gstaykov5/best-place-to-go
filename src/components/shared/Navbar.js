import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { makeStyles } from '@mui/styles';

import SearchField from './SearchField';
import store from '../../features/store/store'
import ResponsiveButton from './ResponsiveButton';
import { getAllPlaces } from '../../features/actions/actionPlace';

const useStyles = makeStyles({
  appbar: {
    width: '99%',
    margin: 'auto',
    background: 'linear-gradient(45deg, #63c967 25%, #03185a 90%)'
  },
});

const isLoggedInPages = ['Home', 'Meetup', 'BestPlaceToGo', 'WhereHaveYouBeen?', 'Favorite'];
const isNotLoggedInPages = ['Home', 'Register', 'Login'];
const settings = ['Account', 'Favorite', 'WhereHaveYouBeen?', 'ControlUsers', 'Logout'];

const Navbar = () => {
  const classes = useStyles();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { isLoggedIn } = useSelector(state => state.registeLoginReducer);
  const { user } = useSelector(state => state.registeLoginReducer);
  console.log(user);
  console.log(store.getState());

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" className={classes.appbar}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters>


          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            Best place to go
          </Typography>

          <ResponsiveButton />
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {isLoggedIn && isLoggedInPages.map((page) => (
              
              <NavLink to={`${page}`} style={{ textDecoration: 'none' }} key={page}>
                <Button                
                  // onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block',}}
                  variant='contained'
                  color='info'
                >
                  {page}
                </Button>
              </NavLink>
              ))}

            {!isLoggedIn && isNotLoggedInPages.map((page) => (
              <NavLink to={`${page}`} style={{ textDecoration: 'none'}} key={page}>
                <Button
                  
                  // onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'black', display: 'block' }}
                >
                  {page}
                </Button>
              </NavLink>
            ))}
          </Box>


          <SearchField />


          {isLoggedIn && <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={user.username} src={user.avatar} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{ vertical: 'top', horizontal: 'right', }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'right', }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <NavLink to={`${setting}`} style={{ textDecoration: 'none'}} key={setting}>
                    <Button sx={{ my: 1, color: '#BA2B04', display: 'block' }}>
                      {setting}
                    </Button>
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;