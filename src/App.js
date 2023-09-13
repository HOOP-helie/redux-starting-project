import Counter from './components/Counter';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';
import Header from './components/Header';
import { useSelector } from 'react-redux'

function App() {
  let isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  return (
    <>
      {isAuthenticated && (<><Header /> <UserProfile /></>)}
      {!isAuthenticated && <Auth />}
      <Counter />
    </>
  );
}

export default App;
