import Iphone from 'assets/Iphone.png';
import AppStore from 'assets/AppStore.png';
import Play from 'assets/Play.png';
import Social from 'assets/Social.png';
import styles from './DefaultRightElement.module.scss';

export const DefaultRightElement = () => {
	return (
		<div className={styles.defaultRightElement}>
			<div className={styles.defaultRightElement__phone}>
				<img src={Iphone} alt='' className={styles.defaultRightElement__phoneBigImg} />
				<img src={Play} alt='' className={styles.defaultRightElement__phoneSmallImg} />
			</div>

			<div className={styles.defaultRightElement__container}>
				<div className={styles.defaultRightElement__store}>
					<img src={AppStore} alt='' />
				</div>
				<div className={styles.defaultRightElement__social}>
					<img src={Social} alt='' />
				</div>
			</div>
		</div>
	);
};
