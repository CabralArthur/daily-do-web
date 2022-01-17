import React from 'react';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import { ChakraProvider } from '@chakra-ui/react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import Auth from './Auth';
import PrivateRoute from './PrivateRoute';

const Root = () => {
	return (
		<>
			<ToastContainer />
			<ChakraProvider>
				<Router basename="/">
					<Switch>
						<Route exact path="/(login|sign-up)" component={Auth} />
						<PrivateRoute component={App}/>
					</Switch>
				</Router>
			</ChakraProvider>
		</>
	);
};

export default Root;
