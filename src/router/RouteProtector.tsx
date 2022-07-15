import { useContext } from 'react';
import { Navigate, Route } from 'react-router-dom';

import { routePaths } from '.';
import { Route as RouteProtectorProps } from '../interfaces/Router';
import { AuthContext } from 'context/';

export const RouteProtector = ({ Component, ...props }: RouteProtectorProps) => {
	const { authState } = useContext(AuthContext);

	return props.private ? (
		<>
			{authState.isAuth ? (
				<Route element={<Component />} {...props} />
			) : (
				<Route element={<Navigate to={routePaths.signin} />} />
			)}
		</>
	) : (
		<>
			{authState.isAuth ? (
				<Route element={<Navigate to={routePaths.home} />} />
			) : (
				<Route element={<Component />} {...props} />
			)}
		</>
	);
};
