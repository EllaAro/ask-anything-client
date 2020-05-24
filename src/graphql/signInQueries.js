export const signInQuery = ( password, email ) => JSON.stringify({
    query: 
    `query {
        signIn(signinInput: {
            email: "${email}",
            password: "${password}",
        }),
        {
            userId,
            token,
        }
    }`
});

