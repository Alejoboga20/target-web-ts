import { useState } from 'react';
import { UserStateContext } from './UserStateContext';

export interface UserState {
	userState: State;
}

export type State = 'welcome' | 'empty' | 'create' | 'home' | 'chat' | 'editProfile';

export const UserStateProvider = ({ children }: UserStateProviderProps) => {
	const [state, setState] = useState<State>('welcome');

	return (
		<UserStateContext.Provider value={{ userState: state, setState }}>
			{children}
		</UserStateContext.Provider>
	);
};

interface UserStateProviderProps {
	children: JSX.Element | JSX.Element[];
}
