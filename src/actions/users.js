import { RECEIVE_USERS } from './actionTypes';

export const receiveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    payload: users,
  };
};
