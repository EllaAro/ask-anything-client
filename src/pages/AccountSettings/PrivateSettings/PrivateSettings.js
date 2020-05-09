import React , { useState , useEffect } from 'react'; 
import {useSelector, useDispatch } from 'react-redux';
import { Paper } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '1em',
        border: 0,
        borderRadius: 3,
        margin: '0 auto',
        width: '70%',
        textAlign: 'center',
        flexWrap: 'wrap',
        marginBottom: '1em',
        '& .MuiTextField-root': {
            margin: theme.spacing(3),
            width: '35ch',
          }, 
    },
    margin: {
        marginBottom: '2em',
        '&:hover': {
            backgroundColor: '##ea80fc',
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

const PrivateSettings = () => {

    const [ title , setTitle ] = useState('Private Settings');
    const [buttonText , setButtonText ] = useState('Edit');
    const [ isEdit , setIsEdit ] = useState(false);
    const [ userInfo , setUserInfo ] = useState({});
    const initialUserInfo = useSelector(state => state.privateSettings);
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        setUserInfo(initialUserInfo);
    },[]);

    const handleEdit = () => {
        if(!isEdit) {
            setIsEdit(prevIsEdit => !prevIsEdit);
            setTitle('Edit Private Settings');
            setButtonText('Done');
        }
        else {
            //dispatch new info to store
            setIsEdit(prevIsEdit => !prevIsEdit);
            setTitle('Private Settings');
            setButtonText('Edit');
        }
        
    }

    const handleTextChange = (event) => {
       const {name , value } = event.target;
       setUserInfo(prevUserInfo => {   
           return {...prevUserInfo, [name]:[value]}
           })
    }
    
    const content = () => (
        <div>
            <br/>
            <Typography variant="h4">{title}</Typography>
            <Avatar 
                alt='User Photo' 
                src="https://i.ytimg.com/vi/krGH1iByk8c/maxresdefault.jpg" 
                className={classes.large} 
            />
            <TextField
                name='userName'
                label='User Name'
                onChange={handleTextChange}
                value={userInfo.userName}
                InputProps={ isEdit ? {} : {readOnly: true}}
            />
            <TextField
                name='firstName'
                label='First Name'
                onChange={handleTextChange}
                value={userInfo.firstName}
                InputProps={ isEdit ? {} : {readOnly: true}}
            />
            <TextField
                name='lastName'
                label='Last Name'
                onChange={handleTextChange}
                value={userInfo.lastName}
                InputProps={ isEdit ? {} : {readOnly: true}}
            />
            <TextField
                name='email'
                label='Email'
                onChange={handleTextChange}
                value={userInfo.email}
                InputProps={ isEdit ? {} : {readOnly: true}}
            />
            <div>
                <Button 
                    variant='contained' 
                    color='primary'
                    size='medium'
                    className={classes.margin}
                    type='submit'
                    onClick={handleEdit}
                    >
                        {buttonText}
                </Button>
            </div>
        </div>
    ) 

    return (
        <div className={classes.root}>
            <Paper
            elevation={4}
            children={content()}
            />
        </div>
    )
}

export default PrivateSettings