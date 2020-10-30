import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import {mySaga} from './saga/saga';
import reducer from './reducer';

const sagaMiddleware = createSagaMiddleware();

const initialState = {frontend: [], react: [], angular: [], vue: [], display: [], loaded: true};

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(mySaga)

export default store;
