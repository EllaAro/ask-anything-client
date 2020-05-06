import React, { useState , useEffect } from 'react';
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

  const USER_INFO = {
    'UserName': '',
    'firstName': '',
    'secondName': '',
    'Email': '',

  }

function PrivateSettings () {
    
    const [ disableEdit , setDisableEdit ] = useState(true);
    const [editButton, setEditButton] = useState('Edit');
    const [userInfo, setUserInfo] = useState(USER_INFO);

    
    const handleButtonClick = () => {
        if (disableEdit) {
            setDisableEdit(false);
            setEditButton('Done');
        }
        else {
            setDisableEdit(true);
            setEditButton('Edit'); 
        }
        
    }

    const classes = useStyles();
    const content = () => (
        <div>
            <h1>Private Settings</h1>
            <Avatar 
                alt="User Photo " 
                src="/static/images/avatar/1.jpg" 
                className={classes.large} 
            />
            <TextField
                name="UserName"
                label="Chosen User Name"
                defaultValue={userInfo.UserName}
                InputProps={ disableEdit ? {readOnly: true,} : {} }
            />
            <TextField
                label="Name"
                defaultValue="UserName"
                InputProps={ disableEdit ? {readOnly: true,} : {} }
            />
            <TextField
                label="Last Name"
                defaultValue="UserLastName"
                InputProps={ disableEdit ? {readOnly: true,} : {} }
            />
            <TextField
                label="Email"
                defaultValue="UserEmail"
                InputProps={ disableEdit ? {readOnly: true,} : {} }
            />
            <div>
                <Button 
                    variant="contained" 
                    color="primary"
                    size="medium"
                    className={classes.margin}
                    type="submit"
                    onClick={handleButtonClick}
                    >
                        {editButton}
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