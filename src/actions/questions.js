import {CREATE_QUESTION, RECEIVE_QUESTIONS, SAVE_QUESTION_ANSWER} from './actionTypes';

export const receiveQuestions = (questions) => {
  return {
    type: RECEIVE_QUESTIONS,
    payload: questions,
  };
};

export const saveAnswerQuestion = (questionId, userAnswer, authedUser) => {
  return {
    type: SAVE_QUESTION_ANSWER,
    payload: {questionId, userAnswer, authedUser}
  }
}

export const createNewQuestion = (question) => {
  return {
    type: CREATE_QUESTION,
    payload: {question}
  }
}