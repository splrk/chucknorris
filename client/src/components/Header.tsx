import styled from 'styled-components';

export default styled.header`
  background-color: ${(props): string => props.theme.main};
  color: ${(props): string => props.theme.mainText};
  text-align: center;
  width: calc(100% - 1.2rem);
  padding: 1.25rem 0.6em;
`;
