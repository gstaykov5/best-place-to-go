import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useSelector } from 'react-redux';

const isLoggedInPages = ['Home', 'Meetup', 'BestPlaceToGo', 'WhereHaveYouBeen?', 'Favorite'];
const isNotLoggedInPages = ['Home', 'Register', 'Login'];

const ResponsiveButton = props => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const { isLoggedIn } = useSelector(state => state.registeLoginReducer);


  const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };

  return (
      <div>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left', }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'left', }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' }, }}
            >
              {isLoggedIn && isLoggedInPages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"><Link to={`${page}`}>{page}</Link></Typography>
                </MenuItem>
              ))}
              {!isLoggedIn && isNotLoggedInPages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"><Link to={`${page}`}>{page}</Link></Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
      </div>
  )
}


export default ResponsiveButton;