import React from 'react';
import {View, Text} from 'react-native';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <SignUpScreen />
    </View>
  );
};

export default App;
