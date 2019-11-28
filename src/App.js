import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

import Switch from '@material-ui/core/Switch';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


import KeyCreate from './components/KeyCreate';

import { makeStyles } from '@material-ui/core/styles';

const baseNo = 29;

export default function App() {
  const classes = useStyles();
  const [check, setCheck] = React.useState(false);


  const handleChange =  event => {
    setCheck(event.target.checked);
  };

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
              Transactions on the Ethereum Blockchain are made by signing a message using a private key.
              <br/><br/>
              Unfortunately Private Keys are very difficult for humans to remember, especially for people with low levels of literacy.
              <br/><br/>
              This app will generate a private key on the backend and return it in a base {baseNo} string of emojis, for easier memorization.
            </Typography>
            <br/>
            <Grid component="label" container justify="center" alignItems="center" spacing={1}>
              <Grid item>
                Create Private Key
              </Grid>
              <Grid item>
                <Switch
                  checked={check}
                  onChange={handleChange}
                  value={check}
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                  />
              </Grid>
              <Grid item>
                Submit Emoji Key
              </Grid>
            </Grid>
          </Container>
        </div>
        <KeyCreate />
      
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

const useStyles = makeStyles(theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 1),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));
