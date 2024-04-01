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
function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Provider  >
        <Home />
      </Provider>
    </SafeAreaView>
  );
}

export default App;
