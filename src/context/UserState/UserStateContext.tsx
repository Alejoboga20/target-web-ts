import { createContext } from 'react';
import { State, UserState } from './UserStateProvider';

interface UserStateContextProps extends UserState {
	setState: React.Dispatch<React.SetStateAction<State>>;
}

export const UserStateContext = createContext({} as UserStateContextProps);
