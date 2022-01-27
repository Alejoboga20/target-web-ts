import { UseFormRegister } from 'react-hook-form';
import styles from './Select.module.scss';

export const Select = ({ label = '', name, options, register }: SelectProps) => {
	return (
		<div className={styles.select}>
			{label && <span className={styles.select__label}>{label}</span>}

			<select className={styles.select__select} {...register(name)}>
				{options.map((option) => (
					<option key={option}>{option}</option>
				))}
			</select>
		</div>
	);
};

interface SelectProps {
	label?: string;
	name: string;
	options: string[];
	register: UseFormRegister<any>;
}
