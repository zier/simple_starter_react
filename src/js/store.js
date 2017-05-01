import { createStore, combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import CounterReducer from './Counter/reducers'

const reducers = combineReducers({
    counterReducer: CounterReducer,
    routing: routerReducer,
})

const store = createStore(reducers)

export default store
