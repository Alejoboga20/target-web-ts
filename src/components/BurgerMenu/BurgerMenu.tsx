import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { routePaths } from 'router';
import { useOnClickOutside } from 'hooks/useOnClickOutside';
import styles from './BurgerMenu.module.scss';
import useTranslation from 'hooks/useTranslation';

const BurgerClose = ({ handleOnClick }: BurgerProps) => (
	<div className={styles.menu__burgerClose} onClick={() => handleOnClick(true)}>
		<div>---</div>
		<div>---</div>
		<div>---</div>
	</div>
);

const BurgerOpen = ({ handleOnClick }: BurgerProps) => {
	const ref = useRef<HTMLDivElement | null>(null);
	useOnClickOutside(ref, handleOnClick);
	const t = useTranslation();

	return (
		<div className={styles.menu__burgerOpen} ref={ref}>
			<div className={styles.menu__close} onClick={() => handleOnClick(false)}>
				X
			</div>

			<div className={styles.menu__links}>
				<Link className={styles.menu__link} to={routePaths.about}>
					{t('pages.about')}
				</Link>
				<Link className={styles.menu__link} to={routePaths.contact}>
					{t('pages.contact')}
				</Link>
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
