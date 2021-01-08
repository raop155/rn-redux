import React from 'react';
import { Provider } from 'react-redux';
import AppView from './src';
import store from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <AppView />
    </Provider>
  );
};

export default App;
