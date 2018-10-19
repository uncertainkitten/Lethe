import {combineReducers} from 'redux';
import ModeReducer from './mode_reducer';

const uiReducer = combineReducers({
  mode: ModeReducer
});

export default uiReducer;