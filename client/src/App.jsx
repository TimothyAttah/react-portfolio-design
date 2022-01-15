import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { toast } from 'react-toastify';

import { StyleSwitcher } from './components/styleSwitcher/StyleSwitcher';
import { MainHeader } from './components/header/MainHeader';
import { Contact } from './pages/contact/Contact';
import { About } from './pages/about/About';
import { Home } from './pages/home/Home';
import { Portfolio } from './pages/portfolio/Portfolio';
import { Service } from './pages/service/Service';

export const App = () => {
	toast.configure();
	return (
		<Router>
			<Switch>
				<div style={{ marginTop: '100px' }}>
					<Route exact path='/'>
						<MainHeader />
						<Home />
						<About />
						<Service />
						<Portfolio />
						<Contact />
					</Route>
					<Route exact path='/home'>
						<MainHeader />
						<Home />
					</Route>
					<Route exact path='/about'>
						<MainHeader />
						<About />
					</Route>
					<Route exact path='/services'>
						<MainHeader />
						<Service />
					</Route>
					<Route exact path='/portfolio'>
						<MainHeader />
						<Portfolio />
					</Route>
					<Route exact path='/contact'>
						<MainHeader />
						<Contact />
					</Route>
				</div>
			</Switch>
			<StyleSwitcher />
		</Router>
	);
};
