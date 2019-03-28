import { connect } from 'react-redux';
import { todoAction } from '../../redux/epics/todo-epics';
import Dashboard from './Dashboard';

const mapStateToProps = ({ getTodo }) => ({
  getTodo
});

const mapDispatchToProps = dispatch => ({
  todoAction: data => dispatch(todoAction(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
