import { Navigate, Route, Routes } from 'react-router-dom';

import { AboutPage, HomePage, SigninPage, SignupPage } from 'pages';
import { routes, routePaths } from 'router/constants';

export const AppRouter = () => {
	return (
		<Routes>
			<Route path={routePaths.about} element={<AboutPage />} />
			<Route path={routePaths.home} element={<HomePage />} />
			<Route path={routePaths.signin} element={<SigninPage />} />
			<Route path={routePaths.signup} element={<SignupPage />} />

			<Route path='/*' element={<Navigate to={routePaths.signin} />} />
		</Routes>
	);
};
