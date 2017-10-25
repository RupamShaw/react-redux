import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import bankReducer from './bank/bankReducer'
const App = combineReducers({
  todos,
  bankReducer,
  visibilityFilter
})

export default App