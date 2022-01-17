import client from './client';

export const getUserTasks = id => client({
	method: 'task',
	url: '/task',
	params: id
});
