import { IContact } from 'interfaces';
import { createContext } from 'react';

interface ContactContextProps extends IContact.ContactState {
	createQuestion: (email: string, body: string) => void;
	handleCloseContactModal: () => void;
	handleOpenContactModal: () => void;
}

export const ContactContext = createContext({} as ContactContextProps);
