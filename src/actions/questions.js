import { RECEIVE_QUESTIONS } from './actionTypes';

export const receiveQuestions = (questions) => {
  return {
    type: RECEIVE_QUESTIONS,
    payload: questions,
  };
};
