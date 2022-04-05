import {RECEIVE_USERS, SAVE_USER_ANSWER, SAVE_USER_QUESTION} from './actionTypes';

export const receiveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    payload: users,
  };
};

export const saveUserAnswer = (questionId, userAnswer, authedUser) => {
  return {
    type: SAVE_USER_ANSWER,
    payload: {
      questionId,
      userAnswer,
      authedUser
    }
  }
}

export const saveUserQuestion = (questionId, authedUser) => {
  return {
    type: SAVE_USER_QUESTION,
    payload: {questionId, authedUser}
  }
}