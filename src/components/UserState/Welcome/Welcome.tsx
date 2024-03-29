import { useContext } from 'react';

import { useTranslation } from 'hooks';
import { Button } from '../..';
import { ReactComponent as Smilies } from 'assets/smilies.svg';
import styles from './Welcome.module.scss';
import { UserStateContext } from 'context';

export const Welcome = () => {
	const t = useTranslation();
	const { setState } = useContext(UserStateContext);

	const handleOnClick = () => setState('empty');

	return (
		<div className={styles.welcome}>
			<Smilies />
			<h3 className={styles.welcome__title}>{t('home.welcome.title')}</h3>
			<h5 className={styles.welcome__subtitle}>{t('home.welcome.subtitle')}</h5>

			<ul className={styles.welcome__list}>
				<li>{t('home.welcome.firstStep')}</li>
				<li>{t('home.welcome.secondStep')}</li>
			</ul>

			<Button label={t('home.welcome.button')} onClick={handleOnClick} />
		</div>
	);
};
