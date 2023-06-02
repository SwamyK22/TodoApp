import { createStore } from 'redux'
import counterReducer from './Counter/CounterReducer'

const store = createStore(counterReducer)

export default store;