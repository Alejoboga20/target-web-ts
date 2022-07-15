import { AuthProvider, ContactProvider } from 'context';
import { AppRouter } from 'router';

export const App = () => {
	return (
		<AuthProvider>
			<ContactProvider>
				<AppRouter />
			</ContactProvider>
		</AuthProvider>
	);
};
