import React from 'react';
import {Card, Text} from 'react-native-elements';
import ButtonComponent from '../../components/Button';
import InputComponent from '../../components/Input';
import {Formik} from 'formik';
import {useSelector, useDispatch} from 'react-redux';
import {signUp} from '../../store/actions/authAction';

const SignUpScreen = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  let SignUp = (data) => {
    const {name, email, password} = data;
    const obj = {
      name,
      email,
      password,
    };
    dispatch(signUp(obj));
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      onSubmit={(values) => SignUp(values)}>
      {({handleChange, handleSubmit, values}) => (
        <Card>
          <Text style={{fontSize: 22, fontWeight: 'bold'}}>
            Real Time Parking Booking App
          </Text>
          <Text
            h4
            style={{textAlign: 'center', marginTop: 10, marginBottom: 10}}>
            Sign Up
          </Text>
          <InputComponent
            onChangeText={handleChange('name')}
            value={values.name}
            placeholder="Name"
          />
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
          <ButtonComponent title="Sign Up" onPress={handleSubmit} />
        </Card>
      )}
    </Formik>
  );
};

export default SignUpScreen;
