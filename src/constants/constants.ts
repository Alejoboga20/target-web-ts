import FootbalIcon from 'assets/SoccerIcon.png';
import TravelIcon from 'assets/TravelIcon.png';
import MusicIcon from 'assets/MusicIcon.png';

export const genderOptions = ['', 'male', 'memale', 'other'];

export const PASSWORD_REGEX = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

export const endpoints = {
	singUp: 'users',
	signIn: 'users/sign_in',

	questions: '/questions',
};

export const popularTargets = [
	{
		icon: FootbalIcon,
		label: 'Football',
	},
	{
		icon: TravelIcon,
		label: 'Travel',
	},
	{
		icon: MusicIcon,
		label: 'Music',
	},
];
