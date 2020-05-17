import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../redux/signup';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Copyright from '../components/Copyright';
import { initSignUpValues,
         VALID_PASSWORD_LENGTH,
        } from '../utils/consts/signUpConsts';
import { isPasswordValid,
         helpTextPasswordMessage,
         isEmailValid,
         helpTextEmailMessage,
         isFieldValueValid,
         helpTextField,
       } from '../utils/errorHandler';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(7),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignUp = () => {
  
  const classes = useStyles();
  const [ signUpDetails, setSignUpDetails ] = useState(initSignUpValues);
  const [ isEmailTaken, setIsEmailTaken ] = useState(false);
  const { firstName, lastName, email, password } = signUpDetails;
  const dispatch = useDispatch();


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSignUpDetails(prevSignUpDetails => {
      return {
        ...prevSignUpDetails,
        [name] : value
      }
    })
  }

  const inputFields = () => {
    return Object.keys(signUpDetails).filter(field => field!=='email' && field!=='password').map(field => (
      <TextField
            error={signUpDetails[field] && !isFieldValueValid(signUpDetails[field])}
            helperText={helpTextField(signUpDetails[field])}
            margin="normal"
            required
            fullWidth
            label={field}
            name={field}
            value={signUpDetails.field}
            autoFocus
            onChange={handleInputChange}
      />
    ))
  }
  
  const passwordField = () => (
    <TextField
            error = {password && !isPasswordValid(password, VALID_PASSWORD_LENGTH)}
            helperText = {helpTextPasswordMessage(password, VALID_PASSWORD_LENGTH)}
            type='password'
            margin="normal"
            required
            fullWidth
            label='password'
            name='password'
            value={password}
            autoFocus
            onChange={handleInputChange}
      />
  );

  const emailField = () => (
    <TextField
            error = {(email && !isEmailValid(email)) || isEmailTaken }
            helperText = {helpTextEmailMessage(email, isEmailTaken)}
            margin="normal"
            required
            fullWidth
            label='email'
            name='email'
            value={email}
            autoFocus
            onChange={handleInputChange}
      />
  );

  const isInputValid = () => (isFieldValueValid(firstName) && 
                              isFieldValueValid(lastName) &&
                              isPasswordValid(password, VALID_PASSWORD_LENGTH) &&
                              isEmailValid(email));

  const enableSignUpButton = () => !isInputValid();

  const handleSignUpButton = () => {
    if (isInputValid()){
      dispatch(createUser({ firstName, lastName, email, password }))
      .then(res => 
        setIsEmailTaken(false))
      .catch(err => 
        setIsEmailTaken(true)
        );
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <CreateOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
          {inputFields()}
          {passwordField()}
          {emailField()}
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={enableSignUpButton()}
            onClick={handleSignUpButton}
          >
            Sign Up
          </Button>
      </div>
      <Copyright />
    </Container>
  );
}

export default SignUp