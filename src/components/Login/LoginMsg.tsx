import { ReactComponent as Smilies } from 'assets/smilies.svg';
import useTranslation from 'hooks/useTranslation';
import styles from './Login.module.scss';

export const LoginMsg = () => {
	const t = useTranslation();

	return (
		<>
			<div className={styles.login__svg}>
				<Smilies />
			</div>

			<div className={styles.login__title}>
				<h1>{t('signin.title')}</h1>
			</div>

			<div className={styles.login__subtitle}>
				<h3>{t('signin.subtitle')}</h3>
			</div>

			<div className={styles.login__description}>
				<p>{t('signin.description')}</p>
			</div>
		</>
	);
};
