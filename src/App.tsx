import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';

import { AuthProvider, ContactProvider } from 'context';
import { routes, RouteProtector } from './router';

export const App = () => {
	return (
		<Router>
			<AuthProvider>
				<ContactProvider>
					<div>
						<Switch>
							{routes.map((route) => (
								<RouteProtector key={route.path} {...route} />
							))}
							<Redirect to='/signin' />
						</Switch>
					</div>
				</ContactProvider>
			</AuthProvider>
		</Router>
	);
};
