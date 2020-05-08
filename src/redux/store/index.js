import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import authenticateReducer from '../ducks/authenticateDucks';
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  authentication : authenticateReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore(){
  const store = createStore( rootReducer , composeEnhancers( applyMiddleware(thunk)));
  return store;
}
