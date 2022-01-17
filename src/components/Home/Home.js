import React from 'react';
import PropTypes from 'prop-types';

import {
	FaGithub,
	FaLinkedin
} from 'react-icons/fa';

import {
	Box,
	Text,
	Link,
	Stack,
	Center,
	Button,
	Container,
	useColorModeValue
} from '@chakra-ui/react';

const Home = ({ error, loading }) => {
	return (
		<>
			<Box h='calc(100vh - 150px)'>
				<Center h='calc(100vh - 150px)'>
					Container
				</Center>
			</Box>
			<Box
				bg={useColorModeValue('gray.50', 'gray.900')}
				color={useColorModeValue('gray.700', 'gray.200')}>
				<Container
					as={Stack}
					maxW={'6xl'}
					py={4}
					direction={{ base: 'column', md: 'row' }}
					spacing={4}
					justify={{ base: 'center', md: 'space-between' }}
					align={{ base: 'center', md: 'center' }}>
					<Text>
						© 2022 DailyDo - Developed by <Link href='https://github.com/CabralArthur' target='_blank'>Arthur Cabral</Link>, all rights reserved.
					</Text>
					<Stack direction={'row'} spacing={6}>
						<Link href='https://github.com/CabralArthur' target='_blank'>
							<Button>
								<FaGithub />
							</Button>
						</Link>
						<Link href='https://www.linkedin.com/in/cabralarthur/' target='_blank'>
							<Button>
								<FaLinkedin />
							</Button>
						</Link>
					</Stack>
				</Container>
			</Box>
		</>
	);
};

Home.propTypes = {
	error: PropTypes.string,
	loading: PropTypes.bool.isRequired
};

export default Home;