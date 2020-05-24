import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../redux/actions/authActions";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import SignForm from "../components/SignForm";
import {
  helpTextEmailMessageForSignIn,
  isEmailValid,
  isPasswordEmpty,
} from "../utils/errorHandlers/inputErrorHandler";

const SignIn = () => {
  const initialInput = { email: "", password: "" };
  const [inputDetails, setInputDetails] = useState(initialInput);
  const { email, password } = inputDetails;
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputDetails((prevSignUpDetails) => {
      return {
        ...prevSignUpDetails,
        [name]: value,
      };
    });
  };

  const isInputValid = () => isEmailValid(email) && !isPasswordEmpty(password);

  const handleSignInButton = () => {
    if (isInputValid())
      dispatch(signIn({ password, email }))
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
  };

  return (
    <SignForm
      title="Sign In"
      buttonDisable={!isInputValid()}
      handleButtonClick={handleSignInButton}
    >
      <TextField
        error={email && !isEmailValid(email)}
        helperText={helpTextEmailMessageForSignIn(email)}
        margin="normal"
        required
        fullWidth
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
        value={email}
        onChange={handleInputChange}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        autoComplete="current-password"
        value={password}
        onChange={handleInputChange}
      />
      <Grid container>
        <Grid item>
          <Link href="./sign-up" variant="body2">
            {"Don't have an account? Sign Up"}
          </Link>
        </Grid>
      </Grid>
    </SignForm>
  );
};

export default SignIn;
