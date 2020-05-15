import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../Button';
import Rotating from '../Rotating';
import { ReactComponent as Beard } from '../beard.svg';

export interface HomeProps {
  jokeLoading: boolean;
  categories: string[];
  text: string;
  getRandomJoke: (category: string) => void;
}

const BrownBeard = styled(Beard)`
  fill: ${(props): string => props.theme.main};
`;

const Home: React.SFC<HomeProps> = ({ jokeLoading, categories, text, getRandomJoke }) => (
  <div>
    <nav>
      {categories.map((category) => (
        <Button key={category} onClick={(): void => getRandomJoke(category)} type="button">
          {category}
        </Button>
      ))}
    </nav>
    {jokeLoading ? (
      <Rotating>
        <BrownBeard width="200" height="200" />
      </Rotating>
    ) : (
      <div>{text}</div>
    )}
  </div>
);

Home.propTypes = {
  jokeLoading: PropTypes.bool.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  text: PropTypes.string.isRequired,
  getRandomJoke: PropTypes.func.isRequired,
};

export default Home;
