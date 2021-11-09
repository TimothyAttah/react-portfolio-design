import { images } from './images';

export const NavLists = [
	{
		name: 'home',
		path: '/home',
	},
	{
		name: 'about',
		path: '/about',
	},
	{
		name: 'services',
		path: '/services',
	},
	{
		name: 'portfolio',
		path: '/portfolio',
	},
	{
		name: 'contact',
		path: '/contact',
	},
];

export const portfolioList = [
	{
		img: images.quiz1,
		title: 'Quiz Game App',
		dataCategory: 'web-application',
		direction: 'quiz',
	},
	{
		img: images.covid1,
		title: 'Covid-19 Tracker',
		dataCategory: 'web-application',
		direction: 'covid19',
	},
	{
		img: images.budget1,
		title: 'Budgetary',
		dataCategory: 'web-application',
		direction: 'budgetary',
	},
	{
		img: images.onlineMagazine1,
		title: 'Online Magazine',
		dataCategory: 'web-application',
		direction: 'onlineMagazine',
	},
	{
		img: images.personal0,
		title: 'Personal Portfolio Design',
		dataCategory: 'web-design',
		direction: 'personalPortfolio',
	},
	{
		img: images.amazon1,
		title: 'Amazon Clone Demo App',
		dataCategory: 'e-commerce',
		direction: 'amazon',
	},
];

export const portfolioListItem = [
	{
		name: 'all',
		dataTarget: 'all',
	},
	{
		name: 'web application',
		dataTarget: 'web-application',
	},
	{
		name: 'web design',
		dataTarget: 'web-design',
	},
	{
		name: 'e commerce',
		dataTarget: 'e-commerce',
	},
];

export const skillItem = [
	{
		name: 'HTML',
	},
	{
		name: 'CSS',
	},
	{
		name: 'Javascript',
	},
	{
		name: 'React/Redux',
	},
	{
		name: 'Nodejs/Express',
	},
	{
		name: 'MongoDB',
	},
	{
		name: 'Git/GitHub',
	},
	{
		name: 'Postgres/SQL',
	},
];
