const initialState = {
  firstName: "",
  lastName: "",
};

export default function privateSettingsReducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_USER_INFO":
      return action.userInfo;
    default:
      return state;
  }
}
