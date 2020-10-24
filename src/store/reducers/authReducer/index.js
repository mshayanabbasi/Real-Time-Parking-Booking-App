import {
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  SIGNIN_SUCCESS,
  SIGNIN_ERROR,
  SIGNOUT_SUCCESS,
  SIGNOUT_ERROR,
} from '../../types';

const initialState = {
  user: null,
  isError: null,
  signUpError: null,
  signInError: null,
  signOutError: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isError: false,
        signUpError: null,
      };

    case SIGNUP_ERROR:
      return {
        ...state,
        signUpError: action.payload,
        isError: true,
        user: null,
      };
    case SIGNIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case SIGNIN_ERROR:
      return {
        ...state,
        isError: true,
        signInError: action.payload,
      };
    case SIGNOUT_SUCCESS:
      return state;
    case SIGNOUT_ERROR:
      return {
        ...state,
        signOutError: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
