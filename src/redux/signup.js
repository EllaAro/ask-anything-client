const initialState = [];

export const createUser = ({ firstName, lastName, email, password }) => {
    const graphqlQuery = {
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
    };
    return dispatch => {
        return fetch('http://localhost:8080/graphql',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(graphqlQuery)
            })
            .then(res => res.json())
            .then(resData => {
                if ( resData.errors && resData.errors[0].status === 422 ) throw new Error ( `Validation has failed. Make sure the email address isn't used yet!` );
                if ( resData.errors ) throw new Error (`User creation has failed`);
                
                return dispatch({
                type: "CREATE_USER",
                createdUser: resData.data.createPost
                })
            });
    };
}

export default function signupReducer(state = initialState, action) {
    switch(action.type) {
        case "CREATE_USER":
            return []
        default:
            return state    
    }
}