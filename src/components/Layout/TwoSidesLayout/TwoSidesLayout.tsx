import { BurgerMenu, ContactModal, DefaultRightElement } from 'components';
import styles from './TwoSidesLayout.module.scss';

export const TwoSidesLayout = ({ rightElement, leftElement }: TwoSidesLayoutProps) => {
	return (
		<div className={styles.layout}>
			<BurgerMenu />
			<div className={styles.layout__left}>{leftElement}</div>
			<div className={styles.layout__right}>
				{rightElement ? rightElement : <DefaultRightElement />}
			</div>

			<ContactModal />
		</div>
	);
};

interface TwoSidesLayoutProps {
	rightElement?: JSX.Element | JSX.Element[];
	leftElement: JSX.Element | JSX.Element[];
}
