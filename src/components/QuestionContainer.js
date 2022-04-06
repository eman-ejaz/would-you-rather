import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Question from "./Question";
import {bindActionCreators} from "redux";
import {sharedActionCreators} from "../actions";
import {generateQuestionStats, getQuestionData} from "../utils/utils";

const QuestionContainer = props => {
    const {authedUser} = useSelector((state) => state.authedReducer);
    const questions = useSelector((state) => state.questionsReducer.questions);
    const users = useSelector((state) => state.usersReducer.users);

    console.log(questions)

    const dispatch = useDispatch()

    const {handleSaveAnswer} = bindActionCreators(
        sharedActionCreators,
        dispatch
    );

    const questionId = props.match.params.id;
    const question = questions ? questions[questionId] : null;
    console.log(question)
    const qData = {
        loggedIn: authedUser === null,
        qid: questionId,
        questionInfo: question ? getQuestionData(question,
            questions,
            users,
            authedUser) : null
    }
    const {optionOnePercentage, optionTwoPercentage, totalVotes} = question ?
        generateQuestionStats(qData.questionInfo) : {
            optionOnePercentage: null,
            optionTwoPercentage: null,
            totalVotes: null
        };
    return (
        <Question {...props} questionData={qData} optionOnePercentage={optionOnePercentage}
                  optionTwoPercentage={optionTwoPercentage}
                  totalVotes={totalVotes} authedUser={authedUser}
                  userAvatar={users && questions && question ? users[question.author].avatarURL : ''}
                  handleSaveAnswer={(authedUser, questionId, userAnswer) => handleSaveAnswer(authedUser, questionId, userAnswer)}
        />
    )
}

export default QuestionContainer