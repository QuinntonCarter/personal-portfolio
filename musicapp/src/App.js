import { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import Search  from './components/searchBar.js';

import { AppContext } from './appContext'

function App() {
  const { searchQuery } = useContext(AppContext)

  const mappedResults = searchQuery.map(results => 
    <>
      {results.img ? 
      <img className='resultsImg' src={results.img} alt='artist'/> : 
      <i style={{margin: '20px', fontSize: '920%'}} className="fas fa-microphone-slash"> No Image</i>}
    </>)

  return (
    <div className="mainApp">
      <Search/>
      {console.log(searchQuery)}
      {mappedResults}
      {/* <Switch>
        <Route>

        </Route>
      </Switch> */}
    </div>
  );
}

export default App;