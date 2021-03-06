import Login from './Login';
import { connect } from 'react-redux';
import { userAction } from '../../redux/epics/user-epics';

const mapStateToProps = ({ user }) => ({
  user
});

const mapDispatchToProps = dispatch => ({
  getUser: data => dispatch(userAction(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
