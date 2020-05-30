import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createUser } from "../redux/actions/authActions";
import TextField from "@material-ui/core/TextField";
import SignForm from "../components/SignForm";
import {
  initSignUpValues,
  VALID_PASSWORD_LENGTH,
} from "../utils/consts/signUpConsts";
import {
  isPasswordValid,
  helpTextPasswordMessage,
  isEmailValid,
  helpTextEmailMessageForSignUp,
  isFieldValueValid,
  helpTextField,
} from "../utils/errorHandlers/inputErrorHandler";

const SignUp = () => {
  const [signUpDetails, setSignUpDetails] = useState(initSignUpValues);
  const { firstName, lastName, email, password } = signUpDetails;
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);
  const history = useHistory();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSignUpDetails((prevSignUpDetails) => {
      return {
        ...prevSignUpDetails,
        [name]: value,
      };
    });
  };

  const inputFields = () => {
    return Object.keys(signUpDetails)
      .filter((field) => field !== "email" && field !== "password")
      .map((field) => (
        <TextField
          error={
            signUpDetails[field] && !isFieldValueValid(signUpDetails[field])
          }
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
      ));
  };

  const passwordField = () => (
    <TextField
      error={password && !isPasswordValid(password, VALID_PASSWORD_LENGTH)}
      helperText={helpTextPasswordMessage(password, VALID_PASSWORD_LENGTH)}
      type="password"
      margin="normal"
      required
      fullWidth
      label="password"
      name="password"
      value={password}
      autoFocus
      onChange={handleInputChange}
    />
  );

  const emailField = () => (
    <TextField
      error={email && !isEmailValid(email)}
      helperText={helpTextEmailMessageForSignUp(email)}
      margin="normal"
      required
      fullWidth
      label="email"
      name="email"
      value={email}
      autoFocus
      onChange={handleInputChange}
    />
  );

  const isInputValid = () =>
    isFieldValueValid(firstName) &&
    isFieldValueValid(lastName) &&
    isPasswordValid(password, VALID_PASSWORD_LENGTH) &&
    isEmailValid(email);

  const enableSignUpButton = () => {
    console.log(isLoading);
    return !isInputValid() || isLoading;
  };

  const handleSignUpButton = () => {
    if (isInputValid()) {
      dispatch(createUser({ firstName, lastName, email, password }));
    }
  };

  return (
    <SignForm
      title="Sign Up"
      buttonDisable={enableSignUpButton()}
      handleButtonClick={handleSignUpButton}
    >
      {inputFields()}
      {passwordField()}
      {emailField()}
    </SignForm>
  );
};

export default SignUp;
