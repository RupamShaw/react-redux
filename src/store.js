import { createStore } from 'redux'
import App from './reducers';

const store = createStore(
    App,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
export default store;

