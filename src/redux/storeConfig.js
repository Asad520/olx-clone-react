import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers/auth/auth';

const rootReducer = combineReducers({
  auth: authReducer,
});

const middleWare = applyMiddleware(thunk);

const store = createStore(rootReducer, middleWare);

export default store;
