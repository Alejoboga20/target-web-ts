import { MapView } from 'components';
import styles from './MainLayout.module.scss';

export const MainLayout = ({ children }: MainLayoutProps) => {
	return (
		<div className={styles.layout}>
			<div className={styles.layout__left}>{children}</div>
			<div className={styles.layout__right}>
				<MapView />
			</div>
		</div>
	);
};

interface MainLayoutProps {
	children: JSX.Element | JSX.Element[];
}
