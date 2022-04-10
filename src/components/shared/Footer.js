import React from 'react'
import { AppBar, Container, makeStyles, Toolbar, Typography } from '@material-ui/core'

const useStyles = makeStyles({
    footer: {
        width: '100%',
        position: 'fixed',
        height: '50px',
        bottom: '0px',
        left: '0px',
        right: '0px',
        marginBottom: '0px',
        backgroundColor: '#1e5679'
    }
})

function Footer() {
  const classes = useStyles();

  return (
    <AppBar className={classes.footer} position= "static">
          <Container maxWidth="md">
            <Toolbar>
              <Typography variant="body1" color="inherit">
                &copy; Best place to go &copy;
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
  )
}

export default Footer