import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogged } from './services/storage';

const PrivateRoute = ({ component: Component, ...props }) => (
	<Route {...props} render={props => (
		isLogged()
			? <Component {...props} />
			: <Redirect to='/login' />
	)} />
);

export default PrivateRoute;