import React from 'react';
import Navbar from './Navbar';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { ROUTE_URLS } from '../constants/routes';
import { getUserAnswersData } from '../utils/utils';
import { Box, Grid, Tab } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import { TabList, TabPanel } from '@mui/lab';
import QuestionCard from './QuestionCard';

const Home = () => {
  const { authedUser } = useSelector((state) => state.authedReducer);
  const [value, setValue] = React.useState('1');

  const questions = useSelector((state) => state.questionsReducer.questions);
  const authUser = useSelector((state) => state.authedReducer.authedUser);
  const users = useSelector((state) => state.usersReducer.users);

  const loggedIn = authedUser !== null;

  if (!loggedIn) {
    return <Redirect to={ROUTE_URLS.LOGIN} />;
  }

  const usersQuestionData = getUserAnswersData(questions, users, authUser);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Navbar />
      <Grid container xs={12} alignContent={'center'} justifyContent={'center'}>
        <Grid xs={4}>
          <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList
                  onChange={handleChange}
                  aria-label='lab API tabs example'
                >
                  <Tab
                    label='Unanswered Questions'
                    value='1'
                    style={{ marginRight: '30px' }}
                  />
                  <Tab label='Answered Questions' value='2' />
                </TabList>
              </Box>
              <TabPanel value='1'>
                <Grid
                  container
                  direction='column'
                  spacing={3}
                  alignContent={'center'}
                  justifyContent={'center'}
                >
                  {usersQuestionData.unanswered.map((question) => {
                    return (
                      <Grid item xs={12} key={question.id}>
                        <QuestionCard userAvatar={users[question.author].avatarURL} question={question} />
                      </Grid>
                    );
                  })}
                </Grid>
              </TabPanel>
              <TabPanel value='2'>
                <Grid
                  container
                  direction='column'
                  spacing={3}
                  alignContent={'center'}
                  justifyContent={'center'}
                >
                  {usersQuestionData.answered.map((question) => {
                    return (
                      <Grid item xs={12} key={question.id}>
                        <QuestionCard userAvatar={users[question.author].avatarURL} question={question} />
                      </Grid>
                    );
                  })}
                </Grid>
              </TabPanel>
            </TabContext>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
