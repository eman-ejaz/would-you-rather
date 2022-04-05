import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { ROUTE_URLS } from '../constants/routes';

import { generateQuestionStats, getQuestionData } from '../utils/utils';
import Navbar from './Navbar';
import { Grid, Typography } from '@mui/material';

import '../styles/question.css';
import QuestionOption from './QuestionOption';
import { bindActionCreators } from 'redux';
import { sharedActionCreators } from '../actions';

const Question = (props) => {
  const { authedUser } = useSelector((state) => state.authedReducer);
  const questions = useSelector((state) => state.questionsReducer.questions);
  const users = useSelector((state) => state.usersReducer.users);

  const dispatch = useDispatch();

  const { handleSaveAnswer } = bindActionCreators(
    sharedActionCreators,
    dispatch
  );

  const loggedIn = authedUser !== null;

  if (!loggedIn) {
    return <Redirect to={ROUTE_URLS.LOGIN} />;
  }

  const questionId = props.match.params.id;
  const questionOpened = questions[questionId];

  const questionData = getQuestionData(
    questionOpened,
    questions,
    users,
    authedUser
  );
  const { optionOnePercentage, optionTwoPercentage, totalVotes } =
    generateQuestionStats(questionData);

  const handleAnswer = (selectedOption) => {
    handleSaveAnswer(authedUser, questionId, selectedOption);
  };

  return (
    <div>
      <Navbar />
      <Typography variant='h2' gutterBottom color={'green'}>
        Would you rather?
      </Typography>
      {questionData.answered ? (
        <Grid container justifyContent='center' alignContent='center'>
          <Grid item xs={12}>
            <QuestionOption
              questionData={questionData}
              optionText={questionData.optionOne}
              optionPercentage={optionOnePercentage}
              totalVotes={totalVotes}
              scoredVotes={questionData.optionOneVotes.length}
              toMark={questionData.userAnswer === 'optionOne'}
            />
          </Grid>
          <Grid item xs={12}>
            <QuestionOption
              questionData={questionData}
              optionText={questionData.optionTwo}
              optionPercentage={optionTwoPercentage}
              totalVotes={totalVotes}
              scoredVotes={questionData.optionTwoVotes.length}
              toMark={questionData.userAnswer === 'optionTwo'}
            />
          </Grid>
        </Grid>
      ) : (
        <div>
          <div
            className='question-option'
            onClick={() => handleAnswer('optionOne')}
          >
            {questionData.optionOne}?
          </div>
          <div
            className='question-option'
            onClick={() => handleAnswer('optionTwo')}
          >
            {questionData.optionTwo}?
          </div>
        </div>
      )}
    </div>
  );
};

export default Question;
