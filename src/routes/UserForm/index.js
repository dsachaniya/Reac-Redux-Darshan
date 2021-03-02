import ReactHelmet from 'hocs/ReactHelmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import UserForm from './UserForm';
import {
  addUserAction,
  editUserAction,
  saveUsersList,
  activeUserAction,
} from '../../redux/userList/actions';
import getUserListSelector from '../../redux/userList/selectors';

const mapStateToProps = (state) => ({
  activeUser: getUserListSelector(state).activeUser,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    { addUserAction, editUserAction, saveUsersList, activeUserAction },
    dispatch,
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReactHelmet(UserForm, 'UserForm', 'User Form page'));
