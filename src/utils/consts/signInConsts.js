const remainingMilliseconds = 60 * 60 * 1000;
export const expiryDate = new Date(
    new Date().getTime() + remainingMilliseconds
  ).toISOString();

export const initialState = {userId: '', 
                            token: '',
                            isAuth: false };
