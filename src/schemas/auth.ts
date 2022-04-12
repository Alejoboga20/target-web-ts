import { genderOptions, PASSWORD_REGEX } from 'constants/constants';
import * as yup from 'yup';

export const signupSchema = yup.object({
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

export const loginSchema = yup.object({
	email: yup.string().required().email(),
	password: yup.string().required(),
});
