import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';

import { AuthProvider } from 'context';
import { routes, RouteProtector } from './router';

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
