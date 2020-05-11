import React , { useState , useEffect } from 'react'; 
import {useSelector, useDispatch } from 'react-redux';
import { Paper } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import PostButton from '../components/PostButton';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '1em',
        border: 0,
        borderRadius: 3,
        margin: '0 auto',
        textAlign: 'center',
        flexWrap: 'wrap',
        marginBottom: '1em',
        '& .MuiTextField-root': {
            margin: theme.spacing(3),
            width: '35ch',
          }, 
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

    return (
        <Paper
            className={classes.root}
            elevation={4}
        >
            <Container>
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
                <PostButton buttonName={buttonText} handleSubmit={handleEdit}/>
             </Container>       
        </Paper>
    )
}

export default PrivateSettings