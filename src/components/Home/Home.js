import PropTypes from 'prop-types';

const Home = ({ error, loading }) => {
	return (
		<>
			Hello World
		</>
	);
};

Home.propTypes = {
	error: PropTypes.string,
	loading: PropTypes.bool.isRequired
};

export default Home;