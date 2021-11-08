import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { About } from './pages/about/About';
import { AllPages } from './pages/AllPages';
import { Home } from './pages/home/Home';

export const App = () => {
  return (
		<Router>
			{/* <AllPages /> */}
			<Switch>
				<div style={{ marginTop: '100px' }}>
					<Route exact path='/'>
						<AllPages />
            <Home />
            <About />
					</Route>
					<Route exact path='/about'>
						<AllPages />
						<About />
					</Route>
				</div>
			</Switch>
		</Router>
	);
}
