import { useState, useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { UserContext } from './context/userProvider';

import Banner from './components/banner.js';
import Search  from './components/searchBar.js';

import 'react-spotify-auth/dist/index.css';
import Cookies from 'js-cookies';

import { SpotifyAuth } from 'react-spotify-auth';
// import ResultDetails from './components/resultDetails.js';
import ProtectedRoute from './components/protectedRoute.js';
import Auth from './components/forms/authForm.js';
import Main from './views/main.js';

function App() {
  const [spotifyToken, setToken] = useState(Cookies.get("spotifyAuthToken"))
  const { token } = useContext(UserContext)

  return (
    <div className='mainContainer'>
    <Banner/>
        <Switch>
          { spotifyToken && token ? 
                <Redirect to='/main'/>

              :
                <Route 
                  exact path='/'
                  render={() => token ?
                    <Auth
                      loading={false}
                      spotifyToken={spotifyToken}
                    />

                  :
                    <SpotifyAuth
                      redirectUri='http://localhost:3000/test'
                      clientID='3cf4ebb118804879a374913aa73e7661'
                      scopes={['user-recently-played']}
                      onAccessToken={(token) => setToken(token)}
                    />
                  }
                />
            }

          <ProtectedRoute
            exact path='/main'
            component={Main}
            redirectTo='/'
            spotifyToken={spotifyToken}
            loading={false}
          />

          <ProtectedRoute
            exact path='/profile'
            component={Profile}
            redirectTo='/'
            spotifyToken={spotifyToken}
            loading={false}
          />

        </Switch>
    </div>
  );
}

export default App;