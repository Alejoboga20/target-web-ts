import styles from './TwoSidesLayout.module.scss';

export const TwoSidesLayout = ({ rightElement, leftElement }: TwoSidesLayoutProps) => {
	return (
		<div className={styles.layout}>
			<div className={styles.layout__left}>{leftElement}</div>
			<div className={styles.layout__right}>
				{rightElement ? rightElement : <p>No right Element</p>}
			</div>
		</div>
	);
};

interface TwoSidesLayoutProps {
	rightElement?: JSX.Element | JSX.Element[];
	leftElement: JSX.Element | JSX.Element[];
}
