import React from 'react';
import { Paper } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        border: 0,
        borderRadius: 3,
        margin: '0 auto',
        width: '70%',
        textAlign: 'center',
        flexWrap: 'wrap',
        marginBottom: '1em',
        '& .MuiTextField-root': {
            margin: theme.spacing(4),
            width: '35ch',
          }, 
    },
    margin: {
        margin: theme.spacing(1),
        background : '#9b5de5',
        '&:hover': {
            backgroundColor: '#c77dff',
            color: '#FFF'
        }
    },
    large: {
        margin: '0 auto',
        marginTop: '1em',
        width: theme.spacing(25),
        height: theme.spacing(23),
    },

  }));

function PrivateSettings () {
    
    const classes = useStyles();
    const content = () => (
        <div>
            <h1>Private Settings</h1>
            <Avatar 
                alt="Remy Sharp" 
                src="/static/images/avatar/1.jpg" 
                className={classes.large} 
            />
            <TextField
                id="standard-read-only-input"
                label="Chosen IGN Name"
                defaultValue="ChosenIGNName"
                InputProps={{
                    readOnly: true,
                }}
            />
            <TextField
            id="standard-read-only-input"
            label="Name"
            defaultValue="UserName"
            InputProps={{
                readOnly: true,
            }}
            />
            <TextField
            id="standard-read-only-input"
            label="Last Name"
            defaultValue="UserLastName"
            InputProps={{
                readOnly: true,
            }}
            />
            <TextField
            id="standard-read-only-input"
            label="Email"
            defaultValue="UserEmail"
            InputProps={{
                readOnly: true,
            }}
            />
            <div>
                <Button 
                    variant="contained" 
                    color="primary"
                    size="medium"
                    className={classes.margin}
                    >
                        Edit
                </Button>
            </div>
        </div>
    ) 

    return (
        <div className={classes.root}>
            <Paper
            elevation={3}
            children={content()}
            />
        </div>
    )
}

export default PrivateSettings