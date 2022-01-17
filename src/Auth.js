import React from 'react';
import { Route } from 'react-router-dom';

import LoginContainer from './containers/Login';
import SignUpContainer from './containers/SignUp';

const Auth = () => {
	return (
		<>
			<Route exact path="/" component={LoginContainer} />
			<Route exact path="/login" component={LoginContainer} />
			<Route exact path='/sign-up' component={SignUpContainer} />
		</>
	);
};

export default Auth;
