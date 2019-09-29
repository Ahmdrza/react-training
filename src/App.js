import React from 'react';
import Hello from './components/hello';
import Form from './components/form';
import HOCList from './components/hoc-list';
import {HOCSearch} from './components/hoc-search';
import Counter from './components/counter';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import combineReducers from './reducers/index';
const store = createStore(combineReducers);

// const HOCSearchList = HOCSearch(HOCList);

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

export default App;
