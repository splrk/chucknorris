import React from 'react';
import PropTypes from 'prop-types';

export interface HomeProps {
  categories: string[];
  text: string;
}

const Home: React.SFC<HomeProps> = ({ categories, text }) => (
  <div>
    <nav>
      {categories.map((category) => (
        <button key={category} type="button">
          {category}
        </button>
      ))}
    </nav>
    {text}
  </div>
);

Home.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  text: PropTypes.string.isRequired,
};

export default Home;
