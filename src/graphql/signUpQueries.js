export const signUpQuery = ( firstName, lastName, password, email ) => JSON.stringify({
    query: 
    `mutation {
        createUser(userInput: {
            firstName:"${firstName}", 
            lastName:"${lastName}",
            password:"${password}",
            email:"${email}",
        }),
        {
            _id
        }
    }`
});