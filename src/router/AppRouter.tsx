import { Navigate, Route, Routes } from 'react-router-dom';

import { AboutPage, HomePage, SigninPage, SignupPage } from 'pages';
import { Route as IRoute } from 'interfaces/Router';

export const routePaths = {
	about: '/about',
	home: '/home',
	signup: '/signup',
	signin: '/signin',
};

export const routes: IRoute[] = [
	{
		path: routePaths.about,
		element: <AboutPage />,
	},
	{
		path: routePaths.home,
		element: <HomePage />,
	},
	{
		path: routePaths.signup,
		element: <SignupPage />,
	},
	{
		path: routePaths.signin,
		element: <SigninPage />,
	},
];

export const AppRouter = () => {
	return (
		<Routes>
			{routes.map((route) => (
				<Route {...route} />
			))}

			<Route path='/*' element={<Navigate to={routePaths.signin} />} />
		</Routes>
	);
};
