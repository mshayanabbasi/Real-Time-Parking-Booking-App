import {
  BOOKING_ERROR,
  BOOKING_LOADING,
  BOOKING_SUCCESS,
  DELETE_BOOKING_ERROR,
  DELETE_BOOKING_LOADING,
  DELETE_BOOKING_SUCCESS,
  FEEDBACK_LOADING,
  FEEDBACK_SUCCESS,
  GET_BOOKING_ERROR,
  GET_BOOKING_LOADING,
  GET_BOOKING_SUCCESS,
  GET_FEEDBACK_ERROR,
  GET_FEEDBACK_LOADING,
  GET_FEEDBACK_SUCCESS,
} from '../../types';
import firestore from '@react-native-firebase/firestore';

export const setBooking = ({
  startingTime,
  endingTime,
  date,
  userId,
  area,
  slot,
}) => {
  return async (dispatch) => {
    try {
      dispatch({type: BOOKING_LOADING});
      let obj = {
        startingTime,
        endingTime,
        date,
        userId,
        area,
        slot,
      };
      await firestore()
        .collection('bookings')
        .add({
          ...obj,
        });
      dispatch({type: BOOKING_SUCCESS, payload: obj});
    } catch (error) {
      dispatch({type: BOOKING_ERROR, payload: error});
    }
  };
};

export const getBooking = () => {
  let bookedData = [];
  return async (dispatch) => {
    try {
      dispatch({type: GET_BOOKING_LOADING});
      await firestore()
        .collection('bookings')
        .onSnapshot((snapShot) => {
          bookedData = [];
          snapShot.forEach((doc) => {
            bookedData.push({...doc.data(), id: doc.id});
          });
        });
      dispatch({type: GET_BOOKING_SUCCESS, payload: bookedData});
    } catch (error) {
      dispatch({type: GET_BOOKING_ERROR, payload: error});
    }
  };
};

export const deleteBooking = (id) => {
  return async (dispatch) => {
    try {
      dispatch({type: DELETE_BOOKING_LOADING});
      await firestore().collection('bookings').doc(id).delete();
      dispatch({type: DELETE_BOOKING_SUCCESS});
    } catch (error) {
      dispatch({type: DELETE_BOOKING_ERROR, payload: error});
    }
  };
};

export const setFeedback = ({message, username, date, userId}) => {
  return async (dispatch) => {
    try {
      dispatch({type: FEEDBACK_LOADING});
      let obj = {
        message,
        username,
        date,
        userId,
      };
      await firestore()
        .collection('feedbacks')
        .add({
          ...obj,
        });
      dispatch({type: FEEDBACK_SUCCESS, payload: obj});
    } catch (error) {
      dispatch({type: FEEDBACK_ERROR, payload: error});
    }
  };
};

export const myFeedBack = (userId) => {
  return async (dispatch) => {
    try {
      let myFeedback = [];
      dispatch({type: GET_FEEDBACK_LOADING});
      await firestore()
        .collection('feedbacks')
        .where('userId' === userId)
        .onSnapshot((snapShot) => {
          myFeedBack = [];
          snapShot.forEach((doc) => {
            myFeedback.push({...doc.data(), id: doc.id});
          });
          dispatch({type: GET_FEEDBACK_SUCCESS, payload: myFeedback});
        });
    } catch (error) {
      dispatch({type: GET_FEEDBACK_ERROR, payload: error});
    }
  };
};
