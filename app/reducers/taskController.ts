/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import { stop, start, pause } from '../actions/task';

const initialState = {
  execute: false,
  paused: false,
  taskID: 0
};

const taskControllerReducer = (
  state = initialState,
  action: { type: string }
) => {
  switch (action.type) {
    case start:
      return {
        ...state,
        execute: state.execute = true,
        paused: state.paused = false
      };
    case stop:
      return {
        ...state,
        execute: state.execute = false,
        paused: state.paused = false
      };
    case pause:
      return { ...state, paused: state.paused = true };
    default:
      return state;
  }
};

export default taskControllerReducer;
