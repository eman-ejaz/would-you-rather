import {CREATE_QUESTION, RECEIVE_QUESTIONS, SAVE_QUESTION_ANSWER} from '../actions/actionTypes';

const initialState = {};

export const questionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                questions: action.payload,
            };
        case SAVE_QUESTION_ANSWER: {
            return {
                ...state,
                questions: {
                    ...state.questions,
                    [action.payload.questionId]: {
                        ...state.questions[action.payload.questionId],
                        [action.payload.userAnswer]: {
                            ...state.questions[action.payload.questionId][action.payload.userAnswer],
                            votes: state.questions[action.payload.questionId][action.payload.userAnswer].votes.concat([action.payload.authedUser])

                        }
                    }
                }
            }
        }
        case CREATE_QUESTION: {
            return {
                ...state,
                questions: {
                  ...state.questions,
                  [action.payload.question.id]: action.payload.question
                }
            }
        }
        default:
            return state;
    }
};
