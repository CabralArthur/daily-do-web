import { React, useState, useEffect } from 'react';

import { Route } from 'react-router-dom';
import { getInfo } from './services/user';
import { logout, getUserId } from './services/storage';

import HomeContainer from './containers/Home';
import UserContext from './context/UserContext';

import {
	Box,
	Flex,
	Button,
	Heading,
	useDisclosure
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const App = props => {
	const [user, setUser] = useState({});
	const { isOpen, onOpen, onClose } = useDisclosure();
	const handleToggle = () => (isOpen ? onClose() : onOpen());

	const onLogoutClick = () => {
		logout();
		props.history.push('/login');
	};

	useEffect(() => {
		getInfo({ id: getUserId() }).then(user => setUser(user.data));
	}, []);

	return (
		<>
			<Flex
				as="nav"
				align="center"
				justify="space-between"
				wrap="wrap"
				padding={6}
				color="white"
				bgGradient='linear(to-r, #f46b45, #eea849)'
			>
				<Flex align="center" mr={5}>
					<Heading as="h1" size="lg" letterSpacing={'tighter'}>
						DailyDo - Gerenciamento de Tarefas
					</Heading>
				</Flex>

				<Box display={{ base: 'block', md: 'none' }} onClick={handleToggle}>
					<HamburgerIcon />
				</Box>

				<Box display={{ base: isOpen ? 'block' : 'none', md: 'block' }} mt={{ base: 4, md: 0 }}>
					<Button variant='outline' _hover={{ bg: 'teal.700', borderColor: 'teal.700' }} onClick={() => onLogoutClick()}>
						Sair
					</Button>
				</Box>
			</Flex>
			<UserContext.Provider value={user}>
				<Route exact path="/home" component={HomeContainer} />
			</UserContext.Provider>
		</>
	);
};

export default App;
