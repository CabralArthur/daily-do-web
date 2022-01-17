import React from 'react';
import PropTypes from 'prop-types';

import {
	Box,
	Center
} from '@chakra-ui/react';

const Home = ({ error, loading }) => {
	return (
		<>
			<Box h='calc(100vh - 145px)'>
				<Center h='100%'>
					Container
				</Center>
			</Box>
		</>
	);
};

Home.propTypes = {
	error: PropTypes.string,
	loading: PropTypes.bool.isRequired
};

export default Home;