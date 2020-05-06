const initialState = {
    userName: '',
    firstName: '',
    lastName: '',
    email: '',
}

const privateSettingsReducer = ( state = initialState , action ) => {
    console.log(action.type)
}

export default privateSettingsReducer