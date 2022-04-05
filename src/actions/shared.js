import {getInitialData, saveQuestion, saveQuestionAnswer} from '../utils/apiCalls';
import {createNewQuestion, receiveQuestions, saveAnswerQuestion} from './questions';
import {receiveUsers, saveUserAnswer, saveUserQuestion} from './users';

export const handleInitialData = () => {
    return async (dispatch) => {
        const {users, questions} = await getInitialData();
        dispatch(receiveUsers(users));
        dispatch(receiveQuestions(questions));
    };
};

export const handleSaveAnswer = (authedUser, questionId, userAnswer) => {
    return async (dispatch) => {
        await saveQuestionAnswer(authedUser, questionId, userAnswer)

        dispatch(saveAnswerQuestion(questionId, userAnswer, authedUser))
        dispatch(saveUserAnswer(questionId, userAnswer, authedUser))

    }
}

export const handleSaveQuestion = (optionOne, optionTwo, authedUser) => {
    return async (dispatch) => {
       const savedQuestion = await saveQuestion({author: authedUser, optionOneText: optionOne, optionTwoText: optionTwo})
        dispatch(createNewQuestion(savedQuestion))
        dispatch(saveUserQuestion(savedQuestion.id, authedUser))
    }
}