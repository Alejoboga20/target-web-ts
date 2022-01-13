import { Route } from '../interfaces/Router';
import { AboutPage, HomePage, SigninPage, SignupPage } from '../pages';

export const routes: Route[] = [
	{
		path: '/about',
		Component: AboutPage,
		exact: true,
		private: false,
	},
	{
		path: '/home',
		Component: HomePage,
		exact: true,
		private: true,
	},
	{
		path: '/signin',
		Component: SignupPage,
		exact: true,
		private: false,
	},
	{
		path: '/signup',
		Component: SigninPage,
		exact: true,
		private: false,
	},
];
