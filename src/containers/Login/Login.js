import { toast } from 'react-toastify';
import { React, useState } from 'react';
import Login from '../../components/Login';

import { authenticate } from '../../services/auth';
import { saveSession } from '../../services/storage';

const LoginContainer = props => {
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	const onSignUpClick = () => props.history.push('/sign-up');

	const onLoginClick = async values => {
		setLoading(true);

		const { username, password } = values;
		const { error, data } = await authenticate({ username, password });

		if (data) {
			toast.success('Login feito com sucesso!', {
				position: 'bottom-center',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined
			});

			saveSession(data);
			props.history.push('/home');
		} else if (error) {
			setError(error.message);
			toast.error(error.message, {
				position: 'bottom-center',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined
			});
		}
		setLoading(false);
	};

	return (
		<Login
			error={error}
			loading={loading}
			onLoginClick={onLoginClick}
			onSignUpClick={onSignUpClick}
		/>
	);
};

export default LoginContainer;