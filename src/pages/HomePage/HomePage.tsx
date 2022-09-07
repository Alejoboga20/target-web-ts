import { Sidebar } from 'components';
import { PlacesProvider, UserStateProvider } from 'context';
import { MainLayout } from 'layout';

export const HomePage = () => {
	return (
		<UserStateProvider>
			<PlacesProvider>
				<MainLayout>
					<Sidebar />
				</MainLayout>
			</PlacesProvider>
		</UserStateProvider>
	);
};
