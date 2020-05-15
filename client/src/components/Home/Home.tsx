import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Navigation, { NavigationItem } from '../Navigation';
import Container from '../Container';
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
  <Container>
    <Navigation>
      {categories.map((category) => (
        <NavigationItem key={category} onClick={(): void => getRandomJoke(category)}>
          {category}
        </NavigationItem>
      ))}
    </Navigation>
    {jokeLoading ? (
      <Rotating>
        <BrownBeard width="200" height="200" />
      </Rotating>
    ) : (
      <div>{text}</div>
    )}
  </Container>
);

Home.propTypes = {
  jokeLoading: PropTypes.bool.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  text: PropTypes.string.isRequired,
  getRandomJoke: PropTypes.func.isRequired,
};

export default Home;
