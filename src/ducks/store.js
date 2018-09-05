import restReducer from './restReducer'
import { createStore, combineReducers } from 'redux';

const reducer = combineReducers({
    restReducer,
})

export default createStore(reducer)