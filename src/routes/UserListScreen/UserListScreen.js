import React, { useState, useEffect } from 'react';
import Proptypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  textField: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

/**
 * profile
 * @returns {Node}
 */
const UserListScreen = ({ users, actions }) => {
  const [userList, setUsersList] = useState(users);
  const history = useHistory();
  useEffect(() => {
    setUsersList(users);
  }, [users.length]);

  const classes = useStyles();

  const onSearchHandler = (e) => {
    const {
      target: { value },
    } = e;
    let result = userList;
    if (value) {
      result = userList.filter(
        (o) =>
          o.email.includes(value) ||
          o.first_name.includes(value) ||
          o.last_name.includes(value),
      );
    } else {
      result = users;
    }
    console.log('result', userList.length, result.length, users);
    setUsersList(result);
  };

  const handleDelete = (id) => {
    actions.deleteUserAction(id);
  };

  const manageUser = (user) => {
    if (user.id) {
      actions.activeUserAction(user);
    }
    const path = `manage-user`;
    history.push(path);
  };

  const fetchUsers = () => {
    const URL = 'https://reqres.in/api/users';
    return fetch(URL, { method: 'GET' }).then((response) =>
      Promise.all([response, response.json()]),
    );
  };
  useEffect(() => {
    console.log('users', users.length);
    if (!users.length)
      fetchUsers().then(([response, json]) => {
        if (response.status === 200) {
          actions.saveUsersList(json.data);
          setUsersList(json.data);
        }
      });
  }, []);
  return (
    <section>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Box display="flex" flexDirection="column">
            <h3>My Customers</h3>
            <TextField
              id="outlined-basic"
              label="Search for names, username, email, phone..."
              variant="outlined"
              onChange={onSearchHandler}
            />
          </Box>
        </Grid>
      </Grid>

      <Grid container direction="row" justify="flex-end" alignItems="center">
        <Box>
          <Button variant="contained" color="primary" onClick={manageUser}>
            Add user
          </Button>
        </Box>
      </Grid>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Username</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">created Date</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userList &&
            userList.length &&
            userList.map((user) => (
              <TableRow key={user.id}>
                <TableCell component="th" scope="row">
                  {`${user.first_name} ${user.last_name}`}
                </TableCell>
                <TableCell align="right">{`user ${user.id}`}</TableCell>
                <TableCell align="right">{user.email}</TableCell>
                <TableCell align="right">012345678</TableCell>
                <TableCell align="right">09-22-2020</TableCell>
                <TableCell align="right">
                  <Button color="primary" onClick={() => manageUser(user)}>
                    Edit
                  </Button>
                  <Button
                    color="secondary"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </section>
  );
};

UserListScreen.propTypes = {
  users: Proptypes.shape([]).isRequired,
  actions: Proptypes.shape({
    deleteUserAction: Proptypes.func.isRequired,
    addUserAction: Proptypes.func.isRequired,
    saveUsersList: Proptypes.func.isRequired,
    activeUserAction: Proptypes.func.isRequired,
  }).isRequired,
};

export default UserListScreen;
