import { React, useState, useEffect } from 'react';

import { Route } from 'react-router-dom';
import { getInfo } from './services/user';
import { logout, getUserId } from './services/storage';

import UserContext from './context/UserContext';

import HomeContainer from './containers/Home';
import AdminContainer from './containers/Admin/Admin';


import {
	FaGithub,
	FaLinkedin
} from 'react-icons/fa';


import {
	Box,
	Text,
	Link,
	Flex,
	Menu,
	Stack,
	Button,
	Heading,
	MenuList,
	MenuItem,
	Container,
	MenuButton,
	useColorModeValue
} from '@chakra-ui/react';

const App = props => {
	const [user, setUser] = useState({});

	const onLogoutClick = () => {
		logout();
		props.history.push('/login');
	};

	const onAdminClick = () => {
		props.history.push('/admin');
	};

	const onHomeClick = () => {
		props.history.push('/');
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
					<Link onClick={() => onHomeClick()}>
						<Heading as="h1" size="md" letterSpacing={'tighter'}>
							DailyDo - Gerenciamento de Tarefas
						</Heading>
					</Link>
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
							{
								user.is_admin &&
								(
									<MenuItem onClick={() => onAdminClick()}>
										<Text color='gray.500'>Admin</Text>
									</MenuItem>
								)
							}
							<MenuItem onClick={() => onLogoutClick()}>
								<Text color='gray.500'>Sair</Text>
							</MenuItem>
						</MenuList>
					</Menu>
				</Flex>
			</Flex>
			<UserContext.Provider value={user}>
				<Route exact path="/" component={HomeContainer} />
				<Route exact path="/admin" component={AdminContainer} />
			</UserContext.Provider>
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

export default App;
