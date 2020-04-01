import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import taskReducer from './task';
import taskControllerReducer from './taskController';

export default function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    taskReducer,
    taskControllerReducer
  });
}
