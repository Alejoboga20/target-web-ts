import { AuthProvider } from 'context/AuthContext';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { routes } from './router';
import { RouteProtector } from './router/RouteProtector';

export const App = () => {
	return (
		<Router>
			<AuthProvider>
				<div>
					<Switch>
						{routes.map((route) => (
							<RouteProtector key={route.path} {...route} />
						))}
						<Redirect to='/signin' />
					</Switch>
				</div>
			</AuthProvider>
		</Router>
	);
};
