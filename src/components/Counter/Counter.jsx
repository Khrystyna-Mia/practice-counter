import React from 'react';
import { connect } from 'react-redux/es/exports';
import Controls from './Controls';
import Value from './Value';
import * as actions from '../../Redux/counter/counter-actions';

import './Counter.css';

const Counter = ({ value, step, onIncrement, onDecrement }) => {
  return (
    <div className="Counter">
      <Value value={value} />
      <Controls
        step={step}
        onIncrement={() => onIncrement(step)}
        onDecrement={() => onDecrement(step)}
      />
    </div>
  );
};

/* це функція, яка буде получати весь стан додатку (весь redux state), 
 повертає об'єкт; те, що помістимо у властивості цього об'єкту, буде 
 пропсами нашого компоненту*/

const mapStateToProps = state => ({
  value: state.counter.value,
  step: state.counter.step,
});

/* це функція, яка передає методи для відправки actions */

const mapDispatchToProps = dispatch => ({
  onIncrement: value => dispatch(actions.increment(value)),
  onDecrement: value => dispatch(actions.decrement(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
