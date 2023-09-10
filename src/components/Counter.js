import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux'

const Counter = () => {
  const dispatch = useDispatch();

  const incrementCounter = () => {
    dispatch({ type: "INCREMENT_COUNTER" })
  }

  const decrementCounter = () => {
    dispatch({ type: "DECREMENT_COUNTER" })
  }

  let currentValue = useSelector(state => state.counter);

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>-- {currentValue} --</div>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
    </main>
  );
};

export default Counter;
