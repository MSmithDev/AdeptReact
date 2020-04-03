import { test } from '../actions/task';

const initialState = [
  {
    id: 0,
    type: 'Move Linear',
    something: 1,
    x: 12
  },
  {
    id: 0,
    type: 'Move Linear',
    something: 1,
    x: 12
  },
  {
    id: 0,
    type: 'Move Linear',
    something: 1,
    x: 12
  }
];

const taskReducer = (state = initialState, action: { type: string }) => {
  switch (action.type) {
    case test:
      return state;
    default:
      return state;
  }
};

export default taskReducer;
