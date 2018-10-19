import {RECEIVE_INVITES, RECEIVE_INVITE} from '../actions/invite_actions';
import {merge} from 'lodash';

const inviteReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_INVITES:
     return merge({}, state, action.invites);
    case RECEIVE_INVITE:
      return merge({}, state, {[action.invite.url]: action.invite});
    default:
      return state;
  }
}

export default inviteReducer;