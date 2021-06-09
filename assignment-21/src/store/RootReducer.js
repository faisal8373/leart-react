import {combineReducers} from 'redux';
import counter from './reducers/CounterReducer';

const RootReducer = combineReducers({
    counter
})
export default RootReducer;