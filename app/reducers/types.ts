import { Dispatch as ReduxDispatch, Store as ReduxStore, Action } from 'redux';

type Tasks = {
  type: string;
  x: number;
  something: number;
  id: number;
};

export type StateType = {
  taskReducer: Tasks[];

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
