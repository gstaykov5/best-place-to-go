import * as React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { makeStyles } from '@mui/styles';

import SearchField from './SearchField';
import store from '../../features/store/store'
import ResponsiveButton from './ResponsiveButton';

const useStyles = makeStyles({
  appbar: {
    width: '99%',
    margin: 'auto',
    background: 'linear-gradient(45deg, #BA2B04 20%, #26F40A 90%)'
  },
});

const isLoggedInPages = ['Home', 'Meetup', 'BestPlaceToGo', 'WhereHaveYouBeen?', 'Favorite'];
const isNotLoggedInPages = ['Home', 'Register', 'Login'];
const settings = ['Profile', 'Account', 'Favorite', 'WhereHaveYouBeen?', 'Logout'];

const Navbar = () => {
  const classes = useStyles();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { isLoggedIn } = useSelector(state => state.registeLoginReducer);
  const { user } = useSelector(state => state.registeLoginReducer);
  console.log(user);
  console.log(store.getState())

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
          
          {/* <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            Best place to go
          </Typography> */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {isLoggedIn && isLoggedInPages.map((page) => (
              <Button
                key={page}
                // onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link to={`${page}`}>{page}</Link>
              </Button>))}
            {!isLoggedIn && isNotLoggedInPages.map((page) => (
              <Button
                key={page}
                // onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link to={`${page}`}>{page}</Link>
              </Button>
            ))}
          </Box>


          <SearchField />


          {isLoggedIn && <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={user.username} src="https://www.foodsafetynews.com/files/2021/03/map-Canada.jpg" />
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
                  <Typography textAlign="center"><Link to={`${setting}`}>{setting}</Link></Typography>
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