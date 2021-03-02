import React, { useState } from 'react';
import Proptypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '125ch',
    },
  },
}));
/**
 * profile
 * @returns {Node}
 */
const UserForm = ({ activeUser, actions }) => {
  const classes = useStyles();
  const history = useHistory();
  const [username, setUsername] = useState(
    activeUser.id ? `user${activeUser.id}` : '',
  );
  const [name, setName] = useState(
    activeUser.first_name
      ? `${activeUser.first_name} ${activeUser.last_name}`
      : '',
  );
  const [phone, setPhone] = useState(activeUser.phone || '');
  const [email, setEmail] = useState(activeUser.email || '');

  const [userErrorMessage, setUserErrorMessage] = useState('');
  const [nameErrorMessage, setNameErrorMessage] = useState('');
  const [phoneErrorMessage, setPhoneErrorMessage] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');

  const inputType = {
    NAME: 'NAME',
    USERNAME: 'USERNAME',
    PHONE: 'PHONE',
    EMAIL: 'EMAIL',
  };

  const validateForm = (type, value) => {
    switch (type) {
      case inputType.NAME:
        if (!value) {
          setNameErrorMessage("Name can't be blank");
          return false;
        }
        setNameErrorMessage();
        return true;

      case inputType.USERNAME:
        if (!value && value.length < 6) {
          setUserErrorMessage("Username can't be blank");
          return false;
        }
        setUserErrorMessage();
        return true;
      case inputType.PHONE:
        if (!value) {
          setPhoneErrorMessage("Phone can't be blank");
          return false;
        }
        setPhoneErrorMessage();
        return true;
      case inputType.EMAIL:
        if (!value) {
          setEmailErrorMessage("Email can't be blank");
          return false;
        }
        setEmailErrorMessage();
        return true;

      default:
        return false;
    }
  };

  const manageUser = () => {
    validateForm(inputType.USERNAME, username);
    validateForm(inputType.NAME, name);
    validateForm(inputType.PHONE, phone);
    validateForm(inputType.EMAIL, email);
    if (activeUser.id) {
      const payload = {
        id: activeUser.id,
        first_name: name,
        last_name: name,
        email,
        username: email,
        phone,
      };
      if (username && email && phone && name) {
        actions.editUserAction(payload);
        const path = `users`;
        history.push(path);
      }
    } else {
      const payload = {
        first_name: name,
        last_name: name,
        email,
        username: email,
        phone,
      };
      if (username && email && phone && name) {
        actions.addUserAction(payload);

        const URL = 'https://reqres.in/api/users';

        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: 'morpheus',
            job: 'leader',
          }),
        };
        fetch(URL, requestOptions)
          .then((response) => response.json())
          .then(() => {
            const path = `users`;
            history.push(path);
          });

        actions.activeUserAction({});
      }
    }
  };

  return (
    <section>
      <h3>{activeUser.id ? 'Edit User' : 'Add User'}</h3>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          label="Name"
          onChange={(e) => {
            validateForm(inputType.NAME, e.target.value);
            setName(e.target.value);
          }}
          helperText={nameErrorMessage}
          id="name-input"
          value={name}
          error={nameErrorMessage}
        />
        <TextField
          onChange={(e) => {
            validateForm(inputType.USERNAME, e.target.value);
            setUsername(e.target.value);
          }}
          helperText={userErrorMessage}
          id="name-input"
          value={username}
          label="Username"
          error={userErrorMessage}
        />
        <TextField
          id="email-required"
          label="Email"
          onChange={(e) => {
            validateForm(inputType.EMAIL, e.target.value);
            setEmail(e.target.value);
          }}
          helperText={emailErrorMessage}
          value={email}
          error={emailErrorMessage}
        />
        <TextField
          id="phone-required"
          label="Phone"
          onChange={(e) => {
            validateForm(inputType.PHONE, e.target.value);
            setPhone(e.target.value);
          }}
          helperText={phoneErrorMessage}
          value={phone}
          error={phoneErrorMessage}
        />
      </form>

      <Button variant="contained" color="primary" onClick={manageUser}>
        {activeUser.id ? 'Update' : 'Submit'}
      </Button>
    </section>
  );
};

UserForm.propTypes = {
  activeUser: Proptypes.shape({
    id: Proptypes.string.isRequired,
    first_name: Proptypes.string.isRequired,
    last_name: Proptypes.string.isRequired,
    phone: Proptypes.string.isRequired,
    email: Proptypes.string.isRequired,
  }),
  actions: Proptypes.shape({
    addUserAction: Proptypes.func.isRequired,
    editUserAction: Proptypes.func.isRequired,
    activeUserAction: Proptypes.func.isRequired,
  }).isRequired,
};

UserForm.defaultProps = {
  activeUser: {},
};
export default UserForm;
