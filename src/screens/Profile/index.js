import { connect } from 'react-redux';
import { resetUser } from '../../redux/epics/user-epics';
import Profile from './Profile';

const mapStateToProps = ({ user }) => ({
  user
});

const mapDispatchToProps = dispatch => ({
  resetUser: data => dispatch(resetUser(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
