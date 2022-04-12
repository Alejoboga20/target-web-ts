import { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { genderOptions, PASSWORD_REGEX } from 'constants/constants';
import { AuthContext } from 'context';
import * as yup from 'yup';

const signupSchema = yup.object({
	username: yup.string().required('Required Field').min(6),
	email: yup.string().required('Required Field').email(),
	password: yup
		.string()
		.matches(
			PASSWORD_REGEX,
			'Password must be at least 6 characters long and include at least one uppercase letter, one lowercase letter, one symbol and one number'
		)
		.required('Required Field'),
	passwordConfirmation: yup
		.string()
		.oneOf([yup.ref('password')], 'Passwords must match')
		.required('Required Field'),
	gender: yup.string().oneOf(genderOptions).required('You must select one gender option'),
});

export const useSignupForm = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<SignupFormInput>({ mode: 'onTouched', resolver: yupResolver(signupSchema) });

	const {
		authState: { error },
		signUp,
		isLoading,
	} = useContext(AuthContext);

	const onSubmit: SubmitHandler<SignupFormInput> = async (signupData) => {
		signUp({ ...signupData });
	};

	return {
		errors,
		handleSubmit,
		onSubmit,
		register,
	};
};

export interface SignupFormInput {
	username: string;
	email: string;
	password: string;
	passwordConfirmation: string;
	gender: Gender;
}

type Gender = 'Male' | 'Female' | 'Other';
