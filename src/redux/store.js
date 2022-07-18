import { createStore } from 'redux';
import rootReducer from './reduce';
import { composeWithDevTools} from 'redux-devtools-extension'

const composeEnhancers = composeWithDevTools()
const store = createStore(rootReducer, composeEnhancers);

export default store;