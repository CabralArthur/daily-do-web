import React from 'react';
import { Route } from 'react-router-dom';

import SignUpContainer from './containers/SignUp';

const Auth = () => {
	return (
		<>
			<Route exact path='/sign-up' component={SignUpContainer} />
		</>
	);
};

export default Auth;
