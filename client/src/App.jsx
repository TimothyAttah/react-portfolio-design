import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { About } from './pages/about/About';
import { AllPages } from './pages/AllPages';
import { Contact } from './pages/contact/Contact';
import { Home } from './pages/home/Home';
import { Portfolio } from './pages/portfolio/Portfolio';
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
						<Portfolio />
						<Contact />
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
					<Route exact path='/portfolio'>
						<AllPages />
						<Portfolio />
					</Route>
					<Route exact path='/contact'>
						<AllPages />
						<Contact />
					</Route>
				</div>
			</Switch>
		</Router>
	);
}
