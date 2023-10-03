// authReducer.js

const initialState = {
  isValid: true,
  passwordValid: true,
  isClick: false,
  isRemember: false,
  passwordLengthError: false,
  name: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_EMAIL_VALID":
      return { ...state, isValid: action.payload };

    case "SET_PASSWORD_VALID":
      return { ...state, passwordValid: action.payload };

    case "SET_NAME":
      return { ...state, name: action.payload };

    case "SET_CLICK":
      return { ...state, isClick: action.payload };
    case "SET_REMEMBER":
      return { ...state, isRemember: action.payload };
    case "SET_PASSWORD_LENGTH":
      return { ...state, passwordLengthError: action.payload };

    default:
      return state;
  }
};

export default authReducer;
