import Avatar from 'assets/Avatar.png';
import { ReactComponent as Smilies } from 'assets/smilies.svg';
import { popularTargets } from 'constants/constants';
import { useTranslation } from 'hooks';
import styles from './Empty.module.scss';

export const Empty = () => {
	const t = useTranslation();

	return (
		<div className={styles.empty}>
			<div>
				<h1>{t('home.empty.title')}</h1>
				<div className={styles.avatar}>
					<img alt='avatar' src={Avatar} />
				</div>

				<p>UsernamePlaceholder</p>

				<div className={styles.smallButtons}>
					<small className={styles.smallButtons__text}>{t('home.empty.buttonEdit')}</small>/
					<small className={styles.smallButtons__text}>{t('home.empty.buttonLogout')}</small>
				</div>
				<hr />
			</div>

			<h4>{t('home.empty.subtitle')}</h4>

			<div className={styles.popular}>
				<h5>{t('home.empty.pupolarTargets')}</h5>
				{popularTargets.map((target) => (
					<p>
						<small>
							<img src={target.icon} alt={target.label} />
						</small>
						{target.label}
					</p>
				))}
			</div>

			<div>
				<Smilies className={styles.smilies} />
			</div>
		</div>
	);
};
