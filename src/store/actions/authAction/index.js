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

export const signUp = ({name, email, password}) => {
  return async (dispatch) => {
    try {
      dispatch({type: SIGNUP_LOADING});
      console.log('signUp');
      var response = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      let obj = {name, email, userId: response.user.uid, userType: 'user'};
      await firestore()
        .collection('users')
        .doc(response.user.uid)
        .set({
          ...obj,
        });
      dispatch({type: SIGNUP_SUCCESS, payload: obj});
    } catch (error) {
      dispatch({type: SIGNUP_ERROR, payload: error});
    }
  };
};

export const signIn = ({email, password}) => {
  return async (dispatch) => {
    try {
      dispatch({type: SIGNIN_LOADING});
      var response = await auth().signInWithEmailAndPassword(email, password);

      firestore()
        .collection('users')
        .doc(response.user.uid)
        .onSnapshot((snapShot) => {
          console.log(snapShot);
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
