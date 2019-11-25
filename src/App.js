import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  paper: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '50%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function App() {
  const classes = useStyles();

  const baseNo = 29;
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Sempo Frontend
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="md">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Sempo Fullstack Challenge
            </Typography>
            <Typography variant="body1" align="center" color="textSecondary" paragraph>
              Transactions on the Ethereum Blockchain are made by signing a message using a private key, which is 32-byte secret like that looks something like 0x7dcbb63dd31af85ea96d5e87541663bd3e8e8e4b2574964bfc8365f6b39e764a.
              <br/><br/>
              Unfortunately Private Keys are very difficult for humans to remember, especially for people with low levels of literacy.
              <br/><br/>
              This app will generate a private key on the backend and return it in a base {baseNo} string of emojis, for easier memorization.
            </Typography>
          </Container>
        </div>

        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <VpnKeyIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Create a private key 
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              label="Enter your name to create a key"
              name="name"
              autoFocus/>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}>
              Create Key
            </Button>
          </form>
        </div>
      </main>

      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Sempo
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Created by C. Taylor
        </Typography>
      </footer>

    </React.Fragment>
  );
}