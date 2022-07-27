import { useContext } from 'react';

import { BurgerMenu, ContactForm, DefaultRightElement, ModalRoot } from 'components';
import { ContactContext } from '../../../context/Contact/ContactContext';
import styles from './TwoSidesLayout.module.scss';

export const TwoSidesLayout = ({ rightElement, leftElement }: TwoSidesLayoutProps) => {
	const { isContactModalOpen } = useContext(ContactContext);

	return (
		<div className={styles.layout}>
			<BurgerMenu />
			<div className={styles.layout__left}>{leftElement}</div>
			<div className={styles.layout__right}>
				{rightElement ? rightElement : <DefaultRightElement />}
			</div>

			{isContactModalOpen && (
				<ModalRoot>
					<ContactForm />
				</ModalRoot>
			)}
		</div>
	);
};

interface TwoSidesLayoutProps {
	rightElement?: JSX.Element | JSX.Element[];
	leftElement: JSX.Element | JSX.Element[];
}
