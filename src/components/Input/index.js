import React from 'react';
import {Input} from 'react-native-elements';

const InputComponent = ({
  value,
  onChangeText,
  placeholder,
  autoCapitalize,
  secureTextEntry,
}) => {
  return (
    <Input
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      autoCapitalize={autoCapitalize}
      secureTextEntry={secureTextEntry}
    />
  );
};

export default InputComponent;
