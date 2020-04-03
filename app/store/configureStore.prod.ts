import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createHashHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import reduxWebsocket from '@giantmachines/redux-websocket';
import createRootReducer from '../reducers';
import { Store, StateType } from '../reducers/types';

const history = createHashHistory();
const rootReducer = createRootReducer(history);
const router = routerMiddleware(history);
const reduxWebsocketMiddleware = reduxWebsocket({
  reconnectOnClose: true
});
const enhancer = applyMiddleware(thunk, router, reduxWebsocketMiddleware);

function configureStore(initialState?: StateType): Store {
  return createStore(rootReducer, initialState, enhancer);
}

export default { configureStore, history };
