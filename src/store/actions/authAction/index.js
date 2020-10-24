import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {
  SIGNIN_ERROR,
  SIGNIN_LOADING,
  SIGNIN_SUCCESS,
  SIGNOUT_ERROR,
  SIGNOUT_LOADING,
  SIGNOUT_SUCCESS,
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

      firestore()
        .collection('users')
        .doc(response.user.uid)
        .onSnapshot((snapShot) => {
          let obj = {
            user: response.user,
            name: snapShot.data().name,
            userType: snapShot.data().userType,
          };
          dispatch({type: SIGNIN_SUCCESS, payload: obj});
        });
    } catch (error) {
      dispatch({type: SIGNIN_ERROR, payload: error});
    }
  };
};

export const signOut = () => {
  return async (dispatch) => {
    try {
      dispatch({type: SIGNOUT_LOADING});
      await auth().signOut();
      dispatch({type: SIGNOUT_SUCCESS});
    } catch (error) {
      dispatch({type: SIGNOUT_ERROR, payload: error});
    }
  };
};
