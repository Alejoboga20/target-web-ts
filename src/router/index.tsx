import { Route } from '../interfaces/Router';
import { AboutPage, ContactPage, HomePage, SigninPage, SignupPage } from '../pages';

export { RouteProtector } from './RouteProtector';

export const routePaths = {
	about: '/about',
	contact: '/contact',
	home: '/home',
	signup: '/signup',
	signin: '/signin',
};

export const routes: Route[] = [
	{
		path: routePaths.about,
		Component: AboutPage,
		exact: true,
		private: false,
	},
	{
		path: routePaths.contact,
		Component: ContactPage,
		exact: true,
		private: false,
	},
	{
		path: routePaths.home,
		Component: HomePage,
		exact: true,
		private: true,
	},
	{
		path: routePaths.signup,
		Component: SignupPage,
		exact: true,
		private: false,
	},
	{
		path: routePaths.signin,
		Component: SigninPage,
		exact: true,
		private: false,
	},
];
