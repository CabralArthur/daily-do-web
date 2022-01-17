import React from 'react';
import PropTypes from 'prop-types';

import {
	Box,
	Center
} from '@chakra-ui/react';

const Admin = ({ error, loading, users }) => {
	return (
		<Box h='calc(100vh - 145px)'>
			<Center h='100%'>
				AdminContainer
			</Center>
		</Box>
	);
};

Admin.propTypes = {
	error: PropTypes.string,
	loading: PropTypes.bool.isRequired
};

export default Admin;