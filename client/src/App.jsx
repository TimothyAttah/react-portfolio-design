import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { About } from './pages/about/About';
import { AllPages } from './pages/AllPages';
import { Home } from './pages/home/Home';
import { Service } from './pages/service/Service';

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
						<Service />
					</Route>
					<Route exact path='/home'>
						<AllPages />
						<Home />
					</Route>
					<Route exact path='/about'>
						<AllPages />
						<About />
					</Route>
					<Route exact path='/services'>
						<AllPages />
						<Service />
					</Route>
				</div>
			</Switch>
		</Router>
	);
}
