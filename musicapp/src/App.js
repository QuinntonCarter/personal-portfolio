import { Switch, Route } from 'react-router-dom';

import Banner from './components/banner.js';
import Search  from './components/searchBar.js';
import Main from './components/main.js';
import ResultDetails from './components/resultDetails.js';

function App() {

  return (
    <div className='mainContainer'>
    <Banner/>
        <Search/>
          <Switch>
            <Route exact path='/'>
              <Main/>
            </Route>

            <Route path='/resultDetails'>
              <ResultDetails/>
            </Route>
          </Switch>
    </div>
  );
}

export default App;