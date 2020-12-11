import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Home from './Home';
import Calculator from './Calculator';
import Quote from './Quote';
import '../styles/App.css';

const App = () => (
  <>
    <nav>
      <h1 id="logo">Math Magicians</h1>
      <div id="nav-menu">
        <Link to="/" className="nav-links">Home</Link>
        |
        <Link to="/calculator" className="nav-links">Calculator</Link>
        |
        <Link to="/quote" className="nav-links">Quote</Link>
      </div>
    </nav>
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/calculator" component={Calculator} />
        <Route path="/quote" component={Quote} />
      </Switch>
    </main>
  </>
);

export default App;
