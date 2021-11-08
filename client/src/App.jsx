import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { AllPages } from './pages/AllPages';
import { Home } from './pages/home/Home';

export const App = () => {
  return (
		<Router>
				<AllPages />
			<Switch>
				<div style={{marginTop:'100px'}}>
					<Route exact path='/home'>
						<Home />
					</Route>
				</div>
			</Switch>
		</Router>
	);
}
