import { Route } from '../interfaces/Router';
import { AboutPage, HomePage, SigninPage, SignupPage } from '../pages';

export const routePaths = {
	about: '/about',
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
