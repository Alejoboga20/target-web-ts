import mapboxgl from 'mapbox-gl';

import { AuthProvider, ContactProvider } from 'context';
import { AppRouter } from 'router';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY!;

if (!navigator.geolocation) {
	alert("Your browser doesn't have geolocation");
	throw new Error("Your browser doesn't have geolocation");
}

export const App = () => {
	return (
		<AuthProvider>
			<ContactProvider>
				<AppRouter />
			</ContactProvider>
		</AuthProvider>
	);
};
