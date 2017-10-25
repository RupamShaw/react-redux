import { createStore } from 'redux'
import bankReducer from './reducers/bank/bankReducer';
const bankStore = createStore(bankReducer);
export default bankStore;