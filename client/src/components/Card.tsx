import styled from 'styled-components';

export default styled.div`
  border: 1px solid ${(props): string => props.theme.mainDark};
  border-radius: 10px;
  box-shadow: 3px 3px 5px 0 rgba(0, 0, 0, 0.5);
  padding: 1.25rem;
  margin: 0.4rem;
`;
