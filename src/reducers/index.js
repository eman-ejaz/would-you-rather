import { combineReducers } from 'redux';

import { authedReducer } from './authedUser';
import { questionsReducer } from './questions';
import { usersReducer } from './users';

export default combineReducers({
  usersReducer,
  questionsReducer,
  authedReducer,
});
