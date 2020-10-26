import React from 'react';
import {Card, Text} from 'react-native-elements';
import ButtonComponent from '../../components/Button';
import InputComponent from '../../components/Input';
import {Formik} from 'formik';

const SignInScreen = () => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={(values) => console.log(values)}>
      {({handleChange, handleSubmit, values}) => (
        <Card>
          <Text
            style={{
              fontSize: 22,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Real Time Parking Booking App
          </Text>
          <Text
            h4
            style={{textAlign: 'center', marginTop: 10, marginBottom: 10}}>
            Sign In
          </Text>
          <InputComponent
            autoCapitalize="none"
            onChangeText={handleChange('email')}
            value={values.email}
            placeholder="Email"
          />
          <InputComponent
            onChangeText={handleChange('password')}
            value={values.password}
            placeholder="Password"
            secureTextEntry
          />
          <ButtonComponent title="Sign In" onPress={handleSubmit} />
        </Card>
      )}
    </Formik>
  );
};

export default SignInScreen;
