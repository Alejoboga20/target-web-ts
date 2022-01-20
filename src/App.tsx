import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { routes } from './router';
import { RouteProtector } from './router/RouteProtector';

export const App = () => {
	return (
		<Router>
			<div>
				<Switch>
					{routes.map((route) => (
						<RouteProtector
							path={route.path}
							Component={route.Component}
							exact={route.exact}
							private={route.private}
						/>
					))}

					<Redirect to='/signin' />
				</Switch>
			</div>
		</Router>
	);
};
