import { Redirect, Route } from 'react-router-dom';
import { routePaths } from '.';
import { Route as RouteProtectorProps } from '../interfaces/Router';

export const RouteProtector = ({ Component, ...props }: RouteProtectorProps) => {
	const isAuthenticated: boolean = false;

	return props.private ? (
		<>
			{isAuthenticated ? (
				<Route render={() => <Component />} {...props} />
			) : (
				<Redirect to={routePaths.signin} />
			)}
		</>
	) : (
		<Route render={() => <Component />} {...props} />
	);
};
