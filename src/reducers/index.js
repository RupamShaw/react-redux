import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import bankReducer from './bank/bankReducer'
import counter from './counter'
const App = combineReducers({
  todos,
  bankReducer,
  visibilityFilter,
  counter
})

export default App