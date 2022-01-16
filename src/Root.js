import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Auth from './Auth';

const Root = () => {
	return (
		<>
			<ToastContainer />
			<ChakraProvider>
				<Router basename="/">
					<Switch>
						<Route exact path="/sign-up" component={Auth} />
					</Switch>
				</Router>
			</ChakraProvider>
		</>
	);
};

export default Root;
