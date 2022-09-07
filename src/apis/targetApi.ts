import axios from 'axios';

const CONTENT_TYPE = 'Content-Type';
const ACCESS_TOKEN = 'Access-Token';
const UID = 'uid';
const CLIENT = 'client';

const targetApi = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
	headers: {
		Accept: 'application/json',
		[CONTENT_TYPE]: 'application/json',
		[ACCESS_TOKEN]: '',
		[UID]: '',
		[CLIENT]: '',
	},
});

targetApi.interceptors.request.use((config) => {
	const { headers } = config;
	const session = JSON.parse(localStorage.getItem('session')!) as any;

	if (!session) return config;

	config.headers = {
		...headers,
		[ACCESS_TOKEN]: session.token,
		[UID]: session.uid,
		[CLIENT]: session.client,
	};

	return config;
});

targetApi.interceptors.response.use((config) => {
	const { headers } = config;

	const token = headers['access-token'];

	if (token) {
		const session = {
			token,
			uid: headers[UID],
			client: headers[CLIENT],
		};

		localStorage.setItem('session', JSON.stringify(session));
	}

	return config;
});

export default targetApi;
