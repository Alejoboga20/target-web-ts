import styles from './InputText.module.scss';

export const InputText = ({ label = '', placeholder = '' }: InputTextProps) => {
	return (
		<div className={styles.inputText}>
			{label && <span className={styles.inputText__label}>{label}</span>}

			<input className={styles.inputText__input} placeholder={placeholder} />
		</div>
	);
};

interface InputTextProps {
	label?: string;
	placeholder?: string;
}
