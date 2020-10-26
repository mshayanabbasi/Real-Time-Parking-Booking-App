import React from 'react';
import {View, Text} from 'react-native';
import SignInScreen from './screens/SignInScreen';
// import SignUpScreen from './screens/SignUpScreen';
import {Provider} from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <SignInScreen />
    </Provider>
  );
};

export default App;
