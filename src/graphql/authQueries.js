export const signInQuery = (password, email) =>
  JSON.stringify({
    query: `query {
        signIn(signinInput: {
            email: "${email}",
            password: "${password}",
        }),
        {
            userId,
            token,
        }
    }`,
  });

export const signUpQuery = (firstName, lastName, password, email) =>
  JSON.stringify({
    query: `mutation {
        createUser(userInput: {
            firstName:"${firstName}", 
            lastName:"${lastName}",
            password:"${password}",
            email:"${email}",
        }),
        {
            _id
        }
    }`,
  });
