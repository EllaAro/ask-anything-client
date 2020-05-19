import { expiryDate,
         initialState,
       } from '../utils/consts/signInConsts';

import { signInQuery } from '../graphql/signInQueries';

const setLocalStorageAuto = ( token, userId, expiryDate ) => {
    localStorage.setItem('token', token);
    localStorage.setItem('userId', userId);
    localStorage.setItem('expiryDate', expiryDate);
}

export const signIn = ({ password, email }) => {

    return dispatch => {
        return fetch('http://localhost:8080/graphql',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: signInQuery(password, email)
            })
            .then(res => res.json())
            .then(resData => {
                if ( resData.errors && resData.errors[0].status === 422 ) throw new Error ( `Validation has failed. Make sure that you've entered the right details!` );
                if ( resData.errors ) throw new Error (`User validation has failed.`);
                
                setLocalStorageAuto( resData.data.signIn.token, resData.data.signIn.userId, expiryDate );

                return dispatch({
                type: "SIGN_IN",
                signedInUser: resData.data.signIn
                })
            });
    };
    
}

export default function signinReducer(state= initialState, action) {
    switch(action.type) {
        case 'SIGN_IN':
            return {
                userId: action.signedInUser.userId,
                token: action.signedInUser.token,
                isAuth: true,
            }
        default:
            return state
    };
};