export const signInQuery = ( password, email ) => JSON.stringify({
    query: 
    `{
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

