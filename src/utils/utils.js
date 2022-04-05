import { Redirect } from 'react-router-dom';
import { ROUTE_URLS } from '../constants/routes';

export const getUserAnswersData = (questions, users, authUser) => {
  const answeredQuestionsIds = Object.keys(users[authUser].answers);
  const answeredQuestions = Object.values(questions).filter((question) =>
    answeredQuestionsIds.includes(question.id)
  );
  const sortedAnswers = answeredQuestions.sort((a, b) => {
    return b.timestamp - a.timestamp;
  });
  const unAnsweredQuestions = Object.values(questions).filter(
    (question) => !answeredQuestionsIds.includes(question.id)
  );
  const sortedUnAnsweredQuestions = unAnsweredQuestions.sort(
    (a, b) => b.timestamp - a.timestamp
  );
  return { answered: sortedAnswers, unanswered: sortedUnAnsweredQuestions };
};

export const getQuestionData = (
  questionOpened,
  questions,
  users,
  authedUser
) => {
  let answered = false;

  answered = Object.keys(users[authedUser]['answers']).includes(
    questionOpened.id
  );

  const questionId = questionOpened.id;

  let userAnswer = '';
  if (answered) {
    userAnswer = users[authedUser]['answers'][questionId];
  } else userAnswer = '';

  const questionData = {
    userAnswer,
    authorAvatar: users[questionOpened['author']]['avatarURL'],
    answered,

    authorName: users[questionOpened['author']]['name'],

    optionOneVotes: questionOpened['optionOne']['votes'],
    optionTwoVotes: questionOpened['optionTwo']['votes'],

    optionOne: questionOpened['optionOne']['text'],
    optionTwo: questionOpened['optionTwo']['text'],
  };

  return questionData;
};

const generateOptionPercentage = (scoredVotes, totalVotes) => {
  return (scoredVotes / totalVotes) * 100;
};

export const generateQuestionStats = (questionData) => {
  const totalVotes =
    questionData.optionOneVotes.length + questionData.optionTwoVotes.length;

  return {
    optionOnePercentage: generateOptionPercentage(
      questionData.optionOneVotes.length,
      totalVotes
    ),
    optionTwoPercentage: generateOptionPercentage(
      questionData.optionTwoVotes.length,
      totalVotes
    ),
    totalVotes,
  };
};

export const checkLoggedIn = () => {
  return <Redirect to={ROUTE_URLS.LOGIN} />;
};

export const createLeaderBoardData = (users) => {
  const usersData = Object.keys(users).map(user => {
    const author = users[user]
    const userAnswers = Object.keys(author['answers']).length
    const userQuestions = author['questions'].length

    author.leaderBoardScore = userQuestions + userAnswers
    author.answersScore = userAnswers
    author.questionsScore = userQuestions
    return author
  })
  return sortLeaderBoardUsers(usersData)
}

export const sortLeaderBoardUsers = (users) => {
  return users.sort((a, b) => b.leaderBoardScore - a.leaderBoardScore)
}