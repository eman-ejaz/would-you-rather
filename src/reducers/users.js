import {RECEIVE_USERS, SAVE_USER_ANSWER, SAVE_USER_QUESTION} from '../actions/actionTypes';

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

    case SAVE_USER_ANSWER:
      return {
        ...state,
        users: {
          ...state.users,
          [action.payload.authedUser]: {
            ...state.users[action.payload.authedUser],
            answers: {
              ...state.users[action.payload.authedUser].answers,
              [action.payload.questionId]: action.payload.userAnswer
            }
          }
        }
      }
    case SAVE_USER_QUESTION: {
      return {
        ...state,
        users: {
          ...state.users,
          [action.payload.authedUser]:{
            ...state.users[action.payload.authedUser],
            questions : state.users[action.payload.authedUser].questions.concat([action.payload.questionId])
          }
        }
      }
    }
    default:
      return state;
  }
};
