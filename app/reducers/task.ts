
import { test } from '../actions/task';

const initialState = [
  {
    id: 0,
    type: 'Move Linear',
    something: 1,
    x: 12
  },
  {
    id: 1,
    type: 'Move Joint',
    something: 3,
    x: 15
  },
  {
    id: 2,
    type: "IO",
    something: 3,
    x: 15
  },
  {
    id: 4,
    type: 'Move Joint',
    something: 3,
    x: 15
  },
  {
    id: 4,
    type: 'Move Joint',
    something: 3,
    x: 15
  },
  {
    id: 4,
    type: 'Move Joint',
    something: 3,
    x: 15
  },
  {
    id: 4,
    type: 'Move Joint',
    something: 3,
    x: 15
  },
  {
    id: 4,
    type: 'Move Joint',
    something: 3,
    x: 15
  },
  {
    id: 4,
    type: 'Move Joint',
    something: 3,
    x: 15
  }
];

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case test:
      return { ...state, id: state.id + 1 };
    default:
      return state;
  }
};

export default taskReducer;
