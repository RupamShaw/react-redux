import { createStore } from 'redux'
import App from './reducers';
import {applyMiddleware} from 'redux'

const logger = (store) => (next) => (action) => {
 console.log("Logged", action);
  return next(action);
};

const errorHandler = (store) => (next) => (action) => {
  try {
    return next(action);
  } catch(e) {
    console.log("ERROR!", e);
  }
};

const middleware = applyMiddleware(
  logger,
  errorHandler
)
// const store = createStore(
//     App,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//   );
const store = createStore(
  App,middleware);
export default store;

