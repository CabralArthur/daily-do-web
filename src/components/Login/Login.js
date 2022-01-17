import React from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';

import {
	Text,
	Link,
	Stack,
	Input,
	Center,
	Button,
	Heading,
	FormLabel,
	Container,
	FormControl
} from '@chakra-ui/react';

const Login = ({ error, loading, onSignUpClick, onLoginClick }) => (
	<Center bg='white' w='100%' h='100vh'>
		<Container>
			<Stack>
				<Center>
					<Heading as='h3' size='xl' mb={8} bgGradient='linear(to-r, #f46b45, #eea849)' bgClip='text'>DailyDo - Gerenciador Diário</Heading>
				</Center>
				<Formik
					initialValues={{ username: '', password: '' }}
					onSubmit={onLoginClick}
				>
					{({ errors, values, handleChange, handleSubmit }) => (
						<>
							<FormControl isRequired>
								<FormLabel htmlFor='username'>Nome De Usuário</FormLabel>
								<Input id='username' type='text' onChange={handleChange} />
							</FormControl>
							<FormControl isRequired >
								<FormLabel htmlFor='password'>Senha</FormLabel>
								<Input id='password' type='password' onChange={handleChange} />
							</FormControl>
							<Button
								isLoading={loading}
								loadingText='Entrando..'
								bgGradient='linear(to-r, #f46b45, #eea849)'
								color='white'
								isDisabled={ !values.username || !values.password }
								onClick={handleSubmit}>
								Criar conta</Button>
						</>
					)}
				</Formik>
				<Center>
					<Text> Ainda não é cadastrado? <Link onClick={onSignUpClick}>Acesse aqui</Link> </Text>
				</Center>
			</Stack>
		</Container>
	</Center>
);

Login.propTypes = {
	error: PropTypes.string,
	loading: PropTypes.bool.isRequired,
	onLoginClick: PropTypes.func.isRequired,
	onSignUpClick: PropTypes.func.isRequired
};

export default Login;