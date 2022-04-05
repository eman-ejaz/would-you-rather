import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Typography } from '@mui/material';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { EMPTY_FIELD_ERROR_TEXT } from '../constants/constants';
import { Grid } from '@material-ui/core';
import { bindActionCreators } from 'redux';
import { sharedActionCreators } from '../actions';
import { Redirect } from 'react-router-dom';
import { ROUTE_URLS } from '../constants/routes';
import Navbar from './Navbar';

const CreateQuestion = () => {
  const { authedUser } = useSelector((state) => state.authedReducer);
  const [questionSaved, setQuestionSaved] = useState(false);

  const loggedIn = authedUser !== null;

  const dispatch = useDispatch();
  const { handleSaveQuestion } = bindActionCreators(
    sharedActionCreators,
    dispatch
  );

  if (!loggedIn) {
    return <Redirect to={ROUTE_URLS.LOGIN} />;
  }
  if (questionSaved) {
    return <Redirect to={ROUTE_URLS.HOME} />;
  }

  const fieldStyles = {
    borderRadius: '4px',
    border: '1px solid #dad7d7',
    padding: '10px',

    height: '50px',
    minWidth: '120px',
    width: '30%',
    display: 'flex',
    margin: '0 auto',
    marginBottom: ' 20px',
    justifyContent: 'center',
  };
  return (
    <div>
      <Navbar />
      <Typography variant='h4' gutterBottom component='div'>
        Create a new Question
      </Typography>
      <Typography variant='button' gutterBottom component='block'>
        Create a new Question
      </Typography>
      <Formik
        initialValues={{
          optionOne: '',
          optionTwo: '',
        }}
        validationSchema={Yup.object({
          optionOne: Yup.string().required(EMPTY_FIELD_ERROR_TEXT),
          optionTwo: Yup.string().required(EMPTY_FIELD_ERROR_TEXT),
        })}
        onSubmit={(values) => {
          handleSaveQuestion(values.optionOne, values.optionTwo, authedUser);
          setQuestionSaved(true);
        }}
      >
        <Form>
          <Grid container alignContent={'center'} justifyContent={'center'}>
            <Grid item xs={12}>
              <Field
                style={fieldStyles}
                name={'optionOne'}
                placeHolder={'Enter the option one'}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                style={fieldStyles}
                name={'optionTwo'}
                placeHolder={'Enter the option two'}
              />
            </Grid>
            <Grid xs={12}>
              <ErrorMessage name='optionOne'>
                {(msg) => <div style={{ color: 'red' }}>{msg}</div>}
              </ErrorMessage>
              <ErrorMessage name='optionTwo'>
                {(msg) => <div style={{ color: 'red' }}>{msg}</div>}
              </ErrorMessage>
            </Grid>
            <Grid xs={4}>
              <Button
                color='primary'
                variant='contained'
                fullWidth
                type='submit'
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </div>
  );
};

export default CreateQuestion;
