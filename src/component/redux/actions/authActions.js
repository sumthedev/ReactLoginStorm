// authActions.js

export const setEmailValid = (isValid) => ({
  type: "SET_EMAIL_VALID",
  payload: isValid,
});

export const setPasswordValid = (isValid) => ({
  type: "SET_PASSWORD_VALID",
  payload: isValid,
});

export const setName = (name) => ({
  type: "SET_NAME",
  payload: name,
});

export const setClick = (isClick) => ({
  type: "SET_CLICK",
  payload: isClick,
});

export const setRememberMe = (isRemember) => ({
  type: "SET_REMEMBER",
  payload: isRemember,
});

export const setPasswordLengthError = (passwordLengthError) => ({
  type: "SET_PASSWORD_LENGTH",
  payload: passwordLengthError,
});

export const setEmailError = (isEmailError) => ({
  type: "SET_Email_ERROR",
  payload: isEmailError,
});
