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

  const toggleCounterBtn = () => {
    dispatch({ type: "TOGGLE_BTN" })
  }

  let currentValue = useSelector(state => state.counter);
  let showBtn = useSelector(state => state.showBtn);

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>-- {currentValue} --</div>
      {
        showBtn && (
          <div>
            <button onClick={incrementCounter}>Increment</button>
            <button onClick={decrementCounter}>Decrement</button>
          </div>
        )
      }
      <button onClick={toggleCounterBtn}>Toggle</button>
    </main>
  );
};

export default Counter;
