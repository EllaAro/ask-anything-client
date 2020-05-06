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
    header: {
        fontFamily: 'Sans-serif',
    },
    margin: {
        marginBottom: '2em',
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

function EditPrivateSettings () {
    
    const classes = useStyles();
    const content = () => (
        <div>
            <h1 className={classes.header}>Edit Private Settings</h1>
            <Avatar 
                alt="User Photo" 
                src="https://i.ytimg.com/vi/krGH1iByk8c/maxresdefault.jpg" 
                className={classes.large} 
            />
            <TextField
                name="UserName"
                label="Chosen User Name"
                defaultValue='chosenusername'
            />
            <TextField
                label="Name"
                defaultValue="UserName"
            />
            <TextField
                label="Last Name"
                defaultValue="UserLastName"
            />
            <TextField
                label="Email"
                defaultValue="UserEmail"
            />
            <div>
                <Button 
                    variant="contained" 
                    color="primary"
                    size="medium"
                    className={classes.margin}
                    type="submit"
                    >
                        Submit
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

export default EditPrivateSettings