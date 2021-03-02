import ReactHelmet from 'hocs/ReactHelmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Login from './login';
import userLoginAction from '../../redux/userLogin/actions';
import getUserLoginSelector from '../../redux/userLogin/selectors';

const mapStateToProps = (state) => ({
  isUserLoggedIn: getUserLoginSelector(state).isUserLoggedIn,
  loader: getUserLoginSelector(state).loader,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ userLoginAction }, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReactHelmet(Login, 'Login - React - Redux Darshan', 'Users page'));
