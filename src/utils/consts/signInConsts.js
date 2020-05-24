const remainingMilliseconds = 60 * 60 * 1000;
export const expiryDate = new Date(
  new Date().getTime() + remainingMilliseconds
).toISOString();

export const initialState = {
  userId: localStorage.getItem("userId"),
  token: localStorage.getItem("token"),
  isAuth: localStorage.getItem("isAuth"),
};

export const setLocalStorageAuto = (token, userId, expiryDate) => {
  localStorage.setItem("token", token);
  localStorage.setItem("userId", userId);
  localStorage.setItem("expiryDate", expiryDate);
};
