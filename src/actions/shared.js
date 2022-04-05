import { getInitialData } from '../utils/apiCalls';
import { receiveQuestions } from './questions';
import { receiveUsers } from './users';

export const handleInitialData = () => {
  return async (dispatch) => {
    const { users, questions } = await getInitialData();
    dispatch(receiveUsers(users));
    dispatch(receiveQuestions(questions));
  };
};
