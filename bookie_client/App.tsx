/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import {Home} from './screens';
import {Provider} from 'react-redux';
import { api } from './api/api';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';


export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefault) => getDefault().concat(api.middleware),
});
setupListeners(store.dispatch);

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Provider store={store} >
        <Home />
      </Provider>
    </SafeAreaView>
  );
}

export default App;
