import { Navigate, Route, Routes } from 'react-router-dom';

import { AboutPage, HomePage, SigninPage, SignupPage } from 'pages';
import { Route as IRoute } from 'interfaces/Router';
import { RouteProtector } from './RouteProtector';

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
		isPrivateRoute: false,
	},
	{
		path: routePaths.home,
		element: <HomePage />,
		isPrivateRoute: true,
	},
	{
		path: routePaths.signup,
		element: <SignupPage />,
		isPrivateRoute: false,
	},
	{
		path: routePaths.signin,
		element: <SigninPage />,
		isPrivateRoute: false,
	},
];

export const AppRouter = () => {
	return (
		<Routes>
			{routes.map(({ path, element, isPrivateRoute }) => (
				<Route
					path={path}
					element={<RouteProtector isPrivateRoute={isPrivateRoute}>{element}</RouteProtector>}
				/>
			))}

			<Route path='/*' element={<Navigate to={routePaths.signin} />} />
		</Routes>
	);
};
