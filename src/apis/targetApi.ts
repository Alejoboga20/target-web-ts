import axios from 'axios';

const APPLICATION_JSON = 'application/json';
const CONTENT_TYPE = 'Content-Type';
const ACCESS_TOKEN = 'access-token';
const UID = 'uid';
const CLIENT = 'client';

const targetApi = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
	headers: {
		Accept: APPLICATION_JSON,
		[CONTENT_TYPE]: APPLICATION_JSON,
	},
});

targetApi.interceptors.request.use((config) => {
	const { headers } = config;

	config.headers = {
		...headers,
		...JSON.parse(JSON.stringify(localStorage.getItem('session'))),
	};

	return config;
});

targetApi.interceptors.response.use((config) => {
	const { headers } = config;

	const token = headers[ACCESS_TOKEN];

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
