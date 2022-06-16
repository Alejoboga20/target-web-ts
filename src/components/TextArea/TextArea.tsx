import { UseFormRegister } from 'react-hook-form';
import styles from './TextArea.module.scss';

export const TextArea = ({
	error = '',
	label = '',
	name,
	placeholder = '',
	register,
}: TextAreaProps) => {
	return (
		<div className={styles.inputText}>
			{label && <span className={styles.inputText__label}>{label}</span>}

			<textarea
				className={`${styles.inputText__input} ${error && styles.inputText__inputError}`}
				placeholder={placeholder}
				{...register(name)}
			/>

			{error && <small className={styles.inputText__error}>{error}</small>}
		</div>
	);
};

interface TextAreaProps {
	error?: string;
	label?: string;
	name: string;
	placeholder?: string;
	register: UseFormRegister<any>;
}
