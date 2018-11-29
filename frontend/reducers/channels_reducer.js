import { RECEIVE_CHANNEL, RECEIVE_CHANNELS, REMOVE_CHANNEL } from '../actions/channel_actions';
import { merge } from 'lodash';
import {LOGOUT_CURRENT_USER} from '../actions/session_actions';

const channelReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CHANNELS:
      return action.channels
    case RECEIVE_CHANNEL:
      return merge({}, state, { [action.channel.id]: action.channel });
    case REMOVE_CHANNEL:
      let newState = {};
      Object.assign(newState, state);
      delete newState[action.channel.id];
      return newState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
}


export default channelReducer;
