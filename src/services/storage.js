export const saveSession = ({ id, name, username, is_admin, token }) => {
	localStorage.setItem('id', id);
	localStorage.setItem('name', name);
	localStorage.setItem('token', token);
	localStorage.setItem('username', username);
	localStorage.setItem('is_admin', is_admin);
};

export const isLogged = () => !!getToken();
export const logout = () => localStorage.clear();
export const getToken = () => localStorage.getItem('token');

export const getUser = () => ({
	name: localStorage.getItem('name'),
	isAdmin: localStorage.getItem('is_admin'),
	userName: localStorage.getItem('username')
});

export const getUserId = () => ~~localStorage.getItem('id');