const remainingMilliseconds = 60 * 60 * 1000;
export const expiryDate = new Date(
  new Date().getTime() + remainingMilliseconds
).toISOString();

export const setLocalStorageAuth = (token, expiryDate) => {
  localStorage.setItem("token", token);
  localStorage.setItem("expiryDate", expiryDate);
  localStorage.setItem("isAuth", true);
};

export const emptyLocalStorage = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expiryDate");
  localStorage.removeItem("isAuth");
};
