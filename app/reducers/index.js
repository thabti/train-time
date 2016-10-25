import { combineReducers } from 'redux';
import { RECEIVE_TRAINS, REQUEST_TRAINS, HTTP_ERROR } from '../actionTypes';
function trains(state = {}, action) {
  const {type, data} = action;
  switch (type) {
    case REQUEST_TRAINS:
    return Object.assign({}, state);
    case RECEIVE_TRAINS:
    return Object.assign({}, state, data );
    default:
    return state;
  }
}

const rootReducer = combineReducers({
  trains
});

export default rootReducer;
