import { onMessage, position } from '../actions/websocket';

const initialState = {
  robotPosition: {
    x: 0,
    y: 0,
    z: 0,
    r: 0
  }
};

const robotState = (
  state = initialState,
  action: { type: string; payload: { message: string } }
) => {
  switch (action.type) {
    case onMessage: {
      const robotObj = JSON.parse(action.payload.message);

      switch (robotObj.type) {
        case position: {
          return {
            ...state,
            robotPosition: {
              x: robotObj.robotPosition.x,
              y: robotObj.robotPosition.y,
              z: robotObj.robotPosition.z,
              r: robotObj.robotPosition.r
            }
          };
        }
        default:
          return state;
      }
    }
    default:
      return state;
  }
};

export default robotState;
