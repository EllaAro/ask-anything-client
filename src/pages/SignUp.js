import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../redux/signup';
import TextField from '@material-ui/core/TextField';
import SignForm from '../components/SignForm';
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

const SignUp = () => {
  
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
    <SignForm 
      title='Sign Up'
      buttonDisable={enableSignUpButton()}
      handleButtonClick={handleSignUpButton}
    >
      {inputFields()}
      {passwordField()}
      {emailField()}
    </SignForm>
  );
}

export default SignUp