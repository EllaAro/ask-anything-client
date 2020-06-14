import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../redux/actions/authActions";
import TextField from "@material-ui/core/TextField";
import SignForm from "../components/SignForm";
import {
  initSignUpValues,
  VALID_PASSWORD_LENGTH,
} from "../utils/consts/signUpConsts";
import {
  errorSignUpPassword,
  isSignUpPasswordValid,
  signUpPasswordTextHelper,
  isEmailValid,
  helpTextEmailMessageForSignUp,
  isFieldValueValid,
  helpTextField,
  errorSignUpEmail,
  errorSignUpInputField,
} from "../utils/errorHandlers/inputErrorHandler";

const SignUp = () => {
  const [signUpDetails, setSignUpDetails] = useState(initSignUpValues);
  const { firstName, lastName, email, password } = signUpDetails;
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSignUpDetails((prevSignUpDetails) => {
      return {
        ...prevSignUpDetails,
        [name]: value,
      };
    });
  };

  const isInputValid = () =>
    isFieldValueValid(firstName) &&
    isFieldValueValid(lastName) &&
    isSignUpPasswordValid(password) &&
    isEmailValid(email);

  const enableSignUpButton = () => {
    return !isInputValid() || isLoading;
  };

  const handleSignUpButton = () => {
    if (isInputValid()) {
      dispatch(createUser({ firstName, lastName, email, password }));
    }
  };

  const inputFields = () => {
    return Object.keys(signUpDetails)
      .filter((field) => field !== "email" && field !== "password")
      .map((field) => (
        <TextField
          error={errorSignUpInputField(signUpDetails[field])}
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
      error={errorSignUpPassword(password)}
      helperText={signUpPasswordTextHelper(password)}
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
      error={errorSignUpEmail(email)}
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
