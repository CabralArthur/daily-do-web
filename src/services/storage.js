export const saveSession = ({ id, name, userName, token }) => {
	localStorage.setItem('id', id);
	localStorage.setItem('name', name);
	localStorage.setItem('userName', userName);
	localStorage.setItem('token', token);
};

export const isLogged = () => !!getToken();
export const logout = () => localStorage.clear();
export const getToken = () => localStorage.getItem('token');

export const getUser = () => ({
	name: localStorage.getItem('name'),
	userName: localStorage.getItem('userName')
});

export const getUserId = () => ~~localStorage.getItem('id');