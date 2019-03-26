import Login from './Login';
import { connect } from 'react-redux';
import { userAction } from '../../redux/epics/user-epics';

const mapStateToProps = ({ user }) => ({
  user
});

const mapDispatchToProps = dispatch => ({
  getUser: () => dispatch(userAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
