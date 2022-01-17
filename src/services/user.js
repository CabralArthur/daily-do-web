import client from './client';

export const getInfo = ({ id }) => client({
	method: 'get',
	url: `/user/${id}`
});

export const getUsers = () => client({
	method: 'get',
	url: '/user'
});

export const create = ({ name, username, password, confirm_password }) => client({
	method: 'post',
	url: '/user',
	data: { name, username, password, confirm_password }
});
