import { signUpQuery } from '../graphql/signUpQueries';
const initialState = [];

export const createUser = ({ firstName, lastName, email, password }) => {
    
    return dispatch => {
        return fetch('http://localhost:8080/graphql',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: signUpQuery(firstName, lastName, password, email)
            })
            .then(res => res.json())
            .then(resData => {
                if ( resData.errors && resData.errors[0].status === 422 ) throw new Error ( `Validation has failed. Make sure the email address isn't used yet!` );
                if ( resData.errors ) throw new Error (`User creation has failed`);
                return dispatch({
                type: "CREATE_USER",
                createdUser: resData.data.createUser
                })
            });
    };
}

export default function signupReducer(state = initialState, action) {
    switch(action.type) {
        case "CREATE_USER":
            return [...state, action.createdUser._id]
        default:
            return state    
    }
}