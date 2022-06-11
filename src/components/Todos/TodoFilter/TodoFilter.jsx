// import React from 'react';
// import { connect } from 'react-redux';
// import * as todosActions from '../../../Redux/todos/todos-actions';
// import './TodoFilter.css';

// const TodoFilter = ({ value, onChange }) => (
//   <div className="TodoFilter">
//     <p className="TodoFilter__label">Content Filter</p>
//     <input
//       type="text"
//       className="TodoFilter__input"
//       value={value}
//       onChange={onChange}
//     />
//   </div>
// );

// const mapStateToProps = state => ({
//   value: state.todos.filter,
// });

// const mapDispatchToProps = dispatch => ({
//   onChange: e => dispatch(todosActions.changeFilter(e.target.value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(TodoFilter);
