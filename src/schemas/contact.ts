import * as yup from 'yup';

export const contactSchema = yup.object({
	email: yup.string().required('Required Field').email(),
	body: yup.string().required('Required Field').min(20),
});
