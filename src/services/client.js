import axios from 'axios';
import { getToken, logout } from './storage';

const baseURL = process.env.REACT_APP_API_URL;

const client = axios.create({ baseURL });

const TokenInterceptor = config => {
	config.headers['Authorization'] = getToken();

	return config;
};

client.interceptors.request.use(TokenInterceptor);

client.interceptors.response.use(
	response => Promise.resolve({ data: response.data.data }),
	error => {
		const data = error.response ? error.response.data : null;

		if ((data && data.code === 403) || data.subscription) {
			logout();
			window.location.href = '/board/login';

			return;
		}

		return Promise.resolve({ error: (error.response ? error.response.data : error.message) });
	}
);

export default client;