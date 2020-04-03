import { Dispatch as ReduxDispatch, Store as ReduxStore, Action } from 'redux';

export type StateType = {
  taskReducer: {
    id: number;
    type: string;
    something: number;
    x: number;
  };

  robotState: {
    robotPosition: {
      x: number;
      y: number;
      z: number;
      r: number;
    };
  };
};

export type GetState = () => StateType;

export type Dispatch = ReduxDispatch<Action<string>>;

export type Store = ReduxStore<StateType, Action<string>>;
