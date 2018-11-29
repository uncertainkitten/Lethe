import {RECEIVE_INVITES, RECEIVE_INVITE} from '../actions/invite_actions';
import {merge} from 'lodash';
import {LOGOUT_CURRENT_USER} from '../actions/session_actions';

const inviteReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_INVITES:
     return merge({}, state, action.invites);
    case RECEIVE_INVITE:
      return merge({}, state, {[action.invite.url]: action.invite});
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
}

export default inviteReducer;