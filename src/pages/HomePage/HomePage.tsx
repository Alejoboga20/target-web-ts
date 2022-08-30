import { Sidebar } from 'components';
import { PlacesProvider } from 'context';
import { MainLayout } from 'layout';

export const HomePage = () => {
	return (
		<PlacesProvider>
			<MainLayout>
				<Sidebar />
			</MainLayout>
		</PlacesProvider>
	);
};
