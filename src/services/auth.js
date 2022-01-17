import client from './client';

export const authenticate = ({ username, password }) => client({
	method: 'post',
	url: '/authenticate',
	data: { username, password }
});