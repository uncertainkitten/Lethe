import { RECEIVE_CURRENT_USER} from '../actions/session_actions';
import {REMOVE_USER} from '../actions/user_actions';
import {merge} from 'lodash';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {[action.currentUser.id]: action.currentUser});
    case REMOVE_USER:
      let newState = {};
      Object.assign(newState, state);
      delete newState[action.user];
      return newState;
    default:
      return state;
  }
};

export default usersReducer;