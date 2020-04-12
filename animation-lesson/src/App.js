import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './styles.scss';
import Home from './Pages/Home';
import CircleDiv from './Pages/CircleDiv';
import CircleCanvas from './Pages/CircleCanvas';

function App() {
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/circle-using-div">Moving Circle using div</Link>
          </li>
          <li>
            <Link to="/circle-using-canvas">Moving Circle using canvas</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/" exact><Home /></Route>
        <Route path="/circle-using-div" exact><CircleDiv /></Route>
        <Route path="/circle-using-canvas" exact><CircleCanvas /></Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
