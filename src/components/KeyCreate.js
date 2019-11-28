import React, {useState, useEffect} from 'react';

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

export default function KeyCreate({emojiSubmit}){

    const [inputName, setInputName] = useState('');
    const [responseName, setResponseName] = useState('');
    
    const [inputEmoji, setInputEmoji] = React.useState('');
    const [responseEmoji, setResponseEmoji] = React.useState('');

    const [address, setAddress] = React.useState('');

    const [open, setOpen] = React.useState(false);

    
    const classes = useStyles();
    
    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        resetState()
    }, [emojiSubmit]);

    function handleSubmit(e){
      e.preventDefault();
      if(inputName.trim() || inputEmoji.trim() ){
        
        const data = {};
        if(emojiSubmit){
            data.emoji_key = inputEmoji.trim()
        }else{
            data.name = inputName.trim()
        }

        fetch(`http://localhost:5000/${ emojiSubmit ? 'getname' : 'create'}`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",        
            }
        })
        .then(response => response.json())
        .then(json => {

            if(emojiSubmit){
                onEmojiSubmit(json)
            }else{
                onNameSubmit(json)
            }
        })
        .catch((err) => {
            console.log('err: ', err);
        });
      }
    }

    function resetState(){
        setOpen(false);
        setResponseEmoji('');
        setAddress('');
        setResponseName('');
        setInputEmoji('');
        setInputName('');
    }

    function onNameSubmit(response){
        console.log("response: ", response);
        setOpen(true);
        setResponseEmoji(response.emoji_key);
        setAddress(response.address);
    }

    function onEmojiSubmit(response){
        setOpen(true)
        setResponseName(response.name)
    }
  
    return (
        <div className={classes.paper}>
            <Dialog
                open={open}
                onClose={handleClose}>
                <DialogTitle>
                    {emojiSubmit ? `Thanks for your submission` : `Hi ${inputName}. Your account has been created.`}
                </DialogTitle>
                <DialogContent>
                    {emojiSubmit ? (
                        <DialogContentText>
                            Your private key is securely stored in our system. 
                            <br/>
                            The name associated with your account is: <strong>{responseName}</strong>
                        </DialogContentText>
                    ) : (
                        <DialogContentText>
                            Here is your emoji key. It represents your private key. Please remember it!
                            <br/><br/>
                            {responseEmoji}
                            <br/><br/>
                            wallet address: {address}
                        </DialogContentText>
                    )}
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
                {emojiSubmit ? "Submit your emoji key" : "Create a private key"}
            </Typography>
            <form className={classes.form} 
                onSubmit={handleSubmit}>
    
                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    value={emojiSubmit ? inputEmoji : inputName}
                    onChange={(e) =>  emojiSubmit ? setInputEmoji(e.target.value) : setInputName(e.target.value)}
                    label={ emojiSubmit ? "Enter your emoji string to retrieve your name" : "Enter your name to create an ethereum key"}
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
  