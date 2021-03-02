import ReactHelmet from 'hocs/ReactHelmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import UserListScreen from './UserListScreen';
import {
  addUserAction,
  deleteUserAction,
  saveUsersList,
  activeUserAction,
} from '../../redux/userList/actions';
import getUserListSelector from '../../redux/userList/selectors';

const mapStateToProps = (state) => ({
  users: getUserListSelector(state).users,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      addUserAction,
      deleteUserAction,
      saveUsersList,
      activeUserAction,
    },
    dispatch,
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReactHelmet(UserListScreen, 'UserListScreen', 'User List page'));
