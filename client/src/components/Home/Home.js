import React from 'react';
import PropTypes from 'prop-types'

const Home = ({ text }) => (
  <div>{ text }</div>
);

Home.propTypes = {
  text: PropTypes.string
};

export default Home;
