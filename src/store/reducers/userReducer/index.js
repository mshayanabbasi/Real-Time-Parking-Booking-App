import {
  BOOKING_ERROR,
  BOOKING_SUCCESS,
  FEEDBACK_ERROR,
  FEEDBACK_SUCCESS,
  GET_BOOKING_ERROR,
  GET_BOOKING_SUCCESS,
  GET_FEEDBACK_ERROR,
  GET_FEEDBACK_SUCCESS,
} from '../../types';

const initialState = {
  bookedData: [],
  myfeedback: [],
  bookingError: null,
  feedbackError: null,
  booking: null,
  feedback: null,
  getBookedDataError: null,
  getMyFeedbackError: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOKING_SUCCESS:
      return {
        ...state,
        booking: action.payload,
      };
    case BOOKING_ERROR:
      return {
        ...state,
        bookingError: action.payload,
      };
    case GET_BOOKING_SUCCESS:
      return {
        ...state,
        bookedData: action.payload,
      };
    case GET_BOOKING_ERROR:
      return {
        ...state,
        getBookedDataError: action.payload,
      };
    case FEEDBACK_SUCCESS:
      return {
        ...state,
        feedback: action.payload,
      };
    case FEEDBACK_ERROR:
      return {
        ...state,
        feedbackError: action.payload,
      };
    case GET_FEEDBACK_SUCCESS:
      return {
        ...state,
        myfeedback: action.payload,
      };
    case GET_FEEDBACK_ERROR:
      return {
        ...state,
        getMyFeedbackError: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
