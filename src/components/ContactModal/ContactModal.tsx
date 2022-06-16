import Modal from 'react-modal';
import { useContext } from 'react';

import { ContactContext } from 'context';

Modal.setAppElement('#root');

export const ContactModal = () => {
	const { isContactModalOpen, handleCloseContactModal } = useContext(ContactContext);

	return (
		<Modal isOpen={isContactModalOpen} onRequestClose={handleCloseContactModal}>
			Contact
		</Modal>
	);
};

/* const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  } */
