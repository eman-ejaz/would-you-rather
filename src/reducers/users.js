import { RECEIVE_USERS } from '../actions/actionTypes';

const initialState = {
  users: {},
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        users: action.payload,
      };

    default:
      return state;
  }
};
