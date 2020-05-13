import React from 'react';
import PropTypes from 'prop-types'

const Home = ({ categories, text }) => (
  <div>
    <nav>
      {categories.map(category => <button key={category}>{ category }</button>)}
    </nav>
    { text }
  </div>
);

Home.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
  text: PropTypes.string
};

export default Home;
