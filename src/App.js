import { React, useState, useEffect } from 'react';

import { Route } from 'react-router-dom';
import { getInfo } from './services/user';
import { logout, getUserId } from './services/storage';

import HomeContainer from './containers/Home';
import UserContext from './context/UserContext';

import {
	Flex,
	Menu,
	Text,
	Heading,
	MenuList,
	MenuItem,
	MenuButton
} from '@chakra-ui/react';

const App = props => {
	const [user, setUser] = useState({});

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
					<Heading as="h1" size="md" letterSpacing={'tighter'}>
						DailyDo - Gerenciamento de Tarefas
					</Heading>
				</Flex>

				<Flex
					align="center"
					justify="space-between"
					wrap="wrap"
				>
					<Menu>
						<MenuButton
							minW={0}
							variant={'link'}
							cursor={'pointer'}>
							<Heading size="md" mr='1rem'>Olá, {user.name}</Heading>
						</MenuButton>
						<MenuList>
							<MenuItem>
								<Text color='gray.500'>Configurações</Text>
							</MenuItem>
							<MenuItem onClick={() => onLogoutClick()}>
								<Text color='gray.500'>Sair</Text>
							</MenuItem>
						</MenuList>
					</Menu>
				</Flex>
			</Flex>
			<UserContext.Provider value={user}>
				<Route exact path="/" component={HomeContainer} />
			</UserContext.Provider>
		</>
	);
};

export default App;
