
import React from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';

import {
	Stack,
	Input,
	Center,
	Button,
	Heading,
	FormLabel,
	Container,
	FormControl,
	FormErrorMessage
} from '@chakra-ui/react';

const SignUp = ({ error, loading, onLoginClick, onSignUpClick }) => (
	<>
		<Center bg='white' w='100%' h='100vh'>
			<Container>
				<Stack>
					<Heading as='h3' size='xl' bgGradient='linear(to-l, #E44D26, #F16529)' bgClip='text'>DailyDo - Gerenciador Diário</Heading>
					<Formik
						validate={values => {
							const errors = {};
							const { password, passwordConfirmation } = values;

							if (password && passwordConfirmation && password !== passwordConfirmation) {
								errors.passwordConfirmation = 'Suas senhas não coincidem';
							}

							if (password && password.length < 6) {
								errors.password = 'Sua senha deve possuir no mínimo 6 caracteres.';
							}

							return errors;
						}}
						initialValues={{ name: '', userName: '', password: '', passwordConfirmation: '' }}
						onSubmit={onSignUpClick}
					>
						{({ errors, values, handleChange, handleSubmit }) => (
							<>
								<FormControl isRequired>
									<FormLabel htmlFor='name'>Nome</FormLabel>
									<Input name="name" id='name' type='text' onChange={handleChange} />
								</FormControl>
								<FormControl isRequired>
									<FormLabel htmlFor='userName'>Nome De Usuário</FormLabel>
									<Input id='userName' type='text' onChange={handleChange} />
								</FormControl>
								<FormControl isRequired isInvalid={!!errors.password}>
									<FormLabel htmlFor='password'>Senha</FormLabel>
									<Input id='password' type='password' onChange={handleChange} />
									{ errors.password && <FormErrorMessage>{errors.password}</FormErrorMessage> }
								</FormControl>
								<FormControl isRequired isInvalid={!!errors.passwordConfirmation}>
									<FormLabel htmlFor='passwordConfirmation'>Confirmar Senha</FormLabel>
									<Input name='passwordConfirmation' id='passwordConfirmation' type='password' onChange={handleChange} />
									{ errors.passwordConfirmation && <FormErrorMessage>{errors.passwordConfirmation}</FormErrorMessage> }
								</FormControl>
								<Button
									isLoading={loading}
									loadingText='Criando conta'
									bgColor='#F16529'
									color='white'
									isDisabled={!values.name || !values.userName || !values.password || !values.passwordConfirmation}
									onClick={handleSubmit}>
									Criar conta</Button>
							</>
						)}
					</Formik>

				</Stack>
			</Container>
		</Center>
	</>
);

SignUp.propTypes = {
	error: PropTypes.string,
	loading: PropTypes.bool.isRequired,
	onLoginClick: PropTypes.func.isRequired,
	onSignUpClick: PropTypes.func.isRequired
};

export default SignUp;