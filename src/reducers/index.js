import { combineReducers } from 'redux';

import albums from './albums';
import users from './users';
import app from './app';

export default combineReducers({
  albums,
  users,
  app,
});
