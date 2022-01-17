import { React, useState, useEffect } from 'react';

import { getUsers } from '../../services/user';

import Admin from '../../components/Admin';

const AdminContainer = props => {
	const [users, setUsers] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setError(null);
		getUsers().then(users => setUsers(users.data));
		setLoading(false);
	}, []);

	return (
		<Admin
			error={error}
			loading={loading}
			users={users}
		/>
	);
};

export default AdminContainer;