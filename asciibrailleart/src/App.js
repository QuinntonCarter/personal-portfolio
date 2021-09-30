import About from './components/about.js';
import Main from './components/main.js';
import { Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        {/* <About
        /> */}

        <Main
        />
      </Switch>
    </div>
  );
}

export default App;
