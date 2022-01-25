import styles from './Button.module.scss';

export const Button = ({ label }: ButtonProps) => {
	return <button className={styles.button}>{label}</button>;
};

interface ButtonProps {
	label: string;
}
