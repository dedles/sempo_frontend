import React, {useState} from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


import { makeStyles } from '@material-ui/core/styles';

export default function KeyCreate(){

    const [name, setName] = useState('');
    const [open, setOpen] = React.useState(false);
    const [emojiKey, setEmojiKey] = React.useState('');
    const [address, setAddress] = React.useState('');

    const handleClose = () => {
        setOpen(false);
    };

    const classes = useStyles();

    function handleSubmit(e){
      e.preventDefault();
      if(name.trim()){
        fetch('http://localhost:5000/create', {
            method: "POST",
            body: JSON.stringify({name: name.trim()}),
            headers: {
                "Content-Type": "application/json",        
            }
        })
        .then(response => response.json())
        .then(json => {
            console.log(json);
            setOpen(true);
            setEmojiKey(json.emoji_key);
            setAddress(json.address);
        })
        .catch((err) => {
            console.log('err: ', err);
        });
      }
    }
  
    return (
        <div className={classes.paper}>

            <Dialog
                open={open}
                onClose={handleClose}>
                <DialogTitle>
                    Hi {name}. Your account has been created.
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Here is your emoji key. It represents your private key. Please remember it!
                        <br/>
                        {emojiKey}
                        <br/>
                        wallet address: {address}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Got it!
                    </Button>
                </DialogActions>
            </Dialog>

            <Avatar className={classes.avatar}>
                <VpnKeyIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Create a private key 
            </Typography>
            <form className={classes.form} 
                onSubmit={handleSubmit}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    label="Enter your name to create an ethereum key"
                    name="name"
                    autoFocus/>

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary">
                    Submit
                </Button>
            </form>
        </div>
    )
}

const useStyles = makeStyles(theme => ({
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
  }));
  