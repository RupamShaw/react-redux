import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import bankReducer from './bank/bankReducer'
import counter from './counter'
import user from './user'
import tweets from './tweets'

const App = combineReducers({
  todos,
  bankReducer,
  visibilityFilter,
  counter,
  user,
  tweets
})

export default App