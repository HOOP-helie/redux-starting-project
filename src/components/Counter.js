import classes from './Counter.module.css';
import store from './../store/index'
import { useSelector } from 'react-redux'

const Counter = () => {
  const toggleCounterHandler = () => {
    store.dispatch({ type: "INCREMENT_COUNTER" })
  }

  let currentValue = useSelector(state => state);

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>-- {currentValue} --</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
