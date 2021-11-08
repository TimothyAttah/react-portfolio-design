import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Header } from './components/header/Header';
import { Home } from './pages/Home';

export const App = () => {
  return (
    <Router>
      <Switch>
        {/* <Header /> */}
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}
