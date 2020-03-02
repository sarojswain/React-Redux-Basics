import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
// import reducer from '../src/store/reducer';
import counterReducer from '../src/store/reducers/counter';
import resultReducer from '../src/store/reducers/result';

const rootReducer = combineReducers({
   ctr: counterReducer,
   res: resultReducer
})

const store = createStore(rootReducer);

ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>,
   document.getElementById('root')
);

