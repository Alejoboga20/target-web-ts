import { useContext } from 'react';

import { UserStateContext } from 'context';
import { Welcome, Empty } from '../';

export const Sidebar = () => {
	const { userState } = useContext(UserStateContext);

	switch (userState) {
		case 'welcome':
			return <Welcome />;
		case 'empty':
			return <Empty />;

		default:
			return <Welcome />;
	}
};
