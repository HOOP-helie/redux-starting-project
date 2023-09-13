import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, toggleBtn } from "./../store/./counterSlice"

const Counter = () => {
  const dispatch = useDispatch();

  // const incrementCounter = () => {
  //   dispatch({ type: "INCREMENT_COUNTER" })
  // }

  // const decrementCounter = () => {
  //   dispatch({ type: "DECREMENT_COUNTER" })
  // }

  // const toggleCounterBtn = () => {
  //   dispatch({ type: "TOGGLE_BTN" })
  // }

  let currentValue = useSelector(state => state.counter.counter);
  let showBtn = useSelector(state => state.counter.showBtn);

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>-- {currentValue} --</div>
      {
        showBtn && (
          <div>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
          </div>
        )
      }
      <button onClick={() => dispatch(toggleBtn())}>Toggle</button>
    </main>
  );
};

export default Counter;
