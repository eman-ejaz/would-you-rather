import React from 'react';
import {Redirect} from 'react-router-dom';
import {ROUTE_URLS} from '../constants/routes';
import Navbar from './Navbar';
import {Grid, Typography} from '@mui/material';

import '../styles/question.css';
import QuestionOption from './QuestionOption';

const Question = (props) => {
    if (props.questionData.loggedIn) {
        return <Redirect
            to={{pathname: ROUTE_URLS.LOGIN, state: {route: `${ROUTE_URLS.QUESTIONS}${props.questionData.qid}`}}}/>;
    }


    if (props.questionData.questionInfo === null) {
        return (
            <div className='question-page'>
                <Navbar/>
                <p>This question does not exist!</p>
            </div>
        );
    }
    const handleAnswer = (selectedOption) => {
        props.handleSaveAnswer(props.authedUser, props.questionData.qid, selectedOption);
    };


    return (
        <div>
            <Navbar/>
            <Typography variant='h2' gutterBottom color={'green'}>
                Would you rather?
            </Typography>
            {props.questionData.questionInfo.answered ? (
                <Grid container justifyContent='center' alignContent='center'>
                    <Grid item xs={12}>
                        <QuestionOption
                            questionData={props.questionData.questionInfo}
                            optionText={props.questionData.questionInfo.optionOne}
                            optionPercentage={props.optionOnePercentage}
                            totalVotes={props.totalVotes}
                            scoredVotes={props.questionData.questionInfo.optionOneVotes.length}
                            toMark={props.questionData.questionInfo.userAnswer === 'optionOne'}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <QuestionOption
                            questionData={props.questionData.questionInfo}
                            optionText={props.questionData.questionInfo.optionTwo}
                            optionPercentage={props.optionTwoPercentage}
                            totalVotes={props.totalVotes}
                            scoredVotes={props.questionData.questionInfo.optionTwoVotes.length}
                            toMark={props.questionData.questionInfo.userAnswer === 'optionTwo'}
                        />
                    </Grid>
                </Grid>
            ) : (
                <div>
                    <div
                        className='question-option'
                        onClick={() => handleAnswer('optionOne')}
                    >
                        {props.questionData.questionInfo.optionOne}?
                    </div>
                    <div
                        className='question-option'
                        onClick={() => handleAnswer('optionTwo')}
                    >
                        {props.questionData.questionInfo.optionTwo}?
                    </div>
                </div>
            )}
        </div>
    );
};

export default Question;
