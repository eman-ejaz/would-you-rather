import { SET_AUTH_USER } from '../actions/actionTypes';

const initialState = { authedUser: null };

export const authedReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER:
      return {
        ...state,
        authedUser: action.payload,
      };

    default:
      return state;
  }
};
