import React, { useState, useEffect } from 'react';
import Proptypes from 'prop-types';
import InputBox from 'components/InputBox';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import FormHelperText from '@material-ui/core/FormHelperText';
import CircularProgress from '@material-ui/core/CircularProgress';
import Backdrop from '@material-ui/core/Backdrop';

/**
 * Login
 * @returns {Node}
 */
const Login = ({ isUserLoggedIn, loader, actions }) => {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userErrorMessage, setUserErrorMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [buttonPressed, setButtonPressed] = useState(false);

  const inputType = {
    USERNAME: 'PASSWORD',
    PASSWORD: 'USERNAME',
  };

  useEffect(() => {
    if (isUserLoggedIn) {
      const path = `users`;
      history.push(path);
    } else if (buttonPressed) {
      setLoginError(true);
    }
  }, [isUserLoggedIn, buttonPressed, loader]);

  const validateForm = (type, value) => {
    setLoginError(false);
    switch (type) {
      case inputType.USERNAME:
        if (!value) {
          setUserErrorMessage("Username can't be blank");
          return false;
        }
        setUserErrorMessage();
        return true;

      case inputType.PASSWORD:
        if (!value && value.length < 6) {
          setPasswordErrorMessage(
            'Password must be at least 6 characters long.',
          );
          return false;
        }
        setPasswordErrorMessage();
        return true;

      default:
        return false;
    }
  };

  const onClick = () => {
    const payload = {
      username,
      password,
    };
    validateForm(inputType.USERNAME, username);
    validateForm(inputType.PASSWORD, password);
    actions.userLoginAction(payload);
    setButtonPressed(true);
  };

  const useStyles = makeStyles((theme) => ({
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }));

  const classes = useStyles();

  return (
    <section>
      <Container component="main" maxWidth="xs">
        <h1>Login Page</h1>
        <InputBox
          type="Username"
          helperText={userErrorMessage}
          onChange={(e) => {
            validateForm(inputType.USERNAME, e.target.value);
            setUsername(e.target.value);
          }}
          id="username_input"
          onBlur={() => {}}
        />
        <InputBox
          type="Password"
          onChange={(e) => {
            validateForm(inputType.PASSWORD, e.target.value);
            setPassword(e.target.value);
          }}
          helperText={passwordErrorMessage}
          id="password_input"
          onBlur={() => {}}
        />
        {loginError &&
          !userErrorMessage &&
          !passwordErrorMessage &&
          !loader && (
            <FormHelperText error>
              Please enter valid username and password{' '}
            </FormHelperText>
          )}
        <Button
          fullWidth
          className={classes.submit}
          color="primary"
          variant="contained"
          onClick={onClick}
          disabled={!!(userErrorMessage || passwordErrorMessage)}
        >
          Login
        </Button>
      </Container>
      <Backdrop className={classes.backdrop} open={loader}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </section>
  );
};

Login.propTypes = {
  isUserLoggedIn: Proptypes.bool.isRequired,
  actions: Proptypes.shape({
    userLoginAction: Proptypes.func.isRequired,
  }).isRequired,
  loader: Proptypes.bool.isRequired,
};

export default Login;
