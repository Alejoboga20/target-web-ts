import { Button, InputText } from 'components';
import { Link } from 'react-router-dom';
import { routePaths } from 'router';
import { useSignupForm } from './useSignupForm';
import { Select } from 'components/Select/Select';
import { genderOptions } from '../../constants/constants';
import useTranslation from 'hooks/useTranslation';
import styles from './Signup.module.scss';

export const SignupForm = () => {
	const { errors, handleSubmit, onSubmit, register } = useSignupForm();
	const t = useTranslation();

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.signup__form}>
			<InputText
				label='NAME'
				type='text'
				register={register}
				name='name'
				error={errors.name?.message}
			/>

			<InputText
				label='EMAIL'
				type='email'
				register={register}
				name='email'
				error={errors.email?.message}
			/>

			<InputText
				label='PASSWORD'
				type='password'
				register={register}
				name='password'
				error={errors.password?.message}
			/>

			<InputText
				label='CONFIRM PASSWORD'
				type='password'
				register={register}
				name='passwordConfirmation'
				error={errors.passwordConfirmation?.message}
			/>

			<Select
				label='GENDER'
				name='gender'
				options={genderOptions}
				register={register}
				error={errors.gender?.message}
			/>

			<Button label='SIGN UP' type='submit' />

			<hr />
			<Link to={routePaths.signup}>{t('signup.signinLink')}</Link>
		</form>
	);
};
