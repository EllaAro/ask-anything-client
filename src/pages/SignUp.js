import React, { useState } from 'react';
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
    marginTop: theme.spacing(8),
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
            error={!isFieldValueValid(signUpDetails[field])}
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
            error = {!isPasswordValid(signUpDetails.password, VALID_PASSWORD_LENGTH)}
            helperText = {helpTextPasswordMessage(signUpDetails.password, VALID_PASSWORD_LENGTH)}
            type='password'
            margin="normal"
            required
            fullWidth
            label='password'
            name='password'
            value={signUpDetails.password}
            autoFocus
            onChange={handleInputChange}
      />
  );

  const emailField = () => (
    <TextField
            error = {!isEmailValid(signUpDetails.email)}
            helperText = {helpTextEmailMessage(signUpDetails.email)}
            margin="normal"
            required
            fullWidth
            label='email'
            name='email'
            value={signUpDetails.email}
            autoFocus
            onChange={handleInputChange}
      />
  );

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
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
      </div>
      <Copyright />
    </Container>
  );
}

export default SignUp