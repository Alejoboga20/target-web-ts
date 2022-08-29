import { Link } from 'react-router-dom';

import { useTranslation } from 'hooks';
import { TwoSidesLayout } from 'layout';
import { Button } from 'components';
import { routePaths } from 'router';
import { ReactComponent as Smilies } from 'assets/smilies.svg';
import styles from './AboutPage.module.scss';

export const AboutPage = () => {
	const t = useTranslation();

	return (
		<TwoSidesLayout>
			<div className={styles.about}>
				<Smilies />

				<h3 className={styles.about__heading}>{t('about.title')}</h3>

				<p className={styles.about__description}>{t('about.description')}</p>

				<Link to={routePaths.signup}>
					<Button label={t('about.button')} />
				</Link>
			</div>
		</TwoSidesLayout>
	);
};
