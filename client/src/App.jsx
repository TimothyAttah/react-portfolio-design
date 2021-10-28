import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Header } from './components/header/Header';

export const App = () => {
  return (
    <Router>
      <Switch>
        <Header />
      </Switch>
    </Router>
  )
}
