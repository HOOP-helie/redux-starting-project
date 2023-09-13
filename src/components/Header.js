import classes from './Header.module.css';
import { logout } from "./../store/./authSlice"
import { useDispatch, useSelector } from 'react-redux'

const Header = () => {
  const dispatch = useDispatch();
  let isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuthenticated && (
        <nav>
          <ul>
            <li>
              <a href='/'>My Products</a>
            </li>
            <li>
              <a href='/'>My Sales</a>
            </li>
            <li>
              <button onClick={() => dispatch(logout())}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
