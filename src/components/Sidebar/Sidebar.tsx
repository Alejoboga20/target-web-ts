import { useState } from 'react';

import { Welcome, Empty } from '../';

type userState = 'welcome' | 'empty';

const Component = {
	welcome: <Welcome />,
	empty: <Empty />,
};

export const Sidebar = () => {
	const [state, setState] = useState<userState>('welcome');

	return Component[state];
};
