import {RECEIVE_SERVER, REMOVE_SERVER, RECEIVE_USER_SERVERS} from '../actions/server_actions';
import {REMOVE_MEMBERSHIP} from '../actions/membership_actions';
import {RECEIVE_INVITE} from '../actions/invite_actions';
import {merge} from 'lodash';

const serverReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SERVER:
      return merge({}, state, {[action.server.id]: action.server})
    case REMOVE_SERVER:
      let newState = {};
      Object.assign(newState, state);
      delete newState[action.serverId];
      return newState;
    case RECEIVE_USER_SERVERS:
      return action.servers;
    case REMOVE_MEMBERSHIP:
      let newMemberState = {};
      Object.assign(newMemberState, state);
      delete newMemberState[action.membership.server_id];
      return newMemberState;
    case RECEIVE_INVITE:
      return merge({}, state, {[action.server.id]: action.server});
    default:
      return state;
  }
};

export default serverReducer;
