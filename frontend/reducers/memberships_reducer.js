import {RECEIVE_MEMBERSHIPS, RECEIVE_MEMBERSHIP, REMOVE_MEMBERSHIP} from '../actions/membership_actions';
import {merge} from 'lodash';

const membershipReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_MEMBERSHIPS:
     return action.memberships
    case RECEIVE_MEMBERSHIP:
      return merge({}, state, {[action.membership.id]: action.membership});
    case REMOVE_MEMBERSHIP:
      let newMemberState = {};
      Object.assign(newMemberState, state);
      delete newMemberState[action.membership.id];
      return newMemberState;
    default:
      return state;
  }
}


export default membershipReducer;
