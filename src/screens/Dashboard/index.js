import { connect } from 'react-redux';
import { todoAction, resetTodo } from '../../redux/epics/todo-epics';
import Dashboard from './Dashboard';

const mapStateToProps = ({ getTodo }) => ({
  getTodo
});

const mapDispatchToProps = dispatch => ({
  todoAction: data => dispatch(todoAction(data)),
  resetTodo: () => dispatch(resetTodo())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
