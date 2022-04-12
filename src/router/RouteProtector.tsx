import { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { routePaths } from '.';
import { Route as RouteProtectorProps } from '../interfaces/Router';
import { AuthContext } from 'context/';

export const RouteProtector = ({ Component, ...props }: RouteProtectorProps) => {
	const { authState } = useContext(AuthContext);

	return props.private ? (
		<>
			{authState.isAuth ? (
				<Route render={() => <Component />} {...props} />
			) : (
				<Redirect to={routePaths.signin} />
			)}
		</>
	) : (
		<>
			{authState.isAuth ? (
				<Redirect to={routePaths.home} />
			) : (
				<Route render={() => <Component />} {...props} />
			)}
		</>
	);
};
