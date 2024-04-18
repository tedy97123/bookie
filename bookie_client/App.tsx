import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { api } from './api/api';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Profile from './screens/Tabs/Profile';
import MonthlyReading from './screens/Tabs/MonthlyReading';
import ReadingProgressTracker from './screens/Tabs/ReadingProgressTracker';
import Search from './screens/Tabs/Search';
import Home from './screens/Tabs/Home';
 
const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefault) => getDefault().concat(api.middleware),
});
setupListeners(store.dispatch);

function MyTabs() {
  return (
    <Tab.Navigator>
       <Tab.Screen name="Search" component={Search} />
       <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Calender" component={MonthlyReading} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Progress" component={ReadingProgressTracker} />
    </Tab.Navigator>
  );
}

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1 }}>  
    <Provider store={store}> 
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Tabs" component={MyTabs} options={{ headerShown: false }} />
          <Stack.Screen name="MonthlyReading" component={MonthlyReading} />
          <Stack.Screen name="ReadingProgressTracker" component={ReadingProgressTracker} />
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
    </SafeAreaView>
  );
}

export default App;
