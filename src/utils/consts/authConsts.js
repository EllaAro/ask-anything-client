const remainingMilliseconds = 60 * 60 * 1000;
export const expiryDate = new Date(
  new Date().getTime() + remainingMilliseconds
).toISOString();

export const setLocalStorageAuth = (token, userId, expiryDate) => {
  localStorage.setItem("token", token);
  localStorage.setItem("userId", userId);
  localStorage.setItem("expiryDate", expiryDate);
  localStorage.setItem("isAuth", true);
};

export const emptyLocalStorage = () => {
  localStorage.setItem("token", null);
  localStorage.setItem("userId", null);
  localStorage.setItem("expiryDate", null);
};
