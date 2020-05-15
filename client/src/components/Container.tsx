import styled from 'styled-components';

export default styled.div`
  max-width: ${(props): string => props.theme.maxWidth};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 1rem;
  margin: 0 auto;

  @media (max-width: ${(props): number => props.theme.breaks.medium}px) {
    max-width: 100%;
  }
`;
