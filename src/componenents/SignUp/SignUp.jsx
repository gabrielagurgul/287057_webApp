import React, { Component, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { withFirebase } from '../../Firebase';
import * as ROUTES from '../../constants/routes';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import {Paper,Button,TextField, InputLabel } from '@material-ui/core';

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

const SignUpContainer = styled.div`
  padding: 50px;
`
const SubmitButton = styled(Button)`
  padding-left: 30px;
`

const SignUpPage = () => (
  <div>
  <SignUpContainer>
    <StyledPaper>
    <h1>SignUp</h1>
      <SignUpForm />
    </StyledPaper>
  </SignUpContainer> 
</div>
);

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    alert("xd")
    const { username, email, passwordOne } = this.state;
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.props.firebase
          .user(authUser.user.uid)
          .set({
            username,
            email,
          })
          .then(() => {
            this.setState({ ...INITIAL_STATE });
            this.props.history.push(ROUTES.HOME);
          })
          .catch(error => {
            this.setState({ error });
          });
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
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
      <Formik
        initialValues={{
          username: '',
          email: '',
          passwordOne: '',
          passwordTwo: '',
        }}
        onSubmit={this.onSubmit}
      >
        <StyledForm>
          <TextField
            label="User name"
            name="username"
            type="text"
            placeholder="username"
            onChange={this.onChange}
            value={username}
          />
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
            name="passwordOne"
            type="password"
            placeholder="password"
            onChange={this.onChange}
            value={passwordOne}
          />
            <TextField
            label="Confirm Password"
            name="passwordTwo"
            type="password"
            placeholder="confirm password"
            onChange={this.onChange}
            value={passwordTwo}
          />
          <SubmitButton type='submit' disabled={isInvalid}>
            SignUp
          </SubmitButton>
        </StyledForm>
      </Formik>
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export default SignUpPage;

export { SignUpForm, SignUpLink };