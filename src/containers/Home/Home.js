import { React, useState, useEffect } from 'react';

import Home from '../../components/Home';

const HomeContainer = () => {
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setError(null);
		setLoading(false);
	}, []);

	return (
		<Home
			error={error}
			loading={loading}
		/>
	);
};

export default HomeContainer;