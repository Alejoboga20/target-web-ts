import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { routes } from './router';

export const App = () => {
	return (
		<Router>
			<div>
				<Switch>
					{routes.map(({ path, Component, ...route }) => (
						<Route path={path} {...route}>
							<Component />
						</Route>
					))}

					<Redirect to='/signin' />
				</Switch>
			</div>
		</Router>
	);
};
