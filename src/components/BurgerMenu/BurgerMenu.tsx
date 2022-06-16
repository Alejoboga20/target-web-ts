import { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { routePaths } from 'router';
import { useOnClickOutside } from 'hooks/useOnClickOutside';
import styles from './BurgerMenu.module.scss';
import useTranslation from 'hooks/useTranslation';
import { ContactContext } from 'context';

const BurgerClose = ({ handleOnClick }: BurgerProps) => (
	<div className={styles.menu__burgerClose} onClick={() => handleOnClick(true)}>
		<div>---</div>
		<div>---</div>
		<div>---</div>
	</div>
);

const BurgerOpen = ({ handleOnClick }: BurgerProps) => {
	const t = useTranslation();
	const ref = useRef<HTMLDivElement | null>(null);
	const { handleOpenContactModal } = useContext(ContactContext);

	useOnClickOutside(ref, handleOnClick);

	return (
		<div className={styles.menu__burgerOpen} ref={ref}>
			<div className={styles.menu__close} onClick={() => handleOnClick(false)}>
				X
			</div>

			<div className={styles.menu__links}>
				<Link className={styles.menu__link} to={routePaths.about}>
					{t('pages.about')}
				</Link>
				<p className={styles.menu__link} onClick={handleOpenContactModal}>
					{t('pages.contact')}
				</p>
			</div>
		</div>
	);
};

export const BurgerMenu = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleOnClick = (isOpen: boolean) => setIsMenuOpen(isOpen);

	return (
		<div className={styles.menu}>
			{isMenuOpen ? (
				<BurgerOpen handleOnClick={handleOnClick} />
			) : (
				<BurgerClose handleOnClick={handleOnClick} />
			)}
		</div>
	);
};

interface BurgerProps {
	handleOnClick: (isOpen: boolean) => void;
}
