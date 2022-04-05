import { SET_AUTH_USER } from './actionTypes';

export const setAuthUser = (id) => {
  return {
    type: SET_AUTH_USER,
    payload: id,
  };
};
