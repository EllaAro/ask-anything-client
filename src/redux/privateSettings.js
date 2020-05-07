const initialState = {
    userName: 'initUserName',
    firstName: 'initFirstName',
    lastName: 'initLastName',
    email: 'initEmail',
}

const updateUserInfo = (userInfo) => {
    return {
        type: "UPDATE_USER_INFO",
        userInfo: userInfo
    }
}

export default function privateSettingsReducer(state = initialState, action) {
    switch(action.type) {
        case "UPDATE_USER_INFO":
            return action.userInfo
        default:
            return state    
    }
}