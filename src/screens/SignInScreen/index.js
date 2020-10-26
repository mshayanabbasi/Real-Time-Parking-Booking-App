import React from 'react';
import {Card, Text} from 'react-native-elements';
import ButtonComponent from '../../components/Button';
import InputComponent from '../../components/Input';
import {Formik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import {signIn} from '../../store/actions/authAction';

const SignInScreen = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  let SignIn = (data) => {
    const {email, password} = data;
    const obj = {
      email,
      password,
    };
    dispatch(signIn(obj));
  };
  // console.log(user);
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={(values) => SignIn(values)}>
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
