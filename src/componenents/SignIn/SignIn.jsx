import React, { Component,useState } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { SignUpLink } from '../SignUp/SignUp';
// import { PasswordForgetLink } from '../PasswordForget';
import { withFirebase } from '../../Firebase';
import * as ROUTES from '../../constants/routes';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import {Paper,Button,TextField, InputLabel } from '@material-ui/core';
import {auth} from '../../Firebase/firebase';

const StyledPaper = styled(Paper)`
  margin-top: 0px;
  margin-bottom: 16px;
  width: 500px;
  height: 500px;
`;

const InputContainer = styled.div`
  padding: 20px;
`
const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  padding:20px;
`

const SignInContainer = styled.div`
  padding: 50px;
`
const SubmitButton = styled(Button)`
  padding-left: 30px;
`

const SignIn = () => (
  <div>
    <SignInContainer>
      <StyledPaper>
      <h1>SignIn</h1>
        <SignInForm />
        {/* <PasswordForgetLink /> */}
        <SignUpLink />
      </StyledPaper>
    </SignInContainer> 
  </div>
);

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === '' || email === '';

    return (
      <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email('Invalid email address')
              .required('Required'),
            password: Yup.string()
              .max(20, 'Must be 20 characters or less')
              .required('Required'),
          })}
          onSubmit={this.onSubmit}
        >
          <StyledForm onSubmit={this.onSubmit}>
            <TextField
              label="Email"
              name="email"
              type="email"
              placeholder="email"
              onChange={this.onChange}
              value={email}
            />
              <TextField
              label="Password"
              name="password"
              type="password"
              placeholder="password"
              onChange={this.onChange}
              value={password}
            />
            <SubmitButton type='submit' disabled={isInvalid}>
              SignIn
            </SubmitButton>
          </StyledForm>
        </Formik>
    );
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);

export default SignIn;

export { SignInForm };
