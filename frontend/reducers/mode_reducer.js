import {OPEN_MODAL, CLOSE_MODAL} from '../actions/ui_actions';
import {merge} from 'lodash';

const modeReducer = (state = {id: null}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case OPEN_MODAL:
      return merge({}, state, {id: action.mode});
    case CLOSE_MODAL:
      return merge({}, state, {id: null});
    default:
      return state;
  }
}

export default modeReducer;