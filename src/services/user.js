import client from './client';

export const create = ({ name, username, password, confirm_password }) => client({
	method: 'post',
	url: '/user',
	data: { name, username, password, confirm_password }
});
