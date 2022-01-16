import { toast } from 'react-toastify';
import { React, useState } from 'react';

import { create } from '../../services/user';

import SignUp from '../../components/SignUp';

const SignUpContainer = props => {
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	const onLoginClick = () => props.history.push('/login');

	const onSignUpClick = async values => {
		setLoading(true);

		const { name, userName, password, passwordConfirmation } = values;
		const { error, data } = await create({ name, username: userName, password, confirm_password: passwordConfirmation });

		if (data) {
			toast.success('✏️ Usuário criado com sucesso!', {
				position: 'top-right',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined
			});
		} else if (error.code === 409) {
			setError(error.message);
			toast.error(`✏️ ${error.message}`, {
				position: 'top-right',
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
		<SignUp
			error={error}
			loading={loading}
			onLoginClick={onLoginClick}
			onSignUpClick={onSignUpClick}
		/>
	);
};

export default SignUpContainer;
