import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {
  SIGNIN_ERROR,
  SIGNIN_LOADING,
  SIGNUP_ERROR,
  SIGNUP_LOADING,
  SIGNUP_SUCCESS,
} from '../../types';

export const signUp = (userData) => {
  return async (dispatch) => {
    try {
      dispatch({type: SIGNUP_LOADING});
      var response = await auth().createUserWithEmailAndPassword(
        userData.email,
        userData.password,
      );
      let obj = {
        name: userData.name,
        email: userData.email,
        uid: response.user.uid,
        userType: 'user',
      };
      await firestore().collection('users').doc(response.user.uid).set({
        obj,
      });
      dispatch({type: SIGNUP_SUCCESS, payload: obj});
    } catch (error) {
      dispatch({type: SIGNUP_ERROR, payload: error});
    }
  };
};

export const signIn = (userData) => {
  return async (dispatch) => {
    try {
      dispatch({type: SIGNIN_LOADING});
      var response = await auth().signInWithEmailAndPassword(
        userData.email,
        userData.password,
      );
    } catch (error) {
      dispatch({type: SIGNIN_ERROR, payload: error});
    }
  };
};
