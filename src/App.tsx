import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { AuthProvider, ContactProvider } from 'context';
import { routes, RouteProtector, routePaths } from './router';

export const App = () => {
	return (
		<AuthProvider>
			<BrowserRouter>
				<ContactProvider>
					<div>
						<Routes>
							{routes.map((route) => (
								<RouteProtector key={route.path} {...route} />
							))}
							<Route path='/*' element={<Navigate to={routePaths.signin} />} />
						</Routes>
					</div>
				</ContactProvider>
			</BrowserRouter>
		</AuthProvider>
	);
};
