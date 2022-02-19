import './App.css';
import { 
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  Redirect,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import AuthPage from './pages/AuthPage';
import SearchPage from './pages/SearchPage';
import { getUser, logout } from './services/fetch-utils';
import WatchlistPage from './pages/WatchlistPage';

function App() {
  //track user in state
  const [user, setUser] = useState(localStorage.getItem('supabase.auth.token'));

  useEffect(() => {
    async function fetchAndSetUser() {
      const user = await getUser();
      setUser(user);
    }
    fetchAndSetUser();
  }, []);

  async function handleLogout() {
    await logout();
    setUser(null);
  }


  return (
    <Router>
      <div className="App">
        <h2>Movie App</h2>
        <header>
          {
            (user) && <ul style={{ listStyle: 'none' }}>
              <li>
                <NavLink to='/search'>Movie Search</NavLink>
              </li>
              <li>
                <NavLink to='/watchlist'>Your Watchlist</NavLink>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                >Log out</button>
              </li>
            </ul>
          }
        </header>
        <main>
          <Switch>
            {/* first route is home page and chekcs if there is a user - if not auth, if so search page */}
            <Route exact path='/'>
              {
                (user)
                  ? <Redirect to='/search' />
                  : <AuthPage setUser={setUser}/>
              }
            </Route>
            {/* search page route lets you search api for movies */}
            <Route exact path='/search'>
              {
                (user)
                  ? <SearchPage />
                  : <Redirect to='/' />
              }
            </Route>
            <Route exact path='/watchlist'>
              {
                (user)
                  ? <WatchlistPage />
                  : <Redirect to='/' />
              }
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
