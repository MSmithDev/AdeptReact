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
    type: 'IO',
    something: 3,
    x: 15
  },
  {
    id: 3,
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
    id: 5,
    type: 'Move Joint',
    something: 3,
    x: 15
  },
  {
    id: 6,
    type: 'Move Joint',
    something: 3,
    x: 15
  },
  {
    id: 7,
    type: 'Move Liner',
    something: 3,
    x: 15
  },
  {
    id: 8,
    type: 'Move Linear',
    something: 3,
    x: 15
  }
];

const taskReducer = (state = initialState, action: { type: string }) => {
  switch (action.type) {
    case test:
      return { ...state, id: state.id + 1 };
    default:
      return state;
  }
};

export default taskReducer;
