import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

export interface HomeProps {
  categories: string[];
  text: string;
  getRandomJoke: (category: string) => void;
}

const Home: React.SFC<HomeProps> = ({ categories, text, getRandomJoke }) => (
  <div>
    <nav>
      {categories.map((category) => (
        <Button key={category} onClick={(): void => getRandomJoke(category)} type="button">
          {category}
        </Button>
      ))}
    </nav>
    {text}
  </div>
);

Home.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  text: PropTypes.string.isRequired,
  getRandomJoke: PropTypes.func.isRequired,
};

export default Home;
