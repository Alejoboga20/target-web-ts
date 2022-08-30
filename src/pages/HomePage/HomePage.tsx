import { PlacesProvider } from 'context';
import { MainLayout } from 'layout';

export const HomePage = () => {
	return (
		<PlacesProvider>
			<MainLayout>
				<div>HomePage</div>
			</MainLayout>
		</PlacesProvider>
	);
};
