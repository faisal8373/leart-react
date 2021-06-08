import {applyMiddleware, createStore} from 'redux';
import RootReducer from '../store/RootReducer';
import thunk from 'redux-thunk';

const store = createStore(RootReducer, applyMiddleware(thunk));

export default store;
