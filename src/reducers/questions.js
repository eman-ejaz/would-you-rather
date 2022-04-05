import { RECEIVE_QUESTIONS } from '../actions/actionTypes';

const initialState = {};

export const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        questions: action.payload,
      };
    default:
      return state;
  }
};
