import {combineReducers} from 'redux';
import ErrorsReducer from './errors_reducer';
import EntitiesReducer from './entities_reducer';
import SessionReducer from './session_reducer';
import UiReducer from './ui_reducer';

const rootReducer = combineReducers({
  entities: EntitiesReducer,
  session: SessionReducer,
  errors: ErrorsReducer,
  ui: UiReducer
});

export default rootReducer;