import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/Auth/AuthContext';
import { routePaths } from './AppRouter';

export const RouteProtector = ({ isPrivateRoute = false, children }: RouteProtectorProps) => {
	const { authState } = useContext(AuthContext);
	const { isAuth } = authState;

	return (
		<>
			{isPrivateRoute ? (
				isAuth ? (
					children
				) : (
					<Navigate to={routePaths.signin} />
				)
			) : isAuth ? (
				<Navigate to={routePaths.home} />
			) : (
				children
			)}
		</>
	);
};

interface RouteProtectorProps {
	isPrivateRoute?: boolean;
	children: JSX.Element | JSX.Element[];
}

/* 
{isAuth ? children : <Navigate to={routePaths.signin} />}
*/
